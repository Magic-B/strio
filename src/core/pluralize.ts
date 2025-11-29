/**
 * Pluralizes a word based on count
 * English: pluralize(count, zero, one, other)
 * Russian: pluralize(count, zero, one, few, many)
 * @param count The number to use for pluralization
 * @param zero Form for zero (optional, can be null to skip)
 * @param one Form for singular (1)
 * @param few Form for 2-4 in Russian, or plural form in English
 * @param many Form for 5+ in Russian (if provided, uses Russian rules)
 * @example pluralize(1, null, "item", "items") // "1 item"
 * @example pluralize(5, null, "item", "items") // "5 items"
 * @example pluralize(0, "no items", "item", "items") // "no items"
 * @example pluralize(2, null, "товар", "товара", "товаров") // "2 товара"
 * @example pluralize(5, null, "товар", "товара", "товаров") // "5 товаров"
 */
export function pluralize(
  count: number,
  zero: string | null,
  one: string,
  few: string,
  many?: string
): string {
  if (count === 0 && zero) {
    return zero;
  }

  if (!many) {
    const word = Math.abs(count) === 1 ? one : few;
    return `${count} ${word}`;
  }

  const form = getRussianPluralForm(count);
  let word: string;
  
  if (form === "one") {
    word = one;
  } else if (form === "few") {
    word = few;
  } else {
    word = many;
  }
  
  return `${count} ${word}`;
}

/**
 * Returns plural form for Russian (one/few/many)
 * Rules: 1 - one, 2-4 - few, 5-20 - many, 21 - one, 22-24 - few, etc.
 */
function getRussianPluralForm(count: number): "one" | "few" | "many" {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "many";
  }

  if (lastDigit === 1) {
    return "one";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "few";
  }

  return "many";
}

