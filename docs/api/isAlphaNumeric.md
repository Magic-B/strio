# isAlphaNumeric

Checks if a string contains only letters and numbers.



## isAlphaNumeric

### Signature

```typescript
function isAlphaNumeric(str: string): boolean
```

### Parameters

- `str` - The string to check

### Returns

`true` if the string contains only letters and digits, `false` otherwise.

### Examples

```typescript
import { isAlphaNumeric } from 'strio'

// Letters and numbers
isAlphaNumeric('hello123')
// true

isAlphaNumeric('Test2024')
// true

isAlphaNumeric('abc')
// true

isAlphaNumeric('123')
// true

// With Cyrillic
isAlphaNumeric('привет123')
// true

// Not alphanumeric
isAlphaNumeric('hello-123')
// false (hyphen)

isAlphaNumeric('hello 123')
// false (space)

isAlphaNumeric('hello_123')
// false (underscore)

isAlphaNumeric('')
// false (empty)
```

## Use Cases

```typescript
import { isAlphaNumeric } from 'strio'

// Username validation
function validateUsername(username: string): boolean {
  return isAlphaNumeric(username) && 
         username.length >= 3 && 
         username.length <= 20
}

// Password character check
function hasAlphaNumeric(password: string): boolean {
  return password.split('').some(char => isAlphaNumeric(char))
}

// Clean input
function cleanAlphaNumeric(input: string): string {
  return input.split('').filter(char => isAlphaNumeric(char)).join('')
}

cleanAlphaNumeric('hello@123!')
// "hello123"
```

## Related Functions

- [isAlpha](/api/isAlpha) - Check if alphabetic
- [isNumeric](/api/isNumeric) - Check if numeric
- [slugify](/api/slugify) - Create URL slug

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)

