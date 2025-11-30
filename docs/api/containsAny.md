# containsAny

Checks if a string contains any of the given substrings.



## containsAny

### Signature

```typescript
function containsAny(str: string, searches: string[], caseSensitive?: boolean): boolean
```

### Parameters

- `str` - The string to search in
- `searches` - Array of substrings to search for
- `caseSensitive` - Whether to perform case-sensitive search (default: `true`)

### Returns

`true` if any substring is found, `false` otherwise.

### Examples

```typescript
import { containsAny } from 'strio'

containsAny('hello world', ['hello', 'foo'])
// true

containsAny('hello world', ['foo', 'bar'])
// false

containsAny('Hello World', ['hello', 'world'], false)
// true
```

## Related Functions

- [contains](/api/contains) - Check if contains substring
- [containsAll](/api/containsAll) - Check if contains all substrings

## See Also

- [String Validation Guide](/guide/string-validation)
