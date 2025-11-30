# wordCount

Counts the number of words in a string.



## wordCount

### Signature

```typescript
function wordCount(str: string): number
```

### Parameters

- `str` - The string to count words in

### Returns

Number of words.

### Examples

```typescript
import { wordCount } from 'strio'

wordCount('hello world')
// 2

wordCount('The quick brown fox')
// 4

wordCount('')
// 0
```

## Related Functions

- [words](/api/words) - Split into words array
- [count](/api/count) - Count substring occurrences

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
