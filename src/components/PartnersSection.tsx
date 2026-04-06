import logoGE from "@/assets/logo/logo-ge-healthcare-segmented.png";
import logoMistral from "@/assets/logo/logo-mistral.png";
import logoLovable from "@/assets/logo/logo-lovable.png";
import logoCLC from "@/assets/logo/logo-clc-segmented.png";

const partners = [
  { name: "GE HealthCare", logo: logoGE, url: "https://www.gehealthcare.com/", className: "max-h-10 md:max-h-12" },
  { name: "Mistral AI", logo: logoMistral, url: "https://mistral.ai/", className: "max-h-6 md:max-h-7" },
  { name: "Lovable", logo: logoLovable, url: "https://lovable.dev/", className: "max-h-6 md:max-h-7" },
  { name: "Centrale Lyon Conseil", logo: logoCLC, url: "https://www.centralelyonconseil.fr/", className: "max-h-12 md:max-h-16" },
];

const PartnersSection = () => {
  return (
    <section id="partenaires" className="relative py-24 px-8 md:px-16 scroll-mt-28">
      <p className="text-[whitesmoke] text-xs font-medium tracking-[0.2em] uppercase mb-6">Partenaires</p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight mb-16">
        Ils nous ont accompagnés pour notre premier hackathon.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl h-32 md:h-40 flex items-center justify-center p-6 hover:scale-105 transition-transform"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              className={`${partner.className} w-auto object-contain`}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
