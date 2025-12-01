# stripTags

Removes HTML/XML tags from a string.



## stripTags

### Signature

```typescript
function stripTags(str: string): string
```

### Parameters

- `str` - The string to strip tags from

### Returns

String with all HTML/XML tags removed.

### Examples

```typescript
import { stripTags } from 'strio'

stripTags('<p>Hello <strong>world</strong></p>')
// "Hello world"

stripTags('<div>Test</div>')
// "Test"
```

## Related Functions

- [escapeHtml](/api/escapeHtml) - Escape HTML characters
- [collapseWhitespace](/api/collapseWhitespace) - Collapse spaces
- [stripPrefix](/api/stripPrefix) - Remove prefix
- [stripSuffix](/api/stripSuffix) - Remove suffix

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
