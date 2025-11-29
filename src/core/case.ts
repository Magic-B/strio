/**
 * Converts a string to camelCase
 * @example camelize("hello-world") // "helloWorld"
 * @example camelize("hello_world") // "helloWorld"
 * @example camelize("Hello World") // "helloWorld"
 */
export function camelize(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""))
    .replace(/^[A-Z]/, (char) => char.toLowerCase());
}

/**
 * Converts a string to PascalCase
 * @example pascalize("hello-world") // "HelloWorld"
 */
export function pascalize(str: string): string {
  const camel = camelize(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/**
 * Converts a string to kebab-case
 * @example dasherize("helloWorld") // "hello-world"
 * @example dasherize("HelloWorld") // "hello-world"
 */
export function dasherize(str: string): string {
  return str
    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
    .replace(/\s+|_+/g, "-")
    .toLowerCase();
}

/**
 * Converts a string to snake_case
 * @example underscore("helloWorld") // "hello_world"
 * @example underscore("HelloWorld") // "hello_world"
 */
export function underscore(str: string): string {
  return str
    .replace(/([a-z\d])([A-Z])/g, "$1_$2")
    .replace(/\s+|-+/g, "_")
    .toLowerCase();
}
