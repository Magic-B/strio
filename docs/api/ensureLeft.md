# ensureLeft

Ensures a string starts with a given prefix.



## ensureLeft

### Signature

```typescript
function ensureLeft(str: string, prefix: string): string
```

### Parameters

- `str` - The string to check
- `prefix` - The prefix to ensure

### Returns

String with prefix guaranteed.

### Examples

```typescript
import { ensureLeft } from 'strio'

ensureLeft('world', 'hello ')
// "hello world"

ensureLeft('hello world', 'hello ')
// "hello world"

ensureLeft('/path', '/')
// "/path"
```

## Related Functions

- [ensureRight](/api/ensureRight) - Ensure suffix
- [stripPrefix](/api/stripPrefix) - Remove prefix

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
