# padRight

Pads the right side of a string to a target length.



## padRight

### Signature

```typescript
function padRight(str: string, length: number, char?: string): string
```

### Parameters

- `str` - The string to pad
- `length` - The target length
- `char` - The character to pad with (default: space)

### Returns

Padded string.

### Examples

```typescript
import { padRight } from 'strio'

padRight('5', 3, '0')
// "500"

padRight('hello', 10)
// "hello     "
```

## Related Functions

- [padLeft](/api/padLeft) - Pad left side
- [padCenter](/api/padCenter) - Pad both sides

## See Also

- [String Formatting Guide](/guide/string-formatting)
