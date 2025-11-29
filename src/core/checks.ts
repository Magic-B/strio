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
 * Checks if a value is a string
 * @example isString("hello") // true
 * @example isString(123) // false
 * @example isString(null) // false
 */
export function isString(value: any): value is string {
  return typeof value === "string";
}

/**
 * Checks if a string is in uppercase
 * @example isUpperCase("HELLO") // true
 * @example isUpperCase("Hello") // false
 * @example isUpperCase("hello") // false
 */
export function isUpperCase(str: string): boolean {
  return str === str.toUpperCase() && str !== str.toLowerCase();
}

/**
 * Checks if a string is in lowercase
 * @example isLowerCase("hello") // true
 * @example isLowerCase("Hello") // false
 * @example isLowerCase("HELLO") // false
 */
export function isLowerCase(str: string): boolean {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}
