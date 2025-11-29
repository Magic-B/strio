import { asciiMap } from "../utils/ascii-map";

/**
 * Transliterates Unicode characters to ASCII
 * Supports Latin, Cyrillic, Greek, Arabic, Georgian, Devanagari, and other scripts
 * @example transliterate("Héllö Wörld") // "Hello World"
 * @example transliterate("Привет Мир") // "Privet Mir"
 * @example transliterate("café résumé") // "cafe resume"
 * @example transliterate("こんにちは") // "konnichiha" (if mapped)
 */
export function transliterate(value: string): string {
  return Object.keys(asciiMap).reduce(
    (newValue, currentKey) =>
      asciiMap[currentKey].reduce(
        (previous, currentValue) => previous.replace(new RegExp(currentValue, "g"), currentKey),
        newValue
      ),
    value
  );
}

