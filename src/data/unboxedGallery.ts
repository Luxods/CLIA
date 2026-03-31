const modules = import.meta.glob("../assets/gallery/unboxed/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

/** URLs des photos, triées par nom de fichier. Placez les fichiers dans `src/assets/gallery/unboxed/`. */
export const unboxedPhotoUrls: string[] = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => modules[key]);

/** URL d'une photo par nom de fichier sans chemin (ex. `01` → `01.jpg`). */
export function unboxedUrlByFilenameStem(stem: string): string | undefined {
  const escaped = stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`^${escaped}\\.(jpe?g|png|webp)$`, "i");
  const key = Object.keys(modules).find((k) => {
    const file = k.split(/[/\\]/).pop() ?? "";
    return re.test(file);
  });
  return key ? modules[key] : undefined;
}

export const unboxedFeaturedWideUrl = unboxedUrlByFilenameStem("01");
export const unboxedFeaturedAccentUrl = unboxedUrlByFilenameStem("10");
