# dasherize

Converts a string to kebab-case (dash-case).



## dasherize

### Signature

```typescript
function dasherize(str: string): string
```

### Parameters

- `str` - The string to convert

### Returns

String in kebab-case format.

### Examples

```typescript
import { dasherize } from 'strio'

// From camelCase
dasherize('helloWorld')
// "hello-world"

// From PascalCase
dasherize('HelloWorld')
// "hello-world"

// From snake_case
dasherize('hello_world')
// "hello-world"

// From spaces
dasherize('hello world')
// "hello-world"

// With numbers
dasherize('userProfile2')
// "user-profile2"

// Multiple spaces/underscores
dasherize('hello___world  test')
// "hello-world-test"

// Already kebab-case
dasherize('hello-world')
// "hello-world"
```

## Use Cases

### URL Slugs

```typescript
import { dasherize } from 'strio'

function createSlug(title: string): string {
  return dasherize(title.toLowerCase())
}

createSlug('My Blog Post')
// "my-blog-post"
```

### CSS Class Names

```typescript
import { dasherize } from 'strio'

function generateCssClass(componentName: string, modifier?: string): string {
  const base = dasherize(componentName)
  return modifier ? `${base}--${dasherize(modifier)}` : base
}

generateCssClass('ButtonPrimary')
// "button-primary"

generateCssClass('UserProfile', 'Active')
// "user-profile--active"
```

### File Names

```typescript
import { dasherize } from 'strio'

function createFileName(name: string, ext: string): string {
  return `${dasherize(name)}${ext}`
}

createFileName('UserProfile', '.vue')
// "user-profile.vue"
```

## Related Functions

- [camelize](/api/camelize) - Convert to camelCase
- [pascalize](/api/pascalize) - Convert to PascalCase
- [underscore](/api/underscore) - Convert to snake_case
- [slugify](/api/slugify) - Create URL slugs

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
- [API Reference](/api/overview)

