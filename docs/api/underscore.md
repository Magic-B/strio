# underscore

Converts a string to snake_case.



## underscore

### Signature

```typescript
function underscore(str: string): string
```

### Parameters

- `str` - The string to convert

### Returns

String in snake_case format.

### Examples

```typescript
import { underscore } from 'strio'

// From camelCase
underscore('helloWorld')
// "hello_world"

// From PascalCase
underscore('HelloWorld')
// "hello_world"

// From kebab-case
underscore('hello-world')
// "hello_world"

// From spaces
underscore('hello world')
// "hello_world"

// With numbers
underscore('userProfile2')
// "user_profile2"

// Multiple separators
underscore('hello---world  test')
// "hello_world_test"

// Already snake_case
underscore('hello_world')
// "hello_world"
```

## Use Cases

### Database Column Names

```typescript
import { underscore } from 'strio'

function toColumnName(fieldName: string): string {
  return underscore(fieldName)
}

toColumnName('firstName')
// "first_name"

toColumnName('createdAt')
// "created_at"
```

### Environment Variables

```typescript
import { underscore } from 'strio'

function toEnvVar(name: string): string {
  return underscore(name).toUpperCase()
}

toEnvVar('apiKey')
// "API_KEY"

toEnvVar('databaseUrl')
// "DATABASE_URL"
```

### File System Naming

```typescript
import { underscore } from 'strio'

function createSnakeFileName(name: string): string {
  return underscore(name) + '.py'
}

createSnakeFileName('UserProfile')
// "user_profile.py"

createSnakeFileName('apiClient')
// "api_client.py"
```

## Related Functions

- [camelize](/api/camelize) - Convert to camelCase
- [pascalize](/api/pascalize) - Convert to PascalCase
- [dasherize](/api/dasherize) - Convert to kebab-case

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
- [API Reference](/api/overview)

