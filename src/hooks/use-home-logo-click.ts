import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { smoothScrollToTop } from "@/lib/smoothScroll";

/** Clic logo : accueil + scroll animé vers le haut (sans bloquer nouvel onglet / Ctrl+clic). */
export function useHomeLogoClick() {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();

      if (location.pathname === "/" && location.hash) {
        navigate("/", { replace: true });
      } else if (location.pathname !== "/") {
        navigate("/");
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          smoothScrollToTop();
        });
      });
    },
    [location.pathname, location.hash, navigate]
  );
}
