# isAlpha

Checks if a string contains only alphabetic characters.



## isAlpha

### Signature

```typescript
function isAlpha(str: string): boolean
```

### Parameters

- `str` - The string to check

### Returns

`true` if the string contains only letters, `false` otherwise.

### Examples

```typescript
import { isAlpha } from 'strio'

// Letters only
isAlpha('hello')
// true

isAlpha('Hello')
// true

isAlpha('HelloWorld')
// true

// With Cyrillic
isAlpha('привет')
// true

// Not alpha
isAlpha('hello123')
// false

isAlpha('hello world')
// false (space)

isAlpha('hello-world')
// false (hyphen)

isAlpha('')
// false (empty)

isAlpha('123')
// false
```

## Use Cases

```typescript
import { isAlpha } from 'strio'

// Name validation
function validateName(name: string): boolean {
  return isAlpha(name.replace(/\s/g, '')) // allow spaces
}

// Filter alphabetic input
function filterAlpha(input: string): string {
  return input.split('').filter(char => isAlpha(char)).join('')
}

filterAlpha('abc123xyz')
// "abcxyz"
```

## Related Functions

- [isNumeric](/api/isNumeric) - Check if numeric
- [isAlphaNumeric](/api/isAlphaNumeric) - Check if alphanumeric
- [isString](/api/isString) - Check if value is string

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)

