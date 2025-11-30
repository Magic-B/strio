# ensureRight

Ensures a string ends with a given suffix.



## ensureRight

### Signature

```typescript
function ensureRight(str: string, suffix: string): string
```

### Parameters

- `str` - The string to check
- `suffix` - The suffix to ensure

### Returns

String with suffix guaranteed.

### Examples

```typescript
import { ensureRight } from 'strio'

ensureRight('hello', '!')
// "hello!"

ensureRight('hello!', '!')
// "hello!"
```

## Related Functions

- [ensureLeft](/api/ensureLeft) - Ensure prefix

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
