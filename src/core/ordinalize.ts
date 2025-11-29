/**
 * Converts a number to its ordinal string representation
 * @param num The number to ordinalize
 * @example ordinalize(1) // "1st"
 * @example ordinalize(22) // "22nd"
 * @example ordinalize(103) // "103rd"
 */
export function ordinalize(num: number): string {
  const absNum = Math.abs(num);
  const lastDigit = absNum % 10;
  const lastTwoDigits = absNum % 100;
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }
  
  switch (lastDigit) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

