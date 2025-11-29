/**
 * Pads a string from the left to the specified length
 * @example padLeft("5", 3, "0") // "005"
 * @example padLeft("hello", 10) // "     hello"
 */
export function padLeft(str: string, length: number, char: string = " "): string {
  if (str.length >= length) return str;
  const padLength = length - str.length;
  return char.repeat(Math.ceil(padLength / char.length)).slice(0, padLength) + str;
}

/**
 * Pads a string from the right to the specified length
 * @example padRight("5", 3, "0") // "500"
 * @example padRight("hello", 10) // "hello     "
 */
export function padRight(str: string, length: number, char: string = " "): string {
  if (str.length >= length) return str;
  const padLength = length - str.length;
  return str + char.repeat(Math.ceil(padLength / char.length)).slice(0, padLength);
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
  const rightPad = padLength - leftPad;
  
  const left = char.repeat(Math.ceil(leftPad / char.length)).slice(0, leftPad);
  const right = char.repeat(Math.ceil(rightPad / char.length)).slice(0, rightPad);
  
  return left + str + right;
}
