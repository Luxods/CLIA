import { Link } from "react-router-dom";
import logoCLIA from "@/assets/logo/logoCLIA.jpg";
import { useHomeLogoClick } from "@/hooks/use-home-logo-click";

const Footer = () => {
  const onLogoClick = useHomeLogoClick();

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
        <div className="flex flex-row flex-nowrap items-start justify-between gap-x-4 gap-y-6 px-6 py-12 sm:px-10 md:px-20">
          <Link to="/" onClick={onLogoClick} className="flex min-w-0 shrink-0 items-start gap-2">
            <img
              src={logoCLIA}
              alt="Centrale Lyon IA"
              className="h-[clamp(2.5rem,8.5vw,4rem)] w-auto max-w-[min(54vw,13.5rem)] rounded object-contain object-left md:h-16 md:max-w-none"
            />
          </Link>

          <div className="flex min-w-0 shrink flex-row flex-wrap items-start justify-end gap-x-5 gap-y-6 sm:gap-x-10 md:flex-nowrap md:gap-x-16 lg:gap-x-24">
            <div className="flex flex-col gap-3">
              <span className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-white sm:text-xs">
                Découvrir
              </span>
              {[
                { label: "Hackathon", to: "/#hackathon" },
                { label: "À Propos", to: "/#à-propos" },
                { label: "Projets", to: "/#projets" },
                { label: "Équipe", to: "/#équipe" },
              ].map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-[12px] leading-snug transition-colors duration-200 sm:text-[13px]"
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
              <span className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-white sm:text-xs">
                Réseaux Sociaux
              </span>
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/centrale-lyon-ia/",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/centrale_lyon_ia/",
                },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] leading-snug transition-colors duration-200 sm:text-[13px]"
                  style={{ color: "rgba(200, 210, 225, 0.55)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(200, 210, 225, 0.55)")
                  }
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="px-6 sm:px-10 md:px-20 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            color: "rgba(200, 210, 225, 0.4)",
          }}
        >
          <span>© 2026 Centrale Lyon IA. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;