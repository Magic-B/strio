# random

Generates a random string of specified length.



## random

### Signature

```typescript
function random(length: number, charset: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"): string
```

### Parameters

- `length` - The length of the string to generate
- `charset` - Custom character set (default: alphanumeric)

### Returns

Random string.

### Examples

```typescript
import { random } from 'strio'

// Basic usage
random(10)
// "aB3dE7fG9h" (random alphanumeric)

// Shorter
random(6)
// "x4K9pQ"

// Custom charset
random(8, 'ABC123')
// "A1B2C3A1" (only from specified chars)
```

## Use Cases

### Generate IDs

```typescript
import { random } from 'strio'

function generateId(prefix: string): string {
  return `${prefix}_${random(12)}`
}

generateId('user')
// "user_aBc123XyZ789"
```

### Session Tokens

```typescript
import { random } from 'strio'

function createToken(): string {
  return random(32)
}

createToken()
// "a1b2c3d4e5f6..." (32 chars)
```

## Related Functions

- [randomAlpha](/api/randomAlpha) - Only letters
- [randomNumeric](/api/randomNumeric) - Only digits
- [randomAlphanumeric](/api/randomAlphanumeric) - Letters and digits

## See Also

- [API Reference](/api/overview)
