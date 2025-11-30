# isString

Checks if a value is a string.



## isString

### Signature

```typescript
function isString(value: any): value is string
```

### Parameters

- `value` - The value to check

### Returns

`true` if the value is a string, `false` otherwise.

### Examples

```typescript
import { isString } from 'strio'

// Strings
isString('hello')
// true

isString('')
// true

isString(String('hello'))
// true

// Non-strings
isString(123)
// false

isString(true)
// false

isString(null)
// false

isString(undefined)
// false

isString(['array'])
// false

isString({ key: 'value' })
// false
```

## Use Cases

```typescript
import { isString } from 'strio'

// Type guard
function processInput(input: unknown): string {
  if (!isString(input)) {
    throw new Error('Input must be a string')
  }
  return input.toUpperCase() // TypeScript knows it's a string
}

// Safe string operations
function safeCapitalize(value: unknown): string {
  return isString(value) ? capitalize(value) : ''
}
```

## Related Functions

- [isEmpty](/api/isEmpty) - Check if empty
- [isAlpha](/api/isAlpha) - Check if alphabetic
- [isNumeric](/api/isNumeric) - Check if numeric

## See Also

- [String Validation Guide](/guide/string-validation)
- [API Reference](/api/overview)

