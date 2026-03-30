import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { unboxedPhotoUrls } from "@/data/unboxedGallery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImageOff } from "lucide-react";

/** Motifs qui se répètent : largeurs variées sur 12 colonnes (lg+), parfois pleine largeur sur sm. */
function galleryLayoutClasses(index: number): { cell: string; frame: string } {
  const r = index % 8;
  switch (r) {
    case 0:
      return {
        cell: "sm:col-span-2 lg:col-span-8",
        frame: "aspect-[5/3] sm:aspect-[2/1]",
      };
    case 1:
      return {
        cell: "lg:col-span-4",
        frame: "aspect-[3/4] lg:aspect-[4/5]",
      };
    case 2:
    case 3:
      return {
        cell: "lg:col-span-4",
        frame: "aspect-[3/2]",
      };
    case 4:
      return {
        cell: "sm:col-span-2 lg:col-span-12",
        frame: "aspect-[21/9] sm:aspect-[3/1]",
      };
    case 5:
      return {
        cell: "lg:col-span-6",
        frame: "aspect-[4/3]",
      };
    case 6:
      return {
        cell: "lg:col-span-6",
        frame: "aspect-[3/2]",
      };
    default:
      return {
        cell: "lg:col-span-4",
        frame: "aspect-[3/4] lg:aspect-square",
      };
  }
}

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null || unboxedPhotoUrls.length === 0) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) =>
          i === null ? i : (i + 1) % unboxedPhotoUrls.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i === null ? i : (i - 1 + unboxedPhotoUrls.length) % unboxedPhotoUrls.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close]);

  const open = (index: number) => setLightboxIndex(index);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-28 md:pt-32 pb-24 px-8 md:px-16">
        <p className="text-[whitesmoke] text-xs font-medium tracking-[0.2em] uppercase mb-6">
          Galerie
        </p>
        <div className="max-w-4xl mb-14">
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
          >
            Unboxed Hackaton —{" "}
            <span className="italic text-white/80">mars 2025</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            Retour en images sur le premier hackathon organisé par Centrale Lyon IA.
            Faites défiler la grille et cliquez sur une photo pour l&apos;agrandir.
          </p>
        </div>

        {unboxedPhotoUrls.length === 0 ? (
          <div
            className="glass-card rounded-2xl p-12 md:p-16 flex flex-col items-center text-center max-w-xl mx-auto"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <ImageOff className="w-12 h-12 text-white/30 mb-6" aria-hidden />
            <p className="font-display text-xl font-semibold text-white mb-3">
              Album en préparation
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ajoutez les clichés du hackathon dans le dossier{" "}
              <span className="text-white/70 font-mono text-xs">
                src/assets/gallery/unboxed/
              </span>{" "}
              (JPG, PNG ou WebP). Ils apparaîtront automatiquement ici après
              rechargement.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 lg:grid-flow-dense max-w-7xl items-stretch">
            {unboxedPhotoUrls.map((src, index) => {
              const { cell, frame } = galleryLayoutClasses(index);
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => open(index)}
                  className={`group relative h-full min-h-0 w-full overflow-hidden rounded-2xl bg-black/20 text-left glass-card focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${cell} ${frame}`}
                >
                  <img
                    src={src}
                    alt={`Unboxed hackathon — photo ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        )}
      </main>
      <Footer />

      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(openState) => !openState && close()}
      >
        <DialogContent className="w-auto max-w-[96vw] border-0 bg-[hsl(220_30%_6%)]/98 p-2 sm:p-3 shadow-2xl gap-0">
          <DialogTitle className="sr-only">
            Photo Unboxed {lightboxIndex !== null ? lightboxIndex + 1 : ""}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Vue agrandie. Utilisez les flèches du clavier pour parcourir les photos.
          </DialogDescription>
          {lightboxIndex !== null && unboxedPhotoUrls[lightboxIndex] && (
            <div className="flex items-center justify-center">
              <img
                src={unboxedPhotoUrls[lightboxIndex]}
                alt={`Unboxed — vue agrandie ${lightboxIndex + 1}`}
                className="max-h-[min(85vh,calc(96vw*2/3))] max-w-[min(96vw,calc(85vh*3/2))] h-auto w-auto object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
