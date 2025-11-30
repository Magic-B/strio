# betweenAll

Extracts all substrings between two delimiters.



## betweenAll

### Signature

```typescript
function betweenAll(str: string, left: string, right: string): string[]
```

### Parameters

- `str` - The string to search in
- `left` - The left delimiter
- `right` - The right delimiter

### Returns

Array of all substrings found between delimiters.

### Examples

```typescript
import { betweenAll } from 'strio'

betweenAll('Hello [world] and [universe]', '[', ']')
// ["world", "universe"]

betweenAll('No matches here', '[', ']')
// []
```

## Related Functions

- [between](/api/between) - Extract first match only

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
