/**
 * Splits a string into an array of words
 * @example words("hello world") // ["hello", "world"]
 * @example words("hello-world_test") // ["hello", "world", "test"]
 */
export function words(str: string): string[] {
  return str.match(/[a-zA-Zа-яА-ЯёЁ0-9]+/g) || [];
}

/**
 * Counts the number of words in a string
 * @example wordCount("hello world") // 2
 * @example wordCount("") // 0
 */
export function wordCount(str: string): number {
  return words(str).length;
}
