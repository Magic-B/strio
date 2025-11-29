/**
 * Checks if a string contains a substring
 * @param str The string to search in
 * @param substring The substring to search for
 * @param ignoreCase If true, performs case-insensitive search
 * @example contains("Hello World", "world", true) // true
 * @example contains("Hello World", "test") // false
 */
export function contains(
  str: string,
  substring: string,
  ignoreCase: boolean = false
): boolean {
  if (ignoreCase) {
    return str.toLowerCase().includes(substring.toLowerCase());
  }
  return str.includes(substring);
}

/**
 * Checks if a string contains all specified substrings
 * @param str The string to search in
 * @param substrings Array of substrings to search for
 * @param ignoreCase If true, performs case-insensitive search
 * @example containsAll("Hello World", ["Hello", "World"]) // true
 * @example containsAll("Hello World", ["Hello", "Test"]) // false
 */
export function containsAll(
  str: string,
  substrings: string[],
  ignoreCase: boolean = false
): boolean {
  return substrings.every((substring) => contains(str, substring, ignoreCase));
}

/**
 * Checks if a string contains any of the specified substrings
 * @param str The string to search in
 * @param substrings Array of substrings to search for
 * @param ignoreCase If true, performs case-insensitive search
 * @example containsAny("Hello World", ["Hi", "Hello"]) // true
 * @example containsAny("Hello World", ["Hi", "Test"]) // false
 */
export function containsAny(
  str: string,
  substrings: string[],
  ignoreCase: boolean = false
): boolean {
  return substrings.some((substring) => contains(str, substring, ignoreCase));
}

