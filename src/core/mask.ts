/**
 * Masks a string by replacing characters with a mask character
 * @example mask("4111111111111111") // "************1111"
 * @example mask("4111111111111111", { start: 4, end: 12 }) // "4111********1111"
 * @example mask("password123", { char: "#" }) // "########123"
 * @example mask("hello@example.com", { start: 0, end: 5, char: "*" }) // "*****@example.com"
 */
export function mask(
  str: string,
  options: {
    start?: number;
    end?: number;
    char?: string;
  } = {}
): string {
  const { start = 0, end = str.length - 4, char = "*" } = options;
  
  if (start < 0 || end > str.length || start >= end) {
    return str;
  }
  
  const before = str.slice(0, start);
  const masked = char.repeat(end - start);
  const after = str.slice(end);
  
  return before + masked + after;
}

