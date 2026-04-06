import { useState } from "react";
import { ArrowRight, Instagram, Linkedin, Loader2, Mail, MapPin } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const glassInputStyle = {
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.3)",
  transition: "border-color 0.4s ease",
  fontFamily: "'DM Mono', monospace",
  letterSpacing: "0.02em",
};

const glassInputFocusStyle = {
  ...glassInputStyle,
  border: "1px solid rgba(255,255,255,0.7)",
};

const CONTACT_EMAIL = "contact@centralelyon-ia.fr";
const LINKEDIN_HREF = "https://www.linkedin.com/company/centrale-lyon-ia/";
const INSTAGRAM_HREF = "https://www.instagram.com/centrale_lyon_ia/";
const VENUE_LABEL = "École Centrale de Lyon, Écully";
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE_LABEL)}`;

const contactRowLinkClass =
  "inline-flex items-center gap-3 rounded-md py-1 px-2 -my-1 transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25";

const ContactSection = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    if (!name || !email || !message) {
      toast.error("Merci de remplir tous les champs.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        if (data.error === "contact_not_configured") {
          toast.error("Le formulaire de contact n’est pas encore configuré côté serveur.");
        } else {
          toast.error("Envoi impossible pour le moment. Réessayez plus tard ou écrivez-nous par email.");
        }
        return;
      }
      toast.success("Message envoyé. Nous vous répondrons dès que possible.");
      form.reset();
    } catch {
      toast.error("Erreur réseau. Vérifiez votre connexion ou contactez-nous par email.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full box-border py-24 px-8 md:px-16 flex flex-col justify-center"
    >
      <p className="text-[whitesmoke] text-xs font-medium tracking-[0.2em] uppercase mb-6">Contact</p>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
            Envie de construire quelque chose avec nous ?
          </h2>
          <div className="flex flex-col items-start gap-4 text-muted-foreground">
            <a href={`mailto:${CONTACT_EMAIL}`} className={contactRowLinkClass}>
              <Mail className="w-5 h-5 text-[whitesmoke] shrink-0" aria-hidden />
              <span>{CONTACT_EMAIL}</span>
            </a>
            <a
              href={LINKEDIN_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={contactRowLinkClass}
            >
              <Linkedin className="w-5 h-5 text-[whitesmoke] shrink-0" aria-hidden />
              <span>Centrale Lyon IA sur LinkedIn</span>
            </a>
            <a
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={contactRowLinkClass}
            >
              <Instagram className="w-5 h-5 text-[whitesmoke] shrink-0" aria-hidden />
              <span>Centrale Lyon IA sur Instagram</span>
            </a>
            <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className={contactRowLinkClass}>
              <MapPin className="w-5 h-5 text-[whitesmoke] shrink-0" aria-hidden />
              <span>{VENUE_LABEL}</span>
            </a>
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Votre prénom et nom"
            className="w-full bg-transparent px-6 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none"
            style={focusedField === "name" ? glassInputFocusStyle : glassInputStyle}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Votre email"
            className="w-full bg-transparent px-6 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none"
            style={focusedField === "email" ? glassInputFocusStyle : glassInputStyle}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
          />
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Votre message"
            className="w-full bg-transparent px-6 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none resize-none"
            style={focusedField === "message" ? glassInputFocusStyle : glassInputStyle}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
          />
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] text-sm font-medium transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
            style={{
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.05em",
              background: "rgba(255,255,255,1)",
              color: "#0a0a0a",
              boxShadow: "0 4px 20px rgba(255,255,255,0.15)",
            }}
            onMouseEnter={(e) => {
              if (sending) return;
              e.currentTarget.style.background = "rgba(230,230,230,1)";
              e.currentTarget.style.boxShadow = "0 4px 30px rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,1)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,255,255,0.15)";
            }}
          >
            {sending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                Envoi…
              </>
            ) : (
              <>
                Envoyer
                <ArrowRight className="w-4 h-4" aria-hidden />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
