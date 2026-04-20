import { Link } from "react-router-dom";
import { ChevronRight, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="à-propos"
      className="scroll-mt-28 pt-24 px-8 md:px-16 mt-24 flex flex-col justify-center md:min-h-[110vh]"
      aria-labelledby="about-heading"
    >
      <p className="text-blue-800 text-xs font-medium tracking-[0.2em] uppercase mb-6">À Propos</p>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <h2
          id="about-heading"
          className="font-display text-4xl md:text-5xl font-bold leading-tight text-blue-950"
        >
          Une communauté passionnée par l'intelligence artificielle.
        </h2>
        <div className="space-y-6 pb-10 text-slate-700 leading-relaxed md:pb-0">
          <p>
            Fondé en 2025, Centrale Lyon IA rassemble les étudiants curieux et ambitieux de l'école
            qui souhaitent participer aux développements de projets innovants et d'évènements autour de l'IA.
            Notre mission : démocratiser l'IA au sein
            de l'école et créer des ponts entre le monde académique et l'industrie.
          </p>
          <p>
            Avec 14 membres actifs, nous organisons des hackathons,
            conférences et sessions d'entrainements, et développons des projets
            R&D pour que l'IA puisse contribuer à la vie du campus.
          </p>
          <Link
            to="/#équipe"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-950 hover:text-blue-800 transition-colors group"
          >
            <Users className="w-4 h-4 opacity-80" aria-hidden />
            Découvrir notre équipe
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
