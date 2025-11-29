/**
 * Checks if a string is empty (null, undefined or "")
 * @example isEmpty("") // true
 * @example isEmpty(null) // true
 * @example isEmpty("hello") // false
 */
export function isEmpty(str: string | null | undefined): boolean {
  return str == null || str === "";
}

/**
 * Checks if a string is empty or contains only whitespace
 * @example isBlank("") // true
 * @example isBlank("   ") // true
 * @example isBlank("hello") // false
 */
export function isBlank(str: string | null | undefined): boolean {
  return str == null || str.trim() === "";
}

/**
 * Checks if a string contains only letters
 * @example isAlpha("hello") // true
 * @example isAlpha("hello123") // false
 */
export function isAlpha(str: string): boolean {
  return /^[a-zA-Zа-яА-ЯёЁ]+$/.test(str);
}

/**
 * Checks if a string contains only digits
 * @example isNumeric("123") // true
 * @example isNumeric("12.3") // false
 */
export function isNumeric(str: string): boolean {
  return /^\d+$/.test(str);
}

/**
 * Checks if a string contains only letters and digits
 * @example isAlphaNumeric("hello123") // true
 * @example isAlphaNumeric("hello-123") // false
 */
export function isAlphaNumeric(str: string): boolean {
  return /^[a-zA-Z0-9а-яА-ЯёЁ]+$/.test(str);
}

/**
 * Checks if a string is a valid email address
 * @example isEmail("test@example.com") // true
 * @example isEmail("invalid") // false
 */
export function isEmail(str: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

/**
 * Checks if a string is a valid URL
 * @example isUrl("https://example.com") // true
 * @example isUrl("not a url") // false
 */
export function isUrl(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}
