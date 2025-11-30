# truncateWords

Truncates a string to a specified number of words.



## truncateWords

### Signature

```typescript
function truncateWords(str: string, count: number, suffix?: string): string
```

### Parameters

- `str` - The string to truncate
- `count` - Maximum number of words
- `suffix` - String to append (default: "...")

### Returns

Truncated string with suffix.

### Examples

```typescript
import { truncateWords } from 'strio'

truncateWords('The quick brown fox', 2)
// "The quick..."

truncateWords('Hello world', 5)
// "Hello world" (no truncation needed)
```

## Related Functions

- [truncate](/api/truncate) - Truncate by character count
- [words](/api/words) - Split into words

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
