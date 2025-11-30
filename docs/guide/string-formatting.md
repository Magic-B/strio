# String Formatting

Learn how to format strings for display with strio.

## Humanization

### humanize

Convert code-style strings to readable format:

```typescript
import { humanize } from 'strio'

humanize('hello_world') // "Hello world"
humanize('user-name') // "User name"
humanize('firstName') // "First name"
humanize('API_KEY') // "Api key"
```

### titleCase

Convert to Title Case:

```typescript
import { titleCase } from 'strio'

titleCase('hello world') // "Hello World"
titleCase('the quick brown fox') // "The Quick Brown Fox"
titleCase('API response handler') // "Api Response Handler"
```

## Slugification

### slugify

Create URL-friendly slugs:

```typescript
import { slugify } from 'strio'

slugify('Hello World!') // "hello-world"
slugify('My Blog Post 123') // "my-blog-post-123"
slugify('Привет Мир') // "privet-mir" (transliterated)

// Custom separator
slugify('Hello World', '_') // "hello_world"

// Keep special chars
slugify('C++ Programming', '-', false) // "c-programming"
```

## Transliteration

### transliterate

Convert non-Latin characters to Latin:

```typescript
import { transliterate } from 'strio'

transliterate('Привет') // "Privet"
transliterate('こんにちは') // "konnichiwa"
transliterate('Здравствуйте') // "Zdravstvuyte"
```

## Numbers & Pluralization

### ordinalize

Add ordinal suffix to numbers:

```typescript
import { ordinalize } from 'strio'

ordinalize(1) // "1st"
ordinalize(2) // "2nd"
ordinalize(3) // "3rd"
ordinalize(4) // "4th"
ordinalize(21) // "21st"
ordinalize(42) // "42nd"
ordinalize(100) // "100th"
```

### pluralize

Convert singular to plural:

```typescript
import { pluralize } from 'strio'

pluralize('cat') // "cats"
pluralize('dog') // "dogs"
pluralize('person') // "people"
pluralize('child') // "children"
pluralize('box') // "boxes"
pluralize('potato') // "potatoes"

// With count
pluralize('cat', 1) // "cat"
pluralize('cat', 2) // "cats"
pluralize('person', 5) // "people"

// Include number
pluralize('item', 0, true) // "0 items"
pluralize('item', 1, true) // "1 item"
pluralize('item', 5, true) // "5 items"
```

## Templates

### template

Simple string template replacement:

```typescript
import { template } from 'strio'

// Basic replacement
template('Hello, {{name}}!', { name: 'John' })
// "Hello, John!"

// Multiple variables
template('{{greeting}}, {{name}}!', {
  greeting: 'Hello',
  name: 'World'
})
// "Hello, World!"

// Nested objects
template('User: {{user.name}} ({{user.age}})', {
  user: { name: 'John', age: 30 }
})
// "User: John (30)"

// Array access
template('First: {{items.0}}, Last: {{items.-1}}', {
  items: ['a', 'b', 'c']
})
// "First: a, Last: c"

// Missing values
template('Hello, {{name}}!', {})
// "Hello, !" (empty string for missing)

// Custom syntax
template('Hello, %name%!', { name: 'John' }, /%(\w+)%/g)
// "Hello, John!"
```

## Joining

### join

Smart array joining:

```typescript
import { join } from 'strio'

// Basic join
join(['apple', 'banana', 'orange'])
// "apple, banana, orange"

// Custom separator
join(['a', 'b', 'c'], ' | ')
// "a | b | c"

// With conjunction
join(['apple', 'banana', 'orange'], ', ', ' and ')
// "apple, banana and orange"

join(['John', 'Jane'], ', ', ' and ')
// "John and Jane"

// Single item
join(['apple'])
// "apple"

// Empty array
join([])
// ""
```

## Real-World Examples

### Blog Post URL

```typescript
import { slugify } from 'strio'

function createPostUrl(title: string, id: number): string {
  const slug = slugify(title)
  return `/blog/${id}/${slug}`
}

createPostUrl('10 Tips for Better Code', 42)
// "/blog/42/10-tips-for-better-code"
```

### User Greeting

```typescript
import { capitalize } from 'strio'

function greetUser(name: string, time: 'morning' | 'afternoon' | 'evening'): string {
  const greeting = time === 'morning' ? 'Good morning' : 
                   time === 'afternoon' ? 'Good afternoon' : 
                   'Good evening'
  
  return `${greeting}, ${capitalize(name)}!`
}

greetUser('john', 'morning')
// "Good morning, John!"
```

### File Size Display

```typescript
import { template } from 'strio'

function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let size = bytes
  let unitIndex = 0
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  
  return template('{{size}} {{unit}}', {
    size: size.toFixed(2),
    unit: units[unitIndex]
  })
}

formatFileSize(1536)
// "1.50 KB"

formatFileSize(5242880)
// "5.00 MB"
```

### Item Count Display

```typescript
import { pluralize } from 'strio'

function displayItemCount(count: number, item: string): string {
  if (count === 0) {
    return `No ${pluralize(item)}`
  }
  return pluralize(item, count, true)
}

displayItemCount(0, 'item')    // "No items"
displayItemCount(1, 'item')    // "1 item"
displayItemCount(5, 'item')    // "5 items"
displayItemCount(3, 'person')  // "3 people"
```

### Ranking Display

```typescript
import { ordinalize } from 'strio'

function displayRank(position: number, name: string): string {
  return `${name} finished in ${ordinalize(position)} place`
}

displayRank(1, 'Alice')  // "Alice finished in 1st place"
displayRank(2, 'Bob')    // "Bob finished in 2nd place"
displayRank(3, 'Charlie') // "Charlie finished in 3rd place"
```

### Email Template

```typescript
import { template, capitalize } from 'strio'

interface EmailData {
  user: { name: string }
  order: { id: string; total: number }
  items: string[]
}

function generateOrderEmail(data: EmailData): string {
  const itemsList = data.items.map(item => `- ${item}`).join('\n')
  
  return template(`
Hello {{user.name}},

Your order #{{order.id}} has been confirmed!

Items:
${itemsList}

Total: ${{order.total}}

Thank you for your purchase!
  `.trim(), data)
}

generateOrderEmail({
  user: { name: 'john' },
  order: { id: 'ORD-123', total: 99.99 },
  items: ['Product A', 'Product B']
})
```

### Breadcrumb Navigation

```typescript
import { humanize, titleCase } from 'strio'

function createBreadcrumb(path: string): string[] {
  return path
    .split('/')
    .filter(Boolean)
    .map(segment => titleCase(humanize(segment)))
}

createBreadcrumb('/user-profile/edit-settings')
// ["User Profile", "Edit Settings"]
```

### Tag Display

```typescript
import { join } from 'strio'

function displayTags(tags: string[]): string {
  if (tags.length === 0) {
    return 'No tags'
  }
  
  if (tags.length === 1) {
    return `Tagged: ${tags[0]}`
  }
  
  return `Tagged: ${join(tags, ', ')}`
}

displayTags([])                          // "No tags"
displayTags(['javascript'])              // "Tagged: javascript"
displayTags(['javascript', 'typescript']) // "Tagged: javascript, typescript"
```

## Tips & Best Practices

### 1. Combine Functions

```typescript
import { slugify, ensureRight } from 'strio'

function createFilename(title: string, ext: string): string {
  return ensureRight(slugify(title), ext)
}

createFilename('My Document', '.pdf')
// "my-document.pdf"
```

### 2. Safe Templates

```typescript
import { template, escapeHtml } from 'strio'

function safeTemplate(tmpl: string, data: Record<string, any>): string {
  // Escape HTML in data
  const safeData = Object.entries(data).reduce((acc, [key, value]) => {
    acc[key] = typeof value === 'string' ? escapeHtml(value) : value
    return acc
  }, {} as Record<string, any>)
  
  return template(tmpl, safeData)
}
```

### 3. Localization Ready

```typescript
import { pluralize } from 'strio'

function getLocalizedCount(count: number, singular: string, plural?: string): string {
  // If custom plural provided, use it
  if (plural) {
    return count === 1 ? `${count} ${singular}` : `${count} ${plural}`
  }
  
  // Otherwise use pluralize
  return pluralize(singular, count, true)
}

getLocalizedCount(1, 'item')           // "1 item"
getLocalizedCount(5, 'item')           // "5 items"
getLocalizedCount(5, 'товар', 'товара') // "5 товара" (custom Russian plural)
```

## Next Steps

- [String Manipulation](/guide/string-manipulation) - Transform strings
- [String Validation](/guide/string-validation) - Validate strings
- [API Reference](/api/overview) - Browse all functions

