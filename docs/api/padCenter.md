# padCenter

Pads both sides of a string to center it within a target length.



## padCenter

### Signature

```typescript
function padCenter(str: string, length: number, char?: string): string
```

### Parameters

- `str` - The string to pad
- `length` - The target length
- `char` - The character to pad with (default: space)

### Returns

Centered string.

### Examples

```typescript
import { padCenter } from 'strio'

padCenter('hello', 11)
// "   hello   "

padCenter('test', 10, '-')
// "---test---"
```

## Related Functions

- [padLeft](/api/padLeft) - Pad left side
- [padRight](/api/padRight) - Pad right side

## See Also

- [String Formatting Guide](/guide/string-formatting)
