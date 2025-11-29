type JoinArgs = (string | number | { separator?: string } | undefined | null);

/**
 * Joins strings with a separator, filtering out empty values
 * Supports inline separator configuration via object
 * @example join("a", "b", "c") // "a, b, c"
 * @example join("a", { separator: " - " }, "b") // "a - b"
 * @example join("a", null, "", "b") // "a, b" (filters nulls and empty strings)
 * @example join("hello", { separator: "" }, "world") // "helloworld"
 */
export function join(...args: JoinArgs[]): string {
  let separator = ', ';

  const filteredArgs = args.reduce<string[]>((acc, arg) => {
    if (typeof arg === 'object' && arg?.separator !== undefined) {
      separator = arg.separator;
    } else if (typeof arg === 'string' && arg.trim() !== '') {
      acc.push(arg);
    }
    return acc;
  }, []);

  return filteredArgs.join(separator);
};
