# isUpperCase

Checks if a string is in uppercase.



## isUpperCase

### Signature

```typescript
function isUpperCase(str: string): boolean
```

### Parameters

- `str` - The string to check

### Returns

`true` if all letters are uppercase, `false` otherwise.

### Examples

```typescript
import { isUpperCase } from 'strio'

// Uppercase
isUpperCase('HELLO')
// true

isUpperCase('HELLO123')
// true

isUpperCase('A')
// true

// Not uppercase
isUpperCase('Hello')
// false

isUpperCase('hello')
// false

isUpperCase('HeLLo')
// false

// No letters
isUpperCase('123')
// false

isUpperCase('!@#')
// false

isUpperCase('')
// false
```

## Use Cases

```typescript
import { isUpperCase } from 'strio'

// Constant name validation
function isValidConstantName(name: string): boolean {
  return isUpperCase(name.replace(/_/g, ''))
}

isValidConstantName('MAX_VALUE')
// true

// Detect shouting
function isShouting(text: string): boolean {
  const letters = text.replace(/[^a-zA-Z]/g, '')
  return letters.length > 0 && isUpperCase(letters)
}

isShouting('HELLO!!!')
// true
```

## Related Functions

- [isLowerCase](/api/isLowerCase) - Check if lowercase
- [capitalize](/api/capitalize) - Capitalize first letter
- [underscore](/api/underscore) - Convert to snake_case

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)

