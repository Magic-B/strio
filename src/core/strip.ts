/**
 * Removes HTML tags from a string
 * @example stripTags("<p>Hello <strong>World</strong>!</p>") // "Hello World!"
 */
export function stripTags(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

/**
 * Collapses multiple whitespace characters into single spaces
 * @example collapseWhitespace("hello    world") // "hello world"
 * @example collapseWhitespace("hello\n\n  world") // "hello world"
 */
export function collapseWhitespace(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}

/**
 * Removes the specified prefix from the beginning of a string
 * @example stripPrefix("Hello World", "Hello ") // "World"
 */
export function stripPrefix(str: string, prefix: string): string {
  if (prefix && str.startsWith(prefix)) {
    return str.slice(prefix.length);
  }
  return str;
}

/**
 * Removes the specified suffix from the end of a string
 * @example stripSuffix("Hello World", " World") // "Hello"
 */
export function stripSuffix(str: string, suffix: string): string {
  if (suffix && str.endsWith(suffix)) {
    return str.slice(0, -suffix.length);
  }
  return str;
}
