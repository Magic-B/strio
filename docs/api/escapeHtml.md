# escapeHtml

Escapes HTML special characters.



## escapeHtml

### Signature

```typescript
function escapeHtml(str: string): string
```

### Parameters

- `str` - The string to escape

### Returns

String with HTML characters escaped.

### Examples

```typescript
import { escapeHtml } from 'strio'

escapeHtml('<div>Hello & "goodbye"</div>')
// "&lt;div&gt;Hello &amp; &quot;goodbye&quot;&lt;/div&gt;"

escapeHtml('5 > 3')
// "5 &gt; 3"
```

## Related Functions

- [unescapeHtml](/api/unescapeHtml) - Unescape HTML
- [escapeRegExp](/api/escapeRegExp) - Escape regex characters
- [stripTags](/api/stripTags) - Remove HTML tags

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
