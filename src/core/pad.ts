/**
 * Pads a string from the left to the specified length
 * Wrapper over native String.padStart()
 * @example padLeft("5", 3, "0") // "005"
 * @example padLeft("hello", 10) // "     hello"
 */
export function padLeft(str: string, length: number, char: string = " "): string {
  return str.padStart(length, char);
}

/**
 * Pads a string from the right to the specified length
 * Wrapper over native String.padEnd()
 * @example padRight("5", 3, "0") // "500"
 * @example padRight("hello", 10) // "hello     "
 */
export function padRight(str: string, length: number, char: string = " "): string {
  return str.padEnd(length, char);
}

/**
 * Pads a string from both sides to the specified length
 * @example padCenter("hi", 6) // "  hi  "
 * @example padCenter("hi", 7) // "  hi   "
 */
export function padCenter(str: string, length: number, char: string = " "): string {
  if (str.length >= length) return str;
  
  const padLength = length - str.length;
  const leftPad = Math.floor(padLength / 2);
  
  return str.padStart(str.length + leftPad, char).padEnd(length, char);
}
