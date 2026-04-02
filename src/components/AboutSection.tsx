const AboutSection = () => {
  return (
    <section
      id="à-propos"
      className="scroll-mt-28 pt-24 px-8 md:px-16 mt-24 flex flex-col justify-center"
      style={{ minHeight: "110vh" }}
      aria-labelledby="about-heading"
    >
      <p className="text-blue-800 text-xs font-medium tracking-[0.2em] uppercase mb-6">À Propos</p>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <h2
          id="about-heading"
          className="font-display text-4xl md:text-5xl font-bold leading-tight text-blue-950"
        >
          Une communauté passionnée par l'intelligence artificielle.
        </h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Fondé en 2025, Centrale Lyon IA rassemble les étudiants curieux et ambitieux de l'école
            qui souhaitent participer aux développements de projets innovants et d'évènements autour de l'IA.
            Notre mission : démocratiser l'IA au sein
            de l'école et créer des ponts entre le monde académique et l'industrie.
          </p>
          <p>
            Avec 10 membres actifs, nous organisons des hackathons,
            conférences et sessions d'entrainements, et développons des projets
            R&D pour que l'IA puisse contribuer à la vie du campus.
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
  );
};

export default AboutSection;
