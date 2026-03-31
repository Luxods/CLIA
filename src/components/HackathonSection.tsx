import { Link } from "react-router-dom";
import { ChevronRight, Images } from "lucide-react";
import {
  unboxedFeaturedAccentUrl,
  unboxedFeaturedWideUrl,
} from "@/data/unboxedGallery";

const HackathonSection = () => {
  const wideSrc = unboxedFeaturedWideUrl;
  const accentSrc = unboxedFeaturedAccentUrl;

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
          <Link
            to="/galerie"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/85 transition-colors group"
          >
            <Images className="w-4 h-4 opacity-80" aria-hidden />
            Voir toute la galerie
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Image 10 : ambiance / détail à côté du texte (desktop), calée à droite de la colonne */}
        <div className="lg:col-span-7 flex lg:justify-end">
          {accentSrc ? (
            <div className="relative overflow-hidden rounded-2xl glass-card aspect-[4/3] lg:aspect-[16/10] lg:max-h-[min(420px,50vh)] w-full lg:w-[min(100%,48rem)]">
              <img
                src={accentSrc}
                alt="Unboxed — moment du hackathon"
                className="absolute inset-0 h-full w-full object-cover object-[56%_15%]"
                loading="lazy"
              />
            </div>
          ) : (
            <div
              className="rounded-2xl border border-white/10 bg-white/[0.03] aspect-[4/3] lg:aspect-[16/10] lg:max-h-[min(420px,50vh)] w-full lg:w-[min(100%,48rem)] flex items-center justify-center p-8"
              aria-hidden
            >
              <p className="text-center text-sm text-muted-foreground max-w-xs">
                Ajoutez{" "}
                <span className="font-mono text-xs text-white/60">10.jpg</span>{" "}
                dans{" "}
                <span className="font-mono text-xs text-white/60">
                  src/assets/gallery/unboxed/
                </span>{" "}
                pour l&apos;aperçu ici.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Image 01 : bandeau large, ambiance générale */}
      <div className="max-w-7xl mx-auto">
        {wideSrc ? (
          <div className="relative overflow-hidden rounded-2xl glass-card aspect-[21/9] sm:aspect-[3/1] min-h-[160px] sm:min-h-[200px]">
            <img
              src={wideSrc}
              alt="Unboxed — vue d&apos;ensemble du hackathon"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="rounded-2xl border border-white/10 bg-white/[0.03] aspect-[21/9] min-h-[160px] flex items-center justify-center p-6"
            aria-hidden
          >
            <p className="text-center text-sm text-muted-foreground max-w-md">
              Ajoutez{" "}
              <span className="font-mono text-xs text-white/60">01.jpg</span>{" "}
              dans le même dossier pour la bannière panoramique.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HackathonSection;
