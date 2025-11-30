# Getting Started

Get up and running with strio in minutes.

## Installation

Install strio using your preferred package manager:

::: code-group

```bash [npm]
npm install strio
```

```bash [yarn]
yarn add strio
```

```bash [pnpm]
pnpm add strio
```

```bash [bun]
bun add strio
```

:::

## Basic Usage

Import the functions you need and start using them:

```typescript
import { capitalize, slugify, truncate } from 'strio'

// Capitalize first letter
const result = capitalize('hello world')
console.log(result) // "Hello world"

// Create URL-friendly slug
const slug = slugify('My Blog Post Title!')
console.log(slug) // "my-blog-post-title"

// Truncate long text
const short = truncate('This is a very long text', 10)
console.log(short) // "This is a ..."
```

## TypeScript Support

strio is written in TypeScript and provides full type definitions out of the box:

```typescript
import { capitalize, type StringValidator } from 'strio'

// Full IntelliSense support
const text: string = capitalize('hello')

// Type-safe function parameters
function processText(input: string): string {
  return capitalize(input)
}
```

## Tree-Shaking

strio is designed to work seamlessly with modern bundlers. Import only what you need:

```typescript
// ✅ Good - only `capitalize` is bundled
import { capitalize } from 'strio'

// ⚠️ Avoid - imports everything
import * as strio from 'strio'
```

## CommonJS vs ESM

strio supports both CommonJS and ES Modules:

::: code-group

```javascript [ESM]
import { capitalize } from 'strio'

const result = capitalize('hello')
```

```javascript [CommonJS]
const { capitalize } = require('strio')

const result = capitalize('hello')
```

:::

## Browser Usage

strio works in all modern browsers. Use it directly via a module bundler (Vite, Webpack, etc.) or a CDN:

### With a Bundler

```javascript
import { capitalize } from 'strio'

document.getElementById('output').textContent = capitalize('hello world')
```

### Via CDN (ESM)

```html
<script type="module">
  import { capitalize } from 'https://esm.sh/strio'
  
  console.log(capitalize('hello world'))
</script>
```

## Node.js Usage

strio works perfectly in Node.js environments (v16+):

```javascript
const { capitalize, slugify } = require('strio')

const title = 'My Article Title'
const slug = slugify(title)

console.log(slug) // "my-article-title"
```

## Quick Examples

Here are some common use cases to get you started:

### Form Validation

```typescript
import { isEmpty, isEmail, isNumeric } from 'strio'

function validateForm(data: FormData) {
  if (isEmpty(data.name)) {
    throw new Error('Name is required')
  }
  
  if (!isEmail(data.email)) {
    throw new Error('Invalid email')
  }
  
  if (!isNumeric(data.age)) {
    throw new Error('Age must be numeric')
  }
}
```

### Text Formatting

```typescript
import { capitalize, truncate, humanize } from 'strio'

// Format user input
const displayName = capitalize(userInput.toLowerCase())

// Show preview
const preview = truncate(article.content, 150)

// Make readable
const label = humanize('user_first_name') // "User first name"
```

### URL Handling

```typescript
import { slugify, dasherize } from 'strio'

// Create URL slug
const slug = slugify('10 Tips for Better Code!')
// "10-tips-for-better-code"

// Format route names
const route = dasherize('UserProfile')
// "user-profile"
```

### Data Processing

```typescript
import { trim, collapseWhitespace, stripTags } from 'strio'

// Clean user input
const clean = trim(collapseWhitespace(userInput))

// Remove HTML tags
const plain = stripTags(htmlContent)
```

## Next Steps

Now that you have strio installed, explore:

- [String Manipulation](/guide/string-manipulation) - Learn about text transformation
- [String Validation](/guide/string-validation) - Validate and check strings
- [String Formatting](/guide/string-formatting) - Format text for display
- [API Reference](/api/overview) - Browse all available functions

## Need Help?

- 📖 Check the [API documentation](/api/overview)
- 🐛 [Report issues](https://github.com/magic-b/strio/issues)
- 💡 [Request features](https://github.com/magic-b/strio/issues/new)

