const modules = import.meta.glob("../assets/gallery/unboxed/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

/** URLs des photos, triées par nom de fichier. Placez les fichiers dans `src/assets/gallery/unboxed/`. */
export const unboxedPhotoUrls: string[] = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => modules[key]);
