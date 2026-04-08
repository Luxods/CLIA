import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const distDir = path.resolve(__dirname, "..", "dist");

/** Mode `node server/index.mjs dev` : uniquement l’API (port 8787), pour Vite en local. */
const apiOnly = process.argv[2] === "dev";
const PORT = Number(process.env.PORT) || (apiOnly ? 8787 : 3000);
const HOST = process.env.HOST || "0.0.0.0";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const NOTIFY_EMAILS = (process.env.CONTACT_NOTIFY_EMAILS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".map": "application/json",
};

function resolveStaticPath(urlPath) {
  const pathname = new URL(urlPath, "http://localhost").pathname;
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  let rel = decoded === "/" || decoded === "" ? "index.html" : decoded.replace(/^\/+/, "");
  rel = path.normalize(rel).replace(/^(\.\.(\/|\\|$))+/, "");
  if (rel.startsWith("..")) return null;
  const base = path.resolve(distDir);
  const full = path.resolve(base, rel);
  if (!full.startsWith(base + path.sep) && full !== path.join(base, "index.html")) {
    return null;
  }
  return full;
}

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

async function readJsonBody(req, limit = 48_000) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new Error("payload_too_large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("invalid_json"));
      }
    });
    req.on("error", reject);
  });
}

async function handleContact(req, res) {
  if (!RESEND_API_KEY || !FROM_EMAIL || NOTIFY_EMAILS.length === 0) {
    sendJson(res, 503, {
      error: "contact_not_configured",
      message: "Le serveur de contact n’est pas configuré (variables d’environnement).",
    });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch (e) {
    if (e.message === "payload_too_large") {
      sendJson(res, 413, { error: "payload_too_large" });
      return;
    }
    sendJson(res, 400, { error: "invalid_json" });
    return;
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    sendJson(res, 400, { error: "missing_fields" });
    return;
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    sendJson(res, 400, { error: "invalid_email" });
    return;
  }

  const subject = `[Site CLIA] Message de ${name}`;
  const text = `De : ${name} <${email}>\n\n${message}`;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: NOTIFY_EMAILS,
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!resendRes.ok) {
    const detail = await resendRes.text();
    console.error("[contact] Resend error:", resendRes.status, detail);
    sendJson(res, 502, { error: "send_failed" });
    return;
  }

  sendJson(res, 200, { ok: true });
}

function serveStatic(req, res) {
  const urlPath = req.url.split("?")[0];
  let filePath = resolveStaticPath(urlPath);

  const tryFile = (fp, fallbackSpa) => {
    fs.stat(fp, (err, st) => {
      if (!err && st.isFile()) {
        fs.readFile(fp, (readErr, data) => {
          if (readErr) {
            res.writeHead(500);
            res.end();
            return;
          }
          const ext = path.extname(fp);
          res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
          res.end(data);
        });
        return;
      }
      if (fallbackSpa) {
        const indexPath = path.join(distDir, "index.html");
        tryFile(indexPath, false);
        return;
      }
      res.writeHead(404);
      res.end("Not found");
    });
  };

  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (err, st) => {
    if (!err && st.isDirectory()) {
      tryFile(path.join(filePath, "index.html"), true);
      return;
    }
    if (!err && st.isFile()) {
      tryFile(filePath, false);
      return;
    }
    tryFile(filePath, true);
  });
}

const server = http.createServer(async (req, res) => {
  const urlPath = req.url.split("?")[0];

  if (req.method === "POST" && urlPath === "/api/contact") {
    try {
      await handleContact(req, res);
    } catch (e) {
      console.error("[contact]", e);
      sendJson(res, 500, { error: "internal" });
    }
    return;
  }

  if (apiOnly) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405);
    res.end();
    return;
  }

  serveStatic(req, res);
});

server.listen(PORT, HOST, () => {
  if (apiOnly) {
    console.log(`[contact] API seule sur http://127.0.0.1:${PORT}`);
  } else {
    console.log(`[site] http://${HOST}:${PORT} (dossier dist/)`);
  }
});
