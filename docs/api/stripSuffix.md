# stripSuffix

Removes a suffix from a string if it exists.



## stripSuffix

### Signature

```typescript
function stripSuffix(str: string, suffix: string): string
```

### Parameters

- `str` - The string to strip
- `suffix` - The suffix to remove

### Returns

String without the suffix.

### Examples

```typescript
import { stripSuffix } from 'strio'

stripSuffix('Hello world', ' world')
// "Hello"

stripSuffix('test', 'foo')
// "test" (no change)
```

## Related Functions

- [stripPrefix](/api/stripPrefix) - Remove prefix
- [ensureRight](/api/ensureRight) - Ensure suffix

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
