# pascalize

Converts a string to PascalCase.



## pascalize

### Signature

```typescript
function pascalize(str: string): string
```

### Parameters

- `str` - The string to convert

### Returns

String in PascalCase format.

### Examples

```typescript
import { pascalize } from 'strio'

// From kebab-case
pascalize('hello-world')
// "HelloWorld"

// From snake_case
pascalize('hello_world')
// "HelloWorld"

// From camelCase
pascalize('helloWorld')
// "HelloWorld"

// From spaces
pascalize('hello world')
// "HelloWorld"

// With numbers
pascalize('user-profile-2')
// "UserProfile2"

// Already PascalCase
pascalize('HelloWorld')
// "HelloWorld"
```

## Use Cases

### Class Names

```typescript
import { pascalize } from 'strio'

function generateClassName(name: string): string {
  return pascalize(name)
}

generateClassName('user-profile')
// "UserProfile"

generateClassName('api_client')
// "ApiClient"
```

### Component Names

```typescript
import { pascalize } from 'strio'

function createComponentName(filename: string): string {
  const name = filename.replace(/\.(vue|tsx?|jsx?)$/, '')
  return pascalize(name)
}

createComponentName('user-profile.vue')
// "UserProfile"

createComponentName('api_service.ts')
// "ApiService"
```

## Related Functions

- [camelize](/api/camelize) - Convert to camelCase
- [dasherize](/api/dasherize) - Convert to kebab-case
- [underscore](/api/underscore) - Convert to snake_case

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
- [API Reference](/api/overview)

