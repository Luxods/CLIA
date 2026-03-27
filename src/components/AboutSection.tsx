const AboutSection = () => {
  return (
    <section id="à-propos" className="py-24 px-8 md:px-16">
      <p className="text-[whitesmoke] text-xs font-medium tracking-[0.2em] uppercase mb-6">À Propos</p>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Une communauté passionnée par l'intelligence artificielle.
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
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
              <p className="font-display text-3xl font-bold text-foreground">80+</p>
              <p className="text-sm mt-1">Membres actifs</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">15+</p>
              <p className="text-sm mt-1">Événements/an</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">10+</p>
              <p className="text-sm mt-1">Projets réalisés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
