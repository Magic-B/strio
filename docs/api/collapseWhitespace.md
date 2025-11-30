# collapseWhitespace

Collapses multiple whitespace characters into single spaces.



## collapseWhitespace

### Signature

```typescript
function collapseWhitespace(str: string): string
```

### Parameters

- `str` - The string to collapse whitespace in

### Returns

String with collapsed whitespace.

### Examples

```typescript
import { collapseWhitespace } from 'strio'

collapseWhitespace('hello    world')
// "hello world"

collapseWhitespace('test\n\n\nline')
// "test line"
```

## Related Functions

- [trim](/api/trim) - Remove leading/trailing whitespace
- [stripTags](/api/stripTags) - Remove HTML tags

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
