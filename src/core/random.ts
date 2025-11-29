/**
 * Generates a random string of specified length
 * @param length The length of the random string
 * @param charset The character set to use (default: alphanumeric)
 * @example random(8) // "aB3xK9zL"
 * @example random(6, "0123456789") // "482956"
 * @example random(10, "abc") // "bacabcabca"
 */
export function random(
  length: number,
  charset: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
): string {
  if (length <= 0) return "";
  if (charset.length === 0) return "";
  
  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

/**
 * Generates a random alphanumeric string
 * @param length The length of the random string
 * @example randomAlphanumeric(8) // "X7mK3pQ9"
 */
export function randomAlphanumeric(length: number): string {
  return random(length);
}

/**
 * Generates a random numeric string
 * @param length The length of the random string
 * @example randomNumeric(6) // "482956"
 */
export function randomNumeric(length: number): string {
  return random(length, "0123456789");
}

/**
 * Generates a random alphabetic string
 * @param length The length of the random string
 * @example randomAlpha(8) // "AbCdEfGh"
 */
export function randomAlpha(length: number): string {
  return random(length, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
}

