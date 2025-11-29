/**
 * Inserts a string at the specified position
 * @example insert("Hello World", 5, ",") // "Hello, World"
 * @example insert("abc", 1, "X") // "aXbc"
 * @example insert("test", 0, "pre-") // "pre-test"
 * @example insert("test", 4, "-post") // "test-post"
 */
export function insert(str: string, position: number, insertion: string): string {
  if (position < 0 || position > str.length) {
    return str;
  }
  
  return str.slice(0, position) + insertion + str.slice(position);
}

