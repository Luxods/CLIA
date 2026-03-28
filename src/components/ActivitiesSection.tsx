import { Brain, Code, Users, Lightbulb } from "lucide-react";

const activities = [
  { icon: Brain, title: "Formations IA", desc: "Des workshops hebdomadaires pour apprendre le machine learning, le deep learning et les LLMs." },
  { icon: Code, title: "Hackathons", desc: "Compétitions intensives pour résoudre des problèmes réels avec l'intelligence artificielle." },
  { icon: Users, title: "Conférences", desc: "Intervenants du monde académique et industriel pour partager leur vision de l'IA." },
  { icon: Lightbulb, title: "Projets R&D", desc: "Des projets concrets appliquant l'IA à des domaines variés : santé, environnement, finance." },
];

const ActivitiesSection = () => {
  return (
    <section id="activités" className="py-24 px-8 md:px-16">
      <p className="text-[whitesmoke] text-xs font-medium tracking-[0.2em] uppercase mb-6">Activités</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl leading-tight mb-16">
        Explorez l'IA sous toutes ses formes.
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {activities.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card rounded-2xl p-8 group hover:border-white/30 transition-colors">
            <Icon className="w-8 h-8 text-[whitesmoke] mb-5" />
            <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
