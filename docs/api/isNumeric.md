# isNumeric

Checks if a string contains only numeric characters.



## isNumeric

### Signature

```typescript
function isNumeric(str: string): boolean
```

### Parameters

- `str` - The string to check

### Returns

`true` if the string contains only digits, `false` otherwise.

### Examples

```typescript
import { isNumeric } from 'strio'

// Digits only
isNumeric('123')
// true

isNumeric('0')
// true

isNumeric('999999')
// true

// Not numeric
isNumeric('12.34')
// false (decimal point)

isNumeric('12,34')
// false (comma)

isNumeric('-123')
// false (negative sign)

isNumeric('+123')
// false (plus sign)

isNumeric('1 2 3')
// false (spaces)

isNumeric('')
// false (empty)
```

## Use Cases

```typescript
import { isNumeric } from 'strio'

// Phone number validation
function validatePhoneDigits(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return isNumeric(digits) && digits.length === 10
}

// ID validation
function validateId(id: string): boolean {
  return isNumeric(id) && id.length > 0
}

// Safe number conversion
function toNumber(str: string): number | null {
  return isNumeric(str) ? parseInt(str, 10) : null
}
```

## Related Functions

- [isAlpha](/api/isAlpha) - Check if alphabetic
- [isAlphaNumeric](/api/isAlphaNumeric) - Check if alphanumeric
- [count](/api/count) - Count occurrences

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)

