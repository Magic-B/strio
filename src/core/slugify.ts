import { transliterate } from "./transliterate";

/**
 * Creates a URL-friendly slug from a string
 * @example slugify("Hello World!") // "hello-world"
 * @example slugify("Привет Мир!") // "privet-mir"
 * @example slugify("café résumé") // "cafe-resume"
 * @example slugify("  Multiple   Spaces  ") // "multiple-spaces"
 */
export function slugify(str: string, separator: string = "-"): string {
  let result = transliterate(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, separator);

  if (separator) {
    const escapedSeparator = separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(new RegExp(`^${escapedSeparator}+|${escapedSeparator}+$`, "g"), "");
  }
  
  return result;
}
