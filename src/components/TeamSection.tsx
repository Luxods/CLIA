import { Linkedin } from "lucide-react";
import photoPlaceholder from "@/assets/equipe/photo-exemple.jpg";

type TeamMember = {
  firstName: string;
  lastName: string;
  role: string;
  linkedIn: string;
};

const teamMembers: TeamMember[] = [
  { firstName: "Alexandre", lastName: "Ansart", role: "Président", linkedIn: "https://www.linkedin.com/in/alexandre-ansart/" },
  { firstName: "Florian", lastName: "Dougnon", role: "Vice-président", linkedIn: "https://www.linkedin.com/in/florian-dougnon-greder-326421306/" },
  { firstName: "Bastian", lastName: "Paoli", role: "Trésorier", linkedIn: "https://www.linkedin.com/in/bastian-paoli-99b75b321/" },
  { firstName: "Louis", lastName: "Pagès", role: "R&D", linkedIn: "https://www.linkedin.com/in/louis-pag%C3%A8s-85b100394/" },
  { firstName: "Balthazar", lastName: "Buclon", role: "R&D", linkedIn: "https://www.linkedin.com/in/balthazar-buclon/" },
  { firstName: "Enzo", lastName: "Ducros", role: "Hackathon", linkedIn: "https://www.linkedin.com/in/enzo-ducros-69994632b/" },
  { firstName: "Théo", lastName: "Monferrini", role: "Conférences", linkedIn: "https://www.linkedin.com/in/th%C3%A9o-monferrini-7ba57a2a6/" },
  { firstName: "Alexandre", lastName: "Thiébaut-Georges", role: "Stages", linkedIn: "https://www.linkedin.com/in/alexandre-thi%C3%A9baut-george/" },
  { firstName: "Romain", lastName: "Joly", role: "Stages", linkedIn: "https://www.linkedin.com/in/romain-joly-687126381/" },
  { firstName: "Timéo", lastName: "Larrède", role: "Kaggle", linkedIn: "https://www.linkedin.com/in/tim%C3%A9o-larr%C3%A8de-b089b4376/" },
  { firstName: "Martin", lastName: "Mahérault", role: "R&D", linkedIn: "https://www.linkedin.com/in/martin-mah%C3%A9rault-8081793b3/" },
  { firstName: "Nolann", lastName: "Vignard", role: "Communication", linkedIn: "https://www.linkedin.com/in/nolann-vignard-8789a33a5/" },
  { firstName: "Ilyess", lastName: "Mejri", role: "R&D", linkedIn: "https://www.linkedin.com/" },
  { firstName: "Naël", lastName: "El Hamidi", role: "Communication", linkedIn: "https://www.linkedin.com/in/na%C3%ABl-el-hamidi-5a472229a/" },
];

const TeamSection = () => {
  return (
    <section
      id="équipe"
      className="scroll-mt-28 pt-24 md:pt-32 px-8 md:px-16 pb-36 md:pb-44"
      aria-labelledby="team-heading"
    >
      <h2
        id="team-heading"
        className="font-display text-3xl md:text-4xl font-bold text-blue-950 mb-14 md:mb-16 max-w-2xl"
      >
        L'équipe
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
        {teamMembers.map((member) => (
          <article key={`${member.firstName}-${member.lastName}`} className="flex flex-col">
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
  );
};

export default TeamSection;
