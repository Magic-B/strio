/**
 * Calculates Levenshtein distance between two strings
 * @param str1 First string
 * @param str2 Second string
 * @returns The minimum number of edits needed to transform str1 into str2
 */
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  
  const matrix: number[][] = Array(len1 + 1)
    .fill(null)
    .map(() => Array(len2 + 1).fill(0));
  
  for (let i = 0; i <= len1; i++) {
    matrix[i][0] = i;
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  return matrix[len1][len2];
}

/**
 * Calculates similarity between two strings as a percentage (0 to 1)
 * Uses Levenshtein distance algorithm
 * @example similarity("kitten", "sitting") // 0.57
 * @example similarity("hello", "hello") // 1.0
 * @example similarity("abc", "xyz") // 0.0
 * @example similarity("JavaScript", "TypeScript") // 0.5
 */
export function similarity(str1: string, str2: string): number {
  if (str1 === str2) return 1.0;
  if (!str1.length || !str2.length) return 0.0;
  
  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  
  return 1 - distance / maxLength;
}
