import { ExternalLink, Images, Rocket } from "lucide-react";
import wideSrc from "@/assets/01.jpg";
import accentSrc from "@/assets/10.jpg";

/** Lien site Unboxed */
const HACKATHON_MORE_INFO_URL = "https://unboxedhack.com/";

/** Lien page galerie du site Unboxed */
const HACKATHON_GALLERY_URL = "https://unboxedhack.com/galerie/";

const HackathonSection = () => {

  return (
    <section
      id="hackathon"
      className="relative py-24 px-8 md:px-16 scroll-mt-28"
    >
      <p className="text-[whitesmoke] text-xs font-medium tracking-[0.2em] uppercase mb-6">
        Hackathon
      </p>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12 lg:mb-16">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-xl">
            Unboxed —{" "}
            <span className="italic text-white/85">mars 2025</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
            Notre premier hackathon sur le campus : 80 hackers et une trentaine d&apos;heures
            pour imaginer et prototyper des solutions IA afin d'aider les oncologues
            et radiologues dans leurs métiers, encadrés par des mentors experts du secteur
            de la santé et de l'IA agentique.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={HACKATHON_MORE_INFO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/85 transition-colors group"
            >
              <Rocket className="w-4 h-4 opacity-80 shrink-0" aria-hidden />
              En savoir plus sur nos hackathons
              <ExternalLink className="w-4 h-4 opacity-80 shrink-0" aria-hidden />
            </a>
            <a
              href={HACKATHON_GALLERY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/85 transition-colors group"
            >
              <Images className="w-4 h-4 opacity-80 shrink-0" aria-hidden />
              Voir toute la galerie
              <ExternalLink
                className="w-4 h-4 opacity-80 shrink-0"
                aria-hidden
              />
            </a>
          </div>
        </div>

        {/* Image 10 : ambiance / détail à côté du texte (desktop), calée à droite de la colonne */}
        <div className="lg:col-span-7 flex lg:justify-end">
          <div className="relative overflow-hidden rounded-2xl glass-card aspect-[4/3] lg:aspect-[16/10] lg:max-h-[min(420px,50vh)] w-full lg:w-[min(100%,48rem)]">
            <img
              src={accentSrc}
              alt="Unboxed — moment du hackathon"
              className="absolute inset-0 h-full w-full object-cover object-[56%_15%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Image 01 : bandeau large, ambiance générale */}
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl glass-card aspect-[21/9] sm:aspect-[3/1] min-h-[160px] sm:min-h-[200px]">
          <img
            src={wideSrc}
            alt="Unboxed — vue d&apos;ensemble du hackathon"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
