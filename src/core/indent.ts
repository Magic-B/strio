/**
 * Adds indentation to each line of a string
 * @param str The input string
 * @param spaces Number of spaces to indent (or string to use)
 * @example indent("hello\nworld", 2) // "  hello\n  world"
 * @example indent("test", "\t") // "\ttest"
 */
export function indent(str: string, spaces: number | string = 2): string {
  const indentation = typeof spaces === "number" ? " ".repeat(spaces) : spaces;
  return str
    .split("\n")
    .map((line) => (line.trim() ? indentation + line : line))
    .join("\n");
}

/**
 * Removes common leading whitespace from each line
 * Useful for template literals
 * @param str The input string
 * @example dedent("  hello\n  world") // "hello\nworld"
 */
export function dedent(str: string): string {
  const lines = str.split("\n");
  
  while (lines.length > 0 && lines[0].trim() === "") {
    lines.shift();
  }
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
    lines.pop();
  }
  
  if (lines.length === 0) return "";
  
  const minIndent = lines
    .filter((line) => line.trim())
    .reduce((min, line) => {
      const match = line.match(/^(\s*)/);
      const indent = match ? match[1].length : 0;
      return Math.min(min, indent);
    }, Infinity);
  
  if (minIndent === Infinity || minIndent === 0) {
    return lines.join("\n");
  }
  
  return lines.map((line) => line.slice(minIndent)).join("\n");
}

