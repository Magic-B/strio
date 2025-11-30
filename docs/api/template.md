# template

Conditional template literal - blocks in brackets only appear if they contain truthy values.


## template

### Signature

```typescript
function template(strings: TemplateStringsArray, ...values: OptValue[]): string
```

### Parameters

- `strings` - Template strings array (auto-provided by tagged template)
- `values` - Values to interpolate (string | number | boolean | null | undefined)

### Returns

String with conditional blocks evaluated.

### Examples

#### Basic Usage

```typescript
import { template } from 'strio'

const name = 'John'
const age = null

// Conditional blocks in [] only appear if they contain truthy values
template`Hello, ${name}[, ${age} years old]!`
// "Hello, John!" (age is null, block is hidden)

const name2 = 'Jane'
const age2 = 30

template`Hello, ${name2}[, ${age2} years old]!`
// "Hello, Jane, 30 years old!" (age is truthy, block appears)
```

#### Path Building

```typescript
import { template } from 'strio'

const dir = 'docs'
const file = null

template`/${dir}[/${file}]`
// "/docs" (file is null, block hidden)

const file2 = 'readme.md'
template`/${dir}[/${file2}]`
// "/docs/readme.md" (file is truthy, block appears)
```

#### User Information

```typescript
import { template } from 'strio'

const user = 'Alice'
const role = null

template`User: ${user}[ (${role})]`
// "User: Alice" (role is null, parentheses hidden)

const role2 = 'Admin'
template`User: ${user}[ (${role2})]`
// "User: Alice (Admin)" (role is truthy, appears with parentheses)
```

#### Multiple Conditional Blocks

```typescript
import { template } from 'strio'

const title = 'Hello'
const subtitle = null
const author = 'John'

template`${title}[: ${subtitle}][ by ${author}]`
// "Hello by John" (subtitle hidden, author shown)
```

#### Escaping Brackets

```typescript
import { template } from 'strio'

const value = 42

// Use backslash to escape literal brackets
template`Array\[0\] = ${value}`
// "Array[0] = 42" (brackets are literal)
```

## Use Cases

### Optional URL Parameters

```typescript
import { template } from 'strio'

function buildUrl(base: string, id?: number, query?: string): string {
  return template`${base}[/${id}][?${query}]`
}

buildUrl('/api/users')
// "/api/users"

buildUrl('/api/users', 123)
// "/api/users/123"

buildUrl('/api/users', 123, 'sort=name')
// "/api/users/123?sort=name"
```

### Formatting Names

```typescript
import { template } from 'strio'

function formatName(first: string, middle?: string, last?: string): string {
  return template`${first}[ ${middle}][ ${last}]`
}

formatName('John')
// "John"

formatName('John', 'William')
// "John William"

formatName('John', undefined, 'Doe')
// "John Doe"

formatName('John', 'William', 'Doe')
// "John William Doe"
```

### Optional Metadata

```typescript
import { template } from 'strio'

function formatPost(title: string, author?: string, date?: string): string {
  return template`${title}[ by ${author}][ on ${date}]`
}

formatPost('My Post')
// "My Post"

formatPost('My Post', 'John')
// "My Post by John"

formatPost('My Post', undefined, '2024-01-15')
// "My Post on 2024-01-15"
```

### File Paths

```typescript
import { template } from 'strio'

function buildPath(
  base: string,
  dir?: string,
  file?: string,
  ext?: string
): string {
  return template`${base}[/${dir}][/${file}][${ext}]`
}

buildPath('/home/user')
// "/home/user"

buildPath('/home/user', 'projects')
// "/home/user/projects"

buildPath('/home/user', 'projects', 'readme', '.md')
// "/home/user/projects/readme.md"
```

## Related Functions

- [join](/api/join) - Join arrays with separators
- [slugify](/api/slugify) - Create URL-friendly slugs

## See Also

- [String Formatting Guide](/guide/string-formatting)
- [API Reference](/api/overview)

