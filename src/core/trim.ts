/**
 * Trims characters from both ends of a string
 * @example trim("  hello  ") // "hello"
 * @example trim("--hello--", "-") // "hello"
 */
export function trim(str: string, chars?: string): string {
  if (!chars) return str.trim();
  const escaped = chars.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const re = new RegExp(`^([${escaped}]+)|([${escaped}]+)$`, 'g');
  return str.replace(re, '');
}
