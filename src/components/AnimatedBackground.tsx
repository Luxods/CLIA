import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const raysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (raysRef.current) {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

            // Mask origin sweeps slowly but stays wide enough to not hide content
            const maskX = 100 - progress * 30;
            const maskY = progress * 35;

            // Gentle scale breathing
            const scale = 1 + Math.sin(progress * Math.PI) * 0.06;

            // Background position shift — very subtle
            const bgShift = scrollY * 0.02;

            raysRef.current.style.maskImage = `radial-gradient(ellipse at ${maskX}% ${maskY}%, black 40%, transparent 70%)`;
            raysRef.current.style.webkitMaskImage = `radial-gradient(ellipse at ${maskX}% ${maskY}%, black 40%, transparent 70%)`;
            raysRef.current.style.transform = `scale(${scale})`;
            raysRef.current.style.backgroundPosition = `${50 + bgShift}% 50%, ${50 + bgShift}% 50%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        ref={raysRef}
        className="rays-hero"
        style={{ transition: "transform 0.3s ease-out, mask-image 0.3s ease-out, -webkit-mask-image 0.3s ease-out", transformOrigin: "center center" }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
