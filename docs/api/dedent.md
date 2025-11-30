# dedent

Removes common leading whitespace from each line.



## dedent

### Signature

```typescript
function dedent(str: string): string
```

### Parameters

- `str` - The string to dedent

### Returns

String with common indentation removed.

### Examples

```typescript
import { dedent } from 'strio'

dedent(\`
  Line 1
  Line 2
\`)
// "Line 1\nLine 2"
```

## Related Functions

- [indent](/api/indent) - Add indentation

## See Also

- [String Formatting Guide](/guide/string-formatting)
