import { useEffect, useState } from "react";

/** Hauteur approximative du centre de la barre fixe (px). */
const PROBE_Y = 56;

/**
 * Indique si, au scroll actuel, la zone sous la navbar correspond à un fond clair
 * (sections marquées `data-nav-bg="light"` dans le flux de la page).
 */
export function useNavUnderlayLight() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const update = () => {
      const markers = document.querySelectorAll("[data-nav-bg]");
      let isLight = false;
      for (const el of markers) {
        const r = el.getBoundingClientRect();
        if (r.top <= PROBE_Y && r.bottom > PROBE_Y && el.getAttribute("data-nav-bg") === "light") {
          isLight = true;
          break;
        }
      }
      setLight(isLight);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return light;
}
