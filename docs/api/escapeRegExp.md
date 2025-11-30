# escapeRegExp

Escapes special characters for use in regular expressions.



## escapeRegExp

### Signature

```typescript
function escapeRegExp(str: string): string
```

### Parameters

- `str` - The string to escape

### Returns

String with regex special characters escaped.

### Examples

```typescript
import { escapeRegExp } from 'strio'

escapeRegExp('hello.world')
// "hello\\.world"

escapeRegExp('$5.99')
// "\\$5\\.99"

const pattern = new RegExp(escapeRegExp('test?'))
// Matches literal "test?" string
```

## Related Functions

- [escapeHtml](/api/escapeHtml) - Escape HTML
- [contains](/api/contains) - Check substring

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
