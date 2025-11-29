/**
 * Truncates a string to the specified length and adds a suffix
 * @example truncate("Hello World", 5) // "Hello..."
 * @example truncate("Hello", 10) // "Hello"
 * @example truncate("Hello World", 8, ">>") // "Hello Wo>>"
 */
export function truncate(
  str: string,
  length: number,
  suffix: string = "..."
): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + suffix;
}

/**
 * Truncates a string by words (doesn't break words)
 * @example truncateWords("Hello beautiful world", 10) // "Hello..."
 */
export function truncateWords(
  str: string,
  length: number,
  suffix: string = "..."
): string {
  if (str.length <= length) return str;
  
  const truncated = str.slice(0, length);
  const lastSpace = truncated.lastIndexOf(" ");
  
  if (lastSpace > 0) {
    return truncated.slice(0, lastSpace) + suffix;
  }
  
  return truncated + suffix;
}
