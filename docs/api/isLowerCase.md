# isLowerCase

Checks if a string is in lowercase.



## isLowerCase

### Signature

```typescript
function isLowerCase(str: string): boolean
```

### Parameters

- `str` - The string to check

### Returns

`true` if all letters are lowercase, `false` otherwise.

### Examples

```typescript
import { isLowerCase } from 'strio'

// Lowercase
isLowerCase('hello')
// true

isLowerCase('hello123')
// true

isLowerCase('a')
// true

// Not lowercase
isLowerCase('Hello')
// false

isLowerCase('HELLO')
// false

isLowerCase('HeLLo')
// false

// No letters
isLowerCase('123')
// false

isLowerCase('!@#')
// false

isLowerCase('')
// false
```

## Use Cases

```typescript
import { isLowerCase } from 'strio'

// Enforce lowercase
function ensureLowerCase(input: string): string {
  if (!isLowerCase(input)) {
    console.warn('Input should be lowercase')
    return input.toLowerCase()
  }
  return input
}

// Validate slug
function isValidSlug(slug: string): boolean {
  const cleaned = slug.replace(/[-_]/g, '')
  return cleaned.length > 0 && isLowerCase(cleaned) && isAlphaNumeric(cleaned.replace(/[-_]/g, ''))
}

isValidSlug('my-blog-post')
// true

isValidSlug('My-Blog-Post')
// false
```

## Related Functions

- [isUpperCase](/api/isUpperCase) - Check if uppercase
- [capitalize](/api/capitalize) - Capitalize first letter
- [slugify](/api/slugify) - Create URL slug

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)

