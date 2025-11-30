# humanize

Converts code-style strings to human-readable format.



## humanize

### Signature

```typescript
function humanize(str: string): string
```

### Parameters

- `str` - The string to humanize

### Returns

Human-readable string with proper spacing and capitalization.

### Examples

```typescript
import { humanize } from 'strio'

// From snake_case
humanize('user_name')
// "User name"

// From camelCase
humanize('firstName')
// "First name"

// From kebab-case
humanize('my-variable-name')
// "My variable name"

// From SCREAMING_SNAKE
humanize('API_KEY')
// "Api key"

// With numbers
humanize('user_id_123')
// "User id 123"
```

## Use Cases

### Form Labels

```typescript
import { humanize } from 'strio'

function createLabel(fieldName: string): string {
  return humanize(fieldName) + ':'
}

createLabel('email_address')
// "Email address:"

createLabel('phoneNumber')
// "Phone number:"
```

### Display Field Names

```typescript
import { humanize } from 'strio'

function formatError(field: string): string {
  return `${humanize(field)} is required`
}

formatError('user_name')
// "User name is required"
```

### Table Headers

```typescript
import { humanize } from 'strio'

const fields = ['first_name', 'last_name', 'email_address']
const headers = fields.map(humanize)
// ["First name", "Last name", "Email address"]
```

## Related Functions

- [titleCase](/api/titleCase) - Title case formatting
- [capitalizeWords](/api/capitalizeWords) - Capitalize each word
- [camelize](/api/camelize) - Convert to camelCase

## See Also

- [String Formatting Guide](/guide/string-formatting)
- [Case Conversion](/api/camelize)
