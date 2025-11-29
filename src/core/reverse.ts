/**
 * Reverses a string
 * @example reverse("hello") // "olleh"
 * @example reverse("123") // "321"
 */
export function reverse(str: string): string {
  return str.split("").reverse().join("");
}
