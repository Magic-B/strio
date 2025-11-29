/**
 * Extracts text between two substrings
 * @example between("Hello [World]!", "[", "]") // "World"
 * @example between("<div>content</div>", "<div>", "</div>") // "content"
 */
export function between(str: string, start: string, end: string): string {
  const startIdx = str.indexOf(start);
  if (startIdx === -1) return "";
  
  const contentStart = startIdx + start.length;
  const endIdx = str.indexOf(end, contentStart);
  if (endIdx === -1) return "";
  
  return str.slice(contentStart, endIdx);
}

/**
 * Extracts all occurrences of text between two substrings
 * @example betweenAll("a[1]b[2]c[3]", "[", "]") // ["1", "2", "3"]
 */
export function betweenAll(str: string, start: string, end: string): string[] {
  const result: string[] = [];
  let searchFrom = 0;
  
  while (true) {
    const startIdx = str.indexOf(start, searchFrom);
    if (startIdx === -1) break;
    
    const contentStart = startIdx + start.length;
    const endIdx = str.indexOf(end, contentStart);
    if (endIdx === -1) break;
    
    result.push(str.slice(contentStart, endIdx));
    searchFrom = endIdx + end.length;
  }
  
  return result;
}
