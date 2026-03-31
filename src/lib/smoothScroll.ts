/** ease-in-out cubic: début et fin doux, milieu plus vif */
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const DEFAULT_OFFSET_PX = 0
const DEFAULT_DURATION_MS = 900;

let activeFrame: number | null = null;

export function smoothScrollToElement(
  element: HTMLElement,
  options?: { duration?: number; offset?: number }
): void {
  if (activeFrame !== null) {
    cancelAnimationFrame(activeFrame);
    activeFrame = null;
  }

  const duration = options?.duration ?? DEFAULT_DURATION_MS;
  const offset = options?.offset ?? DEFAULT_OFFSET_PX;

  if (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
    return;
  }

  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
  const distance = targetY - startY;
  let startTime: number | null = null;

  function step(now: number) {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + distance * eased);
    if (t < 1) {
      activeFrame = requestAnimationFrame(step);
    } else {
      activeFrame = null;
    }
  }

  activeFrame = requestAnimationFrame(step);
}

export function smoothScrollToTop(options?: { duration?: number }): void {
  const duration = options?.duration ?? DEFAULT_DURATION_MS;

  if (activeFrame !== null) {
    cancelAnimationFrame(activeFrame);
    activeFrame = null;
  }

  if (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  const startY = window.scrollY;
  if (startY <= 0) return;

  const distance = -startY;
  let startTime: number | null = null;

  function step(now: number) {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + distance * eased);
    if (t < 1) {
      activeFrame = requestAnimationFrame(step);
    } else {
      activeFrame = null;
    }
  }

  activeFrame = requestAnimationFrame(step);
}

/** Hash avec ou sans `#` ; retourne false si l’élément est introuvable */
export function smoothScrollToHash(hash: string): boolean {
  const raw = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!raw) return false;
  let id: string;
  try {
    id = decodeURIComponent(raw);
  } catch {
    id = raw;
  }
  const el = document.getElementById(id);
  if (!el) return false;
  smoothScrollToElement(el);
  return true;
}
