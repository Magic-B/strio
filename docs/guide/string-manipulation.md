# String Manipulation

Learn how to transform and manipulate strings with strio.

## Basic Transformations

### Capitalize

Make the first character uppercase:

```typescript
import { capitalize, capitalizeWords } from 'strio'

capitalize('hello world') // "Hello world"
capitalizeWords('hello world') // "Hello World"

// With custom locale
capitalize('привет мир') // "Привет мир"
```

### Reverse

Reverse a string:

```typescript
import { reverse } from 'strio'

reverse('hello') // "olleh"
reverse('12345') // "54321"
```

### Truncate

Shorten long strings:

```typescript
import { truncate, truncateWords } from 'strio'

// By character count
truncate('Lorem ipsum dolor sit amet', 10)
// "Lorem ipsu..."

// Custom ellipsis
truncate('Long text here', 8, '…')
// "Long tex…"

// By word count
truncateWords('One two three four five', 3)
// "One two three..."
```

### Insert

Insert text at a specific position:

```typescript
import { insert } from 'strio'

insert('Hello World', 5, ',')
// "Hello, World"

insert('JavaScript', 4, '❤️')
// "Java❤️Script"
```

## Case Conversion

### CamelCase

Convert to camelCase:

```typescript
import { camelize } from 'strio'

camelize('hello world') // "helloWorld"
camelize('user-first-name') // "userFirstName"
camelize('FILE_NAME') // "fileName"
```

### PascalCase

Convert to PascalCase:

```typescript
import { pascalize } from 'strio'

pascalize('hello world') // "HelloWorld"
pascalize('user-profile') // "UserProfile"
pascalize('api_response') // "ApiResponse"
```

### kebab-case

Convert to kebab-case:

```typescript
import { dasherize } from 'strio'

dasherize('helloWorld') // "hello-world"
dasherize('UserProfile') // "user-profile"
dasherize('API_KEY') // "api-key"
```

### snake_case

Convert to snake_case:

```typescript
import { underscore } from 'strio'

underscore('helloWorld') // "hello_world"
underscore('UserProfile') // "user_profile"
underscore('API-KEY') // "api_key"
```

## Trimming & Cleaning

### Trim

Remove whitespace:

```typescript
import { trim } from 'strio'

trim('  hello  ') // "hello"
trim('\n\ttab\t\n') // "tab"
```

### Collapse Whitespace

Replace multiple spaces with one:

```typescript
import { collapseWhitespace } from 'strio'

collapseWhitespace('hello    world')
// "hello world"

collapseWhitespace('multiple\n\nlines')
// "multiple lines"
```

### Strip Prefix/Suffix

Remove specific text from start or end:

```typescript
import { stripPrefix, stripSuffix } from 'strio'

stripPrefix('hello world', 'hello ')
// "world"

stripSuffix('filename.txt', '.txt')
// "filename"
```

### Strip Tags

Remove HTML tags:

```typescript
import { stripTags } from 'strio'

stripTags('<p>Hello <strong>world</strong></p>')
// "Hello world"

stripTags('<script>alert("xss")</script>')
// "alert(\"xss\")"
```

## Padding

### Pad Left/Right/Center

Add padding to strings:

```typescript
import { padLeft, padRight, padCenter } from 'strio'

padLeft('42', 5, '0') // "00042"
padRight('hello', 10, '.') // "hello....."
padCenter('text', 10, '-') // "---text---"
```

## Indentation

### Indent & Dedent

Add or remove indentation:

```typescript
import { indent, dedent } from 'strio'

// Add indentation
const code = indent('function test() {\n  return true\n}', 2)
// "  function test() {\n    return true\n  }"

// Remove indentation
const clean = dedent(`
  function test() {
    return true
  }
`)
// "function test() {\n  return true\n}"
```

## Masking

### Mask

Hide sensitive information:

```typescript
import { mask } from 'strio'

mask('1234567890', '*', 6)
// "******7890"

mask('email@example.com', '*', 5, 10)
// "email*****mple.com"

// Mask credit card
mask('4532-1234-5678-9010', '*', 5, -4)
// "4532-****-****-9010"
```

## Ensuring

### Ensure Prefix/Suffix

Make sure string starts or ends with specific text:

```typescript
import { ensureLeft, ensureRight } from 'strio'

ensureLeft('world', 'hello ') // "hello world"
ensureLeft('hello world', 'hello ') // "hello world"

ensureRight('hello', ' world') // "hello world"
ensureRight('hello world', ' world') // "hello world"
```

## Real-World Examples

### Clean User Input

```typescript
import { trim, collapseWhitespace, capitalize } from 'strio'

function cleanInput(text: string): string {
  return capitalize(
    trim(
      collapseWhitespace(text)
    )
  )
}

cleanInput('  hello    world  ')
// "Hello world"
```

### Format Phone Number

```typescript
import { mask } from 'strio'

function formatPhone(phone: string): string {
  // Remove non-digits
  const digits = phone.replace(/\D/g, '')
  
  // Mask middle digits
  return mask(digits, '*', 3, -4)
}

formatPhone('1234567890')
// "123***7890"
```

### Create File Names

```typescript
import { slugify, ensureRight } from 'strio'

function createFileName(title: string, ext: string): string {
  const slug = slugify(title)
  return ensureRight(slug, ext)
}

createFileName('My Document', '.pdf')
// "my-document.pdf"
```

### Format Code

```typescript
import { indent, trim } from 'strio'

function formatCode(code: string, spaces: number): string {
  const lines = code.split('\n').map(line => trim(line))
  return indent(lines.join('\n'), spaces)
}
```

## Next Steps

- [String Validation](/guide/string-validation) - Check and validate strings
- [String Formatting](/guide/string-formatting) - Format for display
- [API Reference](/api/overview) - Browse all functions

