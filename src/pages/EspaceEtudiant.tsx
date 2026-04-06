import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import logoCLIA from "@/assets/logo/logoCLIA.jpg";
import { useHomeLogoClick } from "@/hooks/use-home-logo-click";

const EspaceEtudiant = () => {
  const onLogoClick = useHomeLogoClick();

  return (
    <div className="min-h-screen relative text-foreground">
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-[60] px-8 md:px-16 pt-[20px] pb-3">
        <Link to="/" onClick={onLogoClick} className="inline-flex items-center">
          <img src={logoCLIA} alt="Centrale Lyon IA" className="h-16 w-auto rounded" />
        </Link>
      </div>
      <main className="relative z-10 mx-auto max-w-lg px-8 pt-16 pb-24 text-center">
        <h1 className="font-display text-3xl font-bold text-white md:text-4xl">Espace étudiant</h1>
        <p className="mt-4 font-body text-[15px] leading-relaxed text-white/70">
          Cette page est en cours de développement et permettra aux étudiants de
          Centrale Lyon d'accéder à nos solutions IA après authentification.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex font-body text-sm font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
        >
          Retour à l’accueil
        </Link>
      </main>
    </div>
  );
};

export default EspaceEtudiant;
