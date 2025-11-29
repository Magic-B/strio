/**
 * Counts the number of occurrences of a substring
 * @example count("hello world", "l") // 3
 * @example count("hello world", "o") // 2
 * @example count("hello world", "x") // 0
 */
export function count(str: string, substr: string): number {
  if (!substr) return 0;
  
  let count = 0;
  let pos = str.indexOf(substr);
  
  while (pos !== -1) {
    count++;
    pos = str.indexOf(substr, pos + substr.length);
  }
  
  return count;
}
