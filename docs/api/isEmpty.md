# isEmpty

Checks if a string is empty (`null`, `undefined`, or `""`).



## isEmpty

### Signature

```typescript
function isEmpty(str: string | null | undefined): boolean
```

### Parameters

- `str` - The value to check

### Returns

`true` if the string is empty, `false` otherwise.

### Examples

```typescript
import { isEmpty } from 'strio'

// Empty string
isEmpty('')
// true

// Null and undefined
isEmpty(null)
// true

isEmpty(undefined)
// true

// Non-empty strings
isEmpty('hello')
// false

isEmpty(' ')
// false (whitespace counts as content)

isEmpty('0')
// false (zero string is not empty)

// Numbers and other types
isEmpty(0 as any)
// false

isEmpty(false as any)
// false
```

## Use Cases

```typescript
import { isEmpty } from 'strio'

// Form validation
function validateRequired(value: string): boolean {
  return !isEmpty(value)
}

// Conditional rendering
if (!isEmpty(user.bio)) {
  renderBio(user.bio)
}

// Default values
const displayName = isEmpty(name) ? 'Anonymous' : name
```

## Related Functions

- [isBlank](/api/isBlank) - Check if empty or whitespace
- [isString](/api/isString) - Check if value is string
- [trim](/api/trim) - Remove whitespace

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)

