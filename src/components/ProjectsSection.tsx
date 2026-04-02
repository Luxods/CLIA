import { Brain, Code, Users, Lightbulb } from "lucide-react";

const projectItems = [
  { icon: Code, title: "Hackathons", desc: "Organisation de compétitions intensives réunissants les meilleurs hackers pour résoudre des problèmes réels avec l'intelligence artificielle, encadrés par des mentors apportants leurs expertises." },
  { icon: Lightbulb, title: "Projets R&D", desc: "Nous développons activement des projets R&D pour que l'IA puisse contribuer à la vie du campus. À suivre..." },
  { icon: Users, title: "Conférences", desc: "Intervenants du monde académique et industriel pour partager leur vision de l'IA aux étudiants de Centrale Lyon." },
  { icon: Brain, title: "Sessions Kaggle", desc: "Des soirées Kaggle pour développer nos compétences en IA." },
];

const ProjectsSection = () => {
  return (
    <section
      id="projets"
      className="relative py-32 md:py-40 px-8 md:px-16 scroll-mt-28"
      aria-labelledby="projets-heading"
    >
      <p className="text-[whitesmoke] text-xs font-medium tracking-[0.2em] uppercase mb-6">Projets</p>
      <h2
        id="projets-heading"
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight mb-16 text-white"
      >
        Hackathons, conférences, projets pour le campus : la vie du club.
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projectItems.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="glass-card rounded-2xl p-8 group hover:border-white/30 transition-colors"
          >
            <Icon className="w-8 h-8 text-[whitesmoke] mb-5" strokeWidth={1.75} />
            <h3 className="font-display text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
