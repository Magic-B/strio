# stripPrefix

Removes a prefix from a string if it exists.



## stripPrefix

### Signature

```typescript
function stripPrefix(str: string, prefix: string): string
```

### Parameters

- `str` - The string to strip
- `prefix` - The prefix to remove

### Returns

String without the prefix.

### Examples

```typescript
import { stripPrefix } from 'strio'

stripPrefix('Hello world', 'Hello ')
// "world"

stripPrefix('test', 'foo')
// "test" (no change)
```

## Related Functions

- [stripSuffix](/api/stripSuffix) - Remove suffix
- [ensureLeft](/api/ensureLeft) - Ensure prefix

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
