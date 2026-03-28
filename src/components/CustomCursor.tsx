import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;
    let animFrame: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dx = mouseX - curX;
      const dy = mouseY - curY;

      curX += dx * 0.12;
      curY += dy * 0.12;

      // Vitesse totale
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Étirement proportionnel à la vitesse
      const stretch = Math.min(speed * 0.04, 0.6);
      const scaleX = 1 + stretch * 0.2;
      const scaleY = 1 - stretch * 0.1;

      // Angle de déplacement
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      cursor.style.transform = `translate(${curX - 12}px, ${curY - 12}px) rotate(${angle}deg) scaleX(${scaleX}) scaleY(${scaleY})`;

      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: 17,
        height: 17,
        borderRadius: "50%",
        background: "rgba(157, 193, 242, 0.05)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid #182230",
      }}
    />
  );
};

export default CustomCursor;