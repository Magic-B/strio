/**
 * Ensures that a string starts with a given prefix
 * @example ensureLeft("world", "hello ") // "hello world"
 * @example ensureLeft("hello world", "hello ") // "hello world" (already has prefix)
 * @example ensureLeft("file.js", "/") // "/file.js"
 */
export function ensureLeft(str: string, prefix: string): string {
  if (!prefix) return str;
  return str.startsWith(prefix) ? str : prefix + str;
}

/**
 * Ensures that a string ends with a given suffix
 * @example ensureRight("test", ".js") // "test.js"
 * @example ensureRight("test.js", ".js") // "test.js" (already has suffix)
 * @example ensureRight("path/to/dir", "/") // "path/to/dir/"
 */
export function ensureRight(str: string, suffix: string): string {
  if (!suffix) return str;
  return str.endsWith(suffix) ? str : str + suffix;
}
