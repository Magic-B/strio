/**
 * Map for HTML escaping
 */
const htmlEscapeMap: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
};

/**
 * Map for HTML unescaping
 */
const htmlUnescapeMap: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
  "&#x2F;": "/",
  "&#39;": "'",
};

/**
 * Escapes HTML special characters
 * @example escapeHtml("<div>Hello</div>") // "&lt;div&gt;Hello&lt;/div&gt;"
 */
export function escapeHtml(str: string): string {
  return str.replace(/[&<>"'\/]/g, (char) => htmlEscapeMap[char]);
}

/**
 * Unescapes HTML entities
 * @example unescapeHtml("&lt;div&gt;Hello&lt;/div&gt;") // "<div>Hello</div>"
 */
export function unescapeHtml(str: string): string {
  return str.replace(/&(?:amp|lt|gt|quot|#x27|#x2F|#39);/g, (entity) => htmlUnescapeMap[entity]);
}

/**
 * Escapes special characters in regular expressions
 * @example escapeRegExp("Hello.World") // "Hello\\.World"
 */
export function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
