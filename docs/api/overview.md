# API Reference

Complete reference for all strio functions.

## Categories

strio functions are organized into logical categories:

### 🎯 Manipulation
Transform and modify strings

- [capitalize](/api/capitalize) - Capitalize text
- [reverse](/api/reverse) - Reverse string
- [truncate](/api/truncate) - Shorten text
- [trim](/api/trim) - Remove whitespace
- [insert](/api/insert) - Insert text
- [mask](/api/mask) - Hide sensitive data

### 🔤 Case Conversion
Change string casing

- [camelize](/api/camelize) - Convert to camelCase
- [pascalize](/api/pascalize) - Convert to PascalCase
- [dasherize](/api/dasherize) - Convert to kebab-case
- [underscore](/api/underscore) - Convert to snake_case

### ✅ Validation
Check and validate strings

- [String Validation Guide](/guide/string-validation) - Type and format checks (isEmpty, isAlpha, etc.)

### 🔍 Searching
Find and extract text

- [contains](/api/contains) - Check for substrings
- [count](/api/count) - Count occurrences
- [between](/api/between) - Extract text between delimiters

### 🎨 Formatting
Format for display

- [humanize](/api/humanize) - Make readable
- [slugify](/api/slugify) - Create URL slugs
- [ordinalize](/api/ordinalize) - Add ordinal suffixes
- [pluralize](/api/pluralize) - Handle singular/plural

### 🛠️ Utilities
Helper functions

- [words](/api/words) - Word operations
- [join](/api/join) - Smart array joining
- [template](/api/template) - String templates
- [random](/api/random) - Generate random strings
- [similarity](/api/similarity) - Compare strings
- [transliterate](/api/transliterate) - Convert scripts

### 📏 Padding & Indentation
Add spacing

- [padLeft](/api/padLeft) / [padRight](/api/padRight) / [padCenter](/api/padCenter) - Pad strings
- [indent](/api/indent) - Add/remove indentation

### 🔐 Security
Safe string operations

- [escapeHtml](/api/escapeHtml) / [unescapeHtml](/api/unescapeHtml) / [escapeRegExp](/api/escapeRegExp) - Escape special characters
- [stripTags](/api/stripTags) / [stripPrefix](/api/stripPrefix) / [stripSuffix](/api/stripSuffix) - Remove tags and content

### ✨ Ensuring
Guarantee format

- [ensureLeft](/api/ensureLeft) / [ensureRight](/api/ensureRight) - Ensure prefix/suffix

## Quick Reference

### Most Used Functions

```typescript
import { 
  capitalize,    // "hello" → "Hello"
  slugify,       // "Hello World" → "hello-world"
  truncate,      // Shorten text
  isEmpty,       // Check if empty
  contains,      // Check substring
  template       // "Hello {{name}}" → "Hello John"
} from 'strio'
```

### Common Patterns

#### String Transformation
```typescript
import { capitalize, trim, collapseWhitespace } from 'strio'

const clean = capitalize(trim(collapseWhitespace(input)))
```

#### Validation
```typescript
import { isEmpty, isEmail, isNumeric } from 'strio'

if (!isEmpty(value) && isEmail(value)) {
  // Valid email
}
```

#### Formatting
```typescript
import { slugify, ensureRight } from 'strio'

const filename = ensureRight(slugify(title), '.md')
```

## Type Definitions

strio is fully typed. Import types as needed:

```typescript
import type { 
  StringValidator,
  CaseConverter,
  TemplateOptions 
} from 'strio'
```

## Function Naming

strio uses consistent naming conventions:

- **Verbs** for actions: `capitalize`, `reverse`, `truncate`
- **is** prefix for checks: `isEmpty`, `isAlpha`, `isEmail`
- **has/contains** for presence: `contains`, `containsAll`
- **ensure** for guarantees: `ensureLeft`, `ensureRight`

## Return Values

Most functions return:
- **String** - transformed result
- **Boolean** - for validation checks
- **Number** - for counts and measurements
- **Array** - for extraction functions

## Error Handling

strio functions are defensive:

```typescript
import { capitalize } from 'strio'

capitalize(null)      // Returns empty string
capitalize(undefined) // Returns empty string
capitalize('')        // Returns empty string
capitalize('hello')   // Returns "Hello"
```

For validation, check before calling:

```typescript
import { isEmpty, slugify } from 'strio'

const input = getUserInput()

if (!isEmpty(input)) {
  const slug = slugify(input)
  // Use slug
}
```

## Performance Tips

### 1. Tree Shaking

Import only what you need:

```typescript
// ✅ Good - only bundles capitalize
import { capitalize } from 'strio'

// ❌ Bad - bundles everything
import * as strio from 'strio'
```

### 2. Avoid Chaining Overhead

For performance-critical code, combine operations:

```typescript
// Instead of multiple function calls
const result = capitalize(trim(toLowerCase(input)))

// Consider a single optimized function
function cleanAndCapitalize(str: string): string {
  return str.trim().toLowerCase().replace(/^\w/, c => c.toUpperCase())
}
```

### 3. Memoization

For repeated operations on the same input:

```typescript
const cache = new Map()

function memoizedSlugify(text: string): string {
  if (cache.has(text)) {
    return cache.get(text)
  }
  const result = slugify(text)
  cache.set(text, result)
  return result
}
```

## Browser Compatibility

All functions work in:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Node.js 16+

Some features may use:
- `String.prototype.normalize()` (transliteration)
- `Intl` API (future localization features)

## Migration Guide

Coming from other libraries:

### From Lodash

```typescript
// Lodash
import _ from 'lodash'
_.capitalize('hello')
_.snakeCase('helloWorld')

// strio
import { capitalize, underscore } from 'strio'
capitalize('hello')
underscore('helloWorld')
```

### From Voca

```typescript
// Voca
import v from 'voca'
v.capitalize('hello')
v.slugify('Hello World')

// strio
import { capitalize, slugify } from 'strio'
capitalize('hello')
slugify('Hello World')
```

## Next Steps

- Browse functions by [category](#categories)
- See [examples](/guide/string-manipulation)
- [Report issues](https://github.com/magic-b/strio/issues)

