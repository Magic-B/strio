import { transliterate } from "./transliterate";

/**
 * Creates a URL-friendly slug from a string
 * @example slugify("Hello World!") // "hello-world"
 * @example slugify("Привет Мир!") // "privet-mir"
 * @example slugify("café résumé") // "cafe-resume"
 * @example slugify("  Multiple   Spaces  ") // "multiple-spaces"
 */
export function slugify(str: string, separator: string = "-"): string {
  return transliterate(str)
    .toLowerCase()
    // Replace non-alphanumeric characters with separator
    .replace(/[^a-z0-9]+/g, separator)
    // Remove separators from edges
    .replace(new RegExp(`^${separator}+|${separator}+$`, "g"), "");
}
