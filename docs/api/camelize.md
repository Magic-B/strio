# camelize

Converts a string to camelCase.



## camelize

### Signature

```typescript
function camelize(str: string): string
```

### Parameters

- `str` - The string to convert

### Returns

String in camelCase format.

### Examples

```typescript
import { camelize } from 'strio'

// From kebab-case
camelize('hello-world')
// "helloWorld"

// From snake_case
camelize('hello_world')
// "helloWorld"

// From spaces
camelize('hello world')
// "helloWorld"

// From PascalCase
camelize('HelloWorld')
// "helloWorld"

// Mixed separators
camelize('hello-world_test case')
// "helloWorldTestCase"

// With numbers
camelize('hello-world-123')
// "helloWorld123"

// Already camelCase
camelize('helloWorld')
// "helloWorld"

// Empty string
camelize('')
// ""
```

## Use Cases

### Object Property Names

```typescript
import { camelize } from 'strio'

function convertKeysToCamel(obj: Record<string, any>): Record<string, any> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[camelize(key)] = value
    return acc
  }, {} as Record<string, any>)
}

convertKeysToCamel({ 
  'first-name': 'John',
  'last_name': 'Doe',
  'age': 30
})
// { firstName: 'John', lastName: 'Doe', age: 30 }
```

### API Response Transformation

```typescript
import { camelize } from 'strio'

function transformApiResponse(data: any): any {
  if (Array.isArray(data)) {
    return data.map(transformApiResponse)
  }
  
  if (data && typeof data === 'object') {
    return Object.entries(data).reduce((acc, [key, value]) => {
      acc[camelize(key)] = transformApiResponse(value)
      return acc
    }, {} as any)
  }
  
  return data
}

transformApiResponse({
  'user-name': 'john',
  'user_email': 'john@example.com'
})
// { userName: 'john', userEmail: 'john@example.com' }
```

## Related Functions

- [pascalize](/api/pascalize) - Convert to PascalCase
- [dasherize](/api/dasherize) - Convert to kebab-case
- [underscore](/api/underscore) - Convert to snake_case

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
- [API Reference](/api/overview)

