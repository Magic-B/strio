# padLeft

Pads the left side of a string to a target length.



## padLeft

### Signature

```typescript
function padLeft(str: string, length: number, char?: string): string
```

### Parameters

- `str` - The string to pad
- `length` - The target length
- `char` - The character to pad with (default: space)

### Returns

Padded string.

### Examples

```typescript
import { padLeft } from 'strio'

padLeft('5', 3, '0')
// "005"

padLeft('hello', 10)
// "     hello"
```

## Related Functions

- [padRight](/api/padRight) - Pad right side
- [padCenter](/api/padCenter) - Pad both sides

## See Also

- [String Formatting Guide](/guide/string-formatting)
