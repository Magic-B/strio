# contains

Checks if a string contains a substring.



## contains

### Signature

```typescript
function contains(str: string, substring: string, ignoreCase: boolean = false): boolean
```

### Parameters

- `str` - The string to search in
- `substring` - The substring to search for
- `ignoreCase` - If true, case-insensitive search (default: false)

### Returns

`true` if the substring is found, `false` otherwise.

### Examples

```typescript
import { contains } from 'strio'

// Basic usage
contains('hello world', 'world')
// true

contains('hello world', 'foo')
// false

// Case sensitive (default)
contains('Hello World', 'world')
// false

// Case insensitive
contains('Hello World', 'world', false)
// true

// Empty substring
contains('hello', '')
// true

// At the beginning
contains('hello world', 'hello')
// true

// At the end
contains('hello world', 'world')
// true
```

## Use Cases

```typescript
import { contains } from 'strio'

// Search functionality
function searchProducts(products: string[], query: string): string[] {
  return products.filter(p => contains(p.toLowerCase(), query.toLowerCase()))
}

// Validation
function hasProhibitedWords(text: string, words: string[]): boolean {
  return words.some(word => contains(text.toLowerCase(), word.toLowerCase()))
}

// Feature detection
function hasFeature(features: string, feature: string): boolean {
  return contains(features, feature, false)
}
```

## Related Functions

- [containsAll](/api/containsAll) - Check if contains all substrings
- [containsAny](/api/containsAny) - Check if contains any substring
- [count](/api/count) - Count occurrences

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)
