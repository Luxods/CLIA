import { Linkedin } from "lucide-react";
import photoPlaceholder from "@/assets/equipe/photo-exemple.jpg";

type TeamMember = {
  firstName: string;
  lastName: string;
  role: string;
  linkedIn: string;
};

const teamMembers: TeamMember[] = [
  { firstName: "Thomas", lastName: "Pesquet", role: "Président", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
  { firstName: "Thomas", lastName: "Pesquet", role: "Vice-président", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
  { firstName: "Thomas", lastName: "Pesquet", role: "Chef d'état major", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
  { firstName: "Thomas", lastName: "Pesquet", role: "Amiral", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
  { firstName: "Thomas", lastName: "Pesquet", role: "Capitaine", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
  { firstName: "Thomas", lastName: "Pesquet", role: "Colonnel", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
  { firstName: "Thomas", lastName: "Pesquet", role: "Lieutenant", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
  { firstName: "Thomas", lastName: "Pesquet", role: "Adjudant", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
  { firstName: "Thomas", lastName: "Pesquet", role: "Soldat", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
  { firstName: "Thomas", lastName: "Pesquet", role: "Mousse", linkedIn: "https://www.linkedin.com/in/thomas-pesquet/" },
];

const AboutSection = () => {
  return (
    <div className="bg-white">
      <section
        id="à-propos"
        className="pt-24 px-8 md:px-16 mt-24 flex flex-col justify-center"
        style={{ minHeight: "110vh" }}
      >
        <p className="text-blue-800 text-xs font-medium tracking-[0.2em] uppercase mb-6">À Propos</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-blue-950">
            Une communauté passionnée par l'intelligence artificielle.
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Fondé en 2023, Centrale Lyon IA rassemble des étudiants curieux et ambitieux
              autour de l'intelligence artificielle. Notre mission : démocratiser l'IA au sein
              de l'école et créer des ponts entre le monde académique et l'industrie.
            </p>
            <p>
              Avec plus de 80 membres actifs, nous organisons des formations, hackathons,
              conférences et projets de recherche tout au long de l'année.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-6">
              <div>
                <p className="font-display text-3xl font-bold text-blue-950">80+</p>
                <p className="text-sm mt-1 text-slate-600">Membres actifs</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-blue-950">15+</p>
                <p className="text-sm mt-1 text-slate-600">Événements/an</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-blue-950">10+</p>
                <p className="text-sm mt-1 text-slate-600">Projets réalisés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="équipe" className="pt-0 px-8 md:px-16 pb-28 md:pb-32">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-950 mb-14 md:mb-16 max-w-2xl">
          L'équipe
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {teamMembers.map((member) => (
            <article key={member.role} className="flex flex-col">
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[11/12] overflow-hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
                aria-label={`LinkedIn de ${member.firstName} ${member.lastName}`}
              >
                <img
                  src={photoPlaceholder}
                  alt=""
                  className="h-full w-full object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
                />
              </a>
              <div className="mt-4 flex gap-2 items-start">
                <div className="min-w-0 flex-1 text-left">
                  <p className="font-medium text-blue-800 leading-tight">{member.firstName}</p>
                  <p className="font-display font-semibold text-blue-800 leading-tight">{member.lastName}</p>
                  <p className="mt-1 text-xs text-slate-600 leading-snug">{member.role}</p>
                </div>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-slate-600 hover:text-blue-800 focus-visible:text-blue-800 transition-colors mt-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 rounded-sm"
                  aria-label={`Profil LinkedIn de ${member.firstName} ${member.lastName}`}
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
