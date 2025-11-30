# unescapeHtml

Unescapes HTML entities.



## unescapeHtml

### Signature

```typescript
function unescapeHtml(str: string): string
```

### Parameters

- `str` - The string to unescape

### Returns

String with HTML entities decoded.

### Examples

```typescript
import { unescapeHtml } from 'strio'

unescapeHtml('&lt;div&gt;Hello &amp; goodbye&lt;/div&gt;')
// "<div>Hello & goodbye</div>"

unescapeHtml('5 &gt; 3')
// "5 > 3"
```

## Related Functions

- [escapeHtml](/api/escapeHtml) - Escape HTML
- [stripTags](/api/stripTags) - Remove HTML tags

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
