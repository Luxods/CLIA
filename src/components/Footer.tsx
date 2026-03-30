import { Link } from "react-router-dom";
import logoCLIA from "@/assets/logoCLIA.jpg";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div
        className="relative w-full"
        style={{
          background: "rgba(181, 203, 226, 0.05)",
          backdropFilter: "blur(10px) saturate(100%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        <div className="px-10 md:px-20 py-12 flex flex-col md:flex-row items-stretch justify-between gap-10">
          <Link to="/" className="flex items-start gap-2 shrink-0">
            <img
              src={logoCLIA}
              alt="Centrale Lyon IA"
              className="h-[75%] w-auto rounded"
            />
          </Link>

          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-3">
              <span className="text-white text-sm font-semibold tracking-widest uppercase mb-1">
                Découvrir
              </span>
              {[
                { label: "Accueil", to: "/" },
                { label: "Galerie", to: "/galerie" },
                { label: "À Propos", to: "/#à-propos" },
                { label: "Activités", to: "/#activités" },
                { label: "Projets", to: "/#projets" },
              ].map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(200, 210, 225, 0.55)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(200, 210, 225, 0.55)")
                  }
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white text-sm font-semibold tracking-widest uppercase mb-1">
                Réseaux Sociaux
              </span>
              {["Instagram", "LinkedIn"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(200, 210, 225, 0.55)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(200, 210, 225, 0.55)")
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="px-10 md:px-20 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            color: "rgba(200, 210, 225, 0.4)",
          }}
        >
          <span>© 2026 Centrale Lyon IA. Tous droits réservés.</span>
          
          <a
            href="mailto:contact@centralelyon-ia.fr"
            className="transition-colors duration-200"
            style={{ color: "rgba(200, 210, 225, 0.4)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(200, 210, 225, 0.4)")
            }
          >
            contact@centralelyon-ia.fr
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;