import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollToHash } from "@/lib/smoothScroll";

/**
 * Sur la page d’accueil, déclenche un scroll animé (ease-in-out) vers la cible du hash.
 */
const HashScrollEffect = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;

    let innerId = 0;
    let cancelled = false;

    const outerId = requestAnimationFrame(() => {
      if (cancelled) return;
      innerId = requestAnimationFrame(() => {
        if (!cancelled) smoothScrollToHash(hash);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(outerId);
      cancelAnimationFrame(innerId);
    };
  }, [location.pathname, location.hash]);

  return null;
};

export default HashScrollEffect;
