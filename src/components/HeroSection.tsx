import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import logoCLIA from "@/assets/logo/logoCLIA.jpg";
import { useHomeLogoClick } from "@/hooks/use-home-logo-click";

const HeroSection = () => {
  const onLogoClick = useHomeLogoClick();

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Logo dès lg (même logique que la nav centrale) — hamburger seul sur le coin gauche en dessous de lg */}
      <div className="absolute top-0 left-0 z-[60] hidden min-h-[86px] items-center pl-[max(4rem,env(safe-area-inset-left))] pr-[max(4rem,env(safe-area-inset-right))] pt-[max(0px,env(safe-area-inset-top))] lg:flex">
        <Link to="/" onClick={onLogoClick} className="inline-flex items-center">
          <img src={logoCLIA} alt="Centrale Lyon IA" className="h-16 w-auto rounded" />
        </Link>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 pt-32">
        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-4xl animate-fade-in-up text-white"
        >
          Entreprendre
          <br />
          et construire
          <br />
          avec l&apos;IA.
        </h1>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-10 max-w-md sm:max-w-none animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3 font-medium text-sm font-body transition-all hover:shadow-lg bg-primary text-primary-foreground hover:opacity-90 w-full sm:w-auto"
          >
            Contactez-nous
            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            to="/#à-propos"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3 text-sm font-medium font-body transition-all duration-300 text-white hover:bg-black w-full sm:w-auto"
            style={{
              background: 'rgba(60, 80, 120, 0.4)',
              backdropFilter: 'blur(12px)',
            }}
          >
            En savoir plus
          </Link>
        </div>
      </div>

      <div className="relative z-10 px-8 md:px-16 pb-[max(3rem,env(safe-area-inset-bottom))]">
        <p
          className="text-foreground/70 text-base md:text-lg max-w-md ml-0 md:ml-auto text-left md:text-right animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          L'association de Centrale Lyon dédiée à l'IA, qui organise des hackathons et innove pour le campus.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
