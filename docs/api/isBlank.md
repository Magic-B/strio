# isBlank

Checks if a string is empty or contains only whitespace.



## isBlank

### Signature

```typescript
function isBlank(str: string | null | undefined): boolean
```

### Parameters

- `str` - The value to check

### Returns

`true` if the string is blank, `false` otherwise.

### Examples

```typescript
import { isBlank } from 'strio'

// Empty string
isBlank('')
// true

// Whitespace only
isBlank('   ')
// true

isBlank('\n\t\r')
// true

isBlank('  \n  \t  ')
// true

// Null and undefined
isBlank(null)
// true

isBlank(undefined)
// true

// Non-blank strings
isBlank('hello')
// false

isBlank('  hello  ')
// false (contains non-whitespace)
```

## Use Cases

```typescript
import { isBlank } from 'strio'

// Robust form validation
function validateInput(value: string): boolean {
  return !isBlank(value)
}

// Trimming check
function needsTrimming(str: string): boolean {
  return !isEmpty(str) && isBlank(str)
}

// Sanitization
function sanitize(input: string): string | null {
  return isBlank(input) ? null : input.trim()
}
```

## Related Functions

- [isEmpty](/api/isEmpty) - Check if empty
- [trim](/api/trim) - Remove whitespace
- [collapseWhitespace](/api/collapseWhitespace) - Collapse multiple spaces

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)

