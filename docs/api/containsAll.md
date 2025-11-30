# containsAll

Checks if a string contains all of the given substrings.



## containsAll

### Signature

```typescript
function containsAll(str: string, searches: string[], caseSensitive?: boolean): boolean
```

### Parameters

- `str` - The string to search in
- `searches` - Array of substrings to search for
- `caseSensitive` - Whether to perform case-sensitive search (default: `true`)

### Returns

`true` if all substrings are found, `false` otherwise.

### Examples

```typescript
import { containsAll } from 'strio'

// Basic usage
containsAll('hello beautiful world', ['hello', 'world'])
// true

containsAll('hello world', ['hello', 'foo'])
// false

// Case insensitive
containsAll('Hello World', ['hello', 'WORLD'], false)
// true

// Order doesn't matter
containsAll('world hello', ['hello', 'world'])
// true

// Empty array
containsAll('hello', [])
// true
```

## Use Cases

```typescript
import { containsAll } from 'strio'

// Feature validation
function hasAllFeatures(text: string, required: string[]): boolean {
  return containsAll(text.toLowerCase(), required.map(r => r.toLowerCase()))
}

// Tag filtering
function matchesAllTags(content: string, tags: string[]): boolean {
  return containsAll(content, tags, false)
}
```

## Related Functions

- [contains](/api/contains) - Check if contains substring
- [containsAny](/api/containsAny) - Check if contains any substring
- [count](/api/count) - Count occurrences

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)
