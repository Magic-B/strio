# mask

Mask sensitive information in strings.



## mask

### Signature

```typescript
function mask(
  str: string,
  options: {
    start?: number;
    end?: number;
    char?: string;
  } = {}
): string
```

### Parameters

- `str` - The string to mask
- `options` - Configuration object (default: `{}`):
  - `start` - Start position for masking (default: 0)
  - `end` - End position for masking (default: str.length - 4)
  - `char` - Masking character (default: `"*"`)

### Returns

Masked string with specified characters replaced.

### Examples

```typescript
import { mask } from 'strio'

// Basic usage (shows last 4 characters)
mask("4111111111111111")
// "************1111"

// Custom range
mask("4111111111111111", { start: 4, end: 12 })
// "4111********1111"

// Custom mask character
mask("password123", { char: "#" })
// "########123"

// Email masking
mask("hello@example.com", { start: 0, end: 5, char: "*" })
// "*****@example.com"

// Show first 2 and last 2
mask("ABCDEFGH", { start: 2, end: 6 })
// "AB****GH"

// Complete masking
mask("secret", { start: 0, end: 6 })
// "******"

// No masking
mask("test", { start: 0, end: 0 })
// "test"
```

### Use Cases

#### Mask Credit Card Numbers

```typescript
import { mask } from 'strio'

function maskCreditCard(cardNumber: string): string {
  // Remove spaces first
  const cleaned = cardNumber.replace(/\s/g, '')
  return mask(cleaned)
}

maskCreditCard("4111 1111 1111 1111")
// "************1111"

maskCreditCard("5555555555554444")
// "************4444"
```

#### Mask Passwords

```typescript
import { mask } from 'strio'

function maskPassword(password: string): string {
  return mask(password, { start: 0, end: password.length, char: "•" })
}

maskPassword("MySecretPassword123")
// "•••••••••••••••••••"
```

#### Mask Email Addresses

```typescript
import { mask } from 'strio'

function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  const visibleChars = Math.min(3, local.length)
  
  const maskedLocal = mask(local, { 
    start: 0, 
    end: local.length - visibleChars 
  })
  
  return `${maskedLocal}@${domain}`
}

maskEmail("john.doe@example.com")
// "******oe@example.com"

maskEmail("hi@test.com")
// "hi@test.com"  (too short to mask)
```

#### Mask Phone Numbers

```typescript
import { mask } from 'strio'

function maskPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const masked = mask(cleaned, { start: 3, end: 7 })
  
  // Format back
  return `(${masked.slice(0, 3)}) ${masked.slice(3, 7)}-${masked.slice(7)}`
}

maskPhone("(123) 456-7890")
// "(123) ****-7890"
```

#### Mask SSN (Social Security Number)

```typescript
import { mask } from 'strio'

function maskSSN(ssn: string): string {
  const cleaned = ssn.replace(/\D/g, '')
  const masked = mask(cleaned, { start: 0, end: 5 })
  
  return `${masked.slice(0, 3)}-${masked.slice(3, 5)}-${masked.slice(5)}`
}

maskSSN("123-45-6789")
// "***-**-6789"
```

#### Mask API Keys

```typescript
import { mask } from 'strio'

function maskAPIKey(key: string): string {
  // Show first 8 and last 4 characters
  if (key.length <= 12) return mask(key)
  
  return mask(key, { start: 8, end: key.length - 4 })
}

maskAPIKey("sk_example_1234567890abcdefghijklmnop")
// "sk_example_******************mnop"
```

#### Display Masked Input

```typescript
import { mask } from 'strio'

function createMaskedDisplay(value: string, showCount: number = 4): string {
  const visibleStart = Math.max(0, value.length - showCount)
  return mask(value, { start: 0, end: visibleStart })
}

createMaskedDisplay("MyPassword", 2)
// "********wd"
```

## Masking Patterns

Common masking patterns:

```typescript
import { mask } from 'strio'

const value = "1234567890"

// Show last 4 (default)
mask(value)
// "******7890"

// Show first 4
mask(value, { start: 4, end: 10 })
// "1234******"

// Show first and last 2
mask(value, { start: 2, end: 8 })
// "12******90"

// Complete mask
mask(value, { start: 0, end: 10 })
// "**********"
```

## Options Validation

Invalid options return original string:

```typescript
import { mask } from 'strio'

const value = "test"

// Invalid: start >= end
mask(value, { start: 3, end: 1 })
// "test"

// Invalid: start < 0
mask(value, { start: -1, end: 2 })
// "test"

// Invalid: end > length
mask(value, { start: 0, end: 10 })
// "test"
```

## Security Note

⚠️ **Important**: Masking is for display purposes only. Never rely on masked strings for actual data security. Always use proper encryption and secure storage for sensitive data.

```typescript
// ❌ BAD - masking doesn't secure data
const password = mask(userPassword)
database.save(password)

// ✅ GOOD - use proper hashing
const hashed = await bcrypt.hash(userPassword, 10)
database.save(hashed)

// ✅ GOOD - mask for display only
const displayPassword = mask(userPassword)
console.log(`Password: ${displayPassword}`)
```

## Related Functions

- [truncate](/api/truncate) - Shorten strings
- [replace](/guide/string-manipulation) - Replace substrings
- [escapeHtml](/api/escape) - Escape HTML characters

## See Also

- [String Security Guide](/guide/string-validation)
- [Formatting Functions](/api/humanize)

