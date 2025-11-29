/**
 * Converts technical strings to human-readable format
 * Transforms snake_case, kebab-case, or camelCase into "Normal text"
 * @param str The input string
 * @example humanize("snake_case_text") // "Snake case text"
 * @example humanize("hello-world") // "Hello world"
 * @example humanize("camelCaseText") // "Camel case text"
 */
export function humanize(str: string): string {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/\s+/g, " ");
}

/**
 * Converts string to title case with smart handling of articles and prepositions
 * @param str The input string
 * @param preserveCase If true, preserves uppercase words (e.g., "API")
 * @example titleCase("hello world") // "Hello World"
 * @example titleCase("the lord of the rings") // "The Lord of the Rings"
 */
export function titleCase(str: string, preserveCase: boolean = false): string {
  const smallWords = new Set([
    "a", "an", "and", "as", "at", "but", "by", "for", "from",
    "in", "into", "nor", "of", "on", "or", "the", "to", "with"
  ]);

  const words = str.trim().split(/\s+/);
  
  return words
    .map((word, index) => {
      const lower = word.toLowerCase();

      if (index === 0 || index === words.length - 1) {
        return preserveCase && word === word.toUpperCase() && word.length > 1
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      
      if (smallWords.has(lower)) {
        return lower;
      }
      
      if (preserveCase && word === word.toUpperCase() && word.length > 1) {
        return word;
      }
      
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

