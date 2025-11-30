# slugify

Creates URL-friendly slugs from strings with automatic transliteration.



## slugify

### Signature

```typescript
function slugify(str: string, separator: string = "-"): string
```

### Parameters

- `str` - The string to slugify
- `separator` - Character to use as separator (default: `"-"`)

### Returns

URL-friendly slug string.

### Examples

```typescript
import { slugify } from 'strio'

// Basic usage
slugify('Hello World!')
// "hello-world"

slugify('My Blog Post 123')
// "my-blog-post-123"

// With Cyrillic (auto-transliteration)
slugify('Привет Мир')
// "privet-mir"

// With accents
slugify('café résumé')
// "cafe-resume"

// Custom separator
slugify('Hello World', '_')
// "hello_world"

slugify('Hello World', '.')
// "hello.world"

// Empty separator
slugify('Hello World', '')
// "helloworld"

// Multiple spaces/special chars
slugify('Hello    World!!!   Test')
// "hello-world-test"

// Leading/trailing separators removed
slugify('  Hello World  ')
// "hello-world"

// Numbers preserved
slugify('Top 10 Tips')
// "top-10-tips"

// Special characters
slugify('C++ Programming')
// "c-programming"

slugify('@username #tag')
// "username-tag"
```

## Use Cases

### Blog Post URLs

```typescript
import { slugify } from 'strio'

function createPostUrl(title: string, id: number): string {
  const slug = slugify(title)
  return `/blog/${id}/${slug}`
}

createPostUrl('10 Tips for Better Code', 42)
// "/blog/42/10-tips-for-better-code"

createPostUrl('Изучаем JavaScript', 43)
// "/blog/43/izuchaem-javascript"
```

### File Names

```typescript
import { slugify, ensureRight } from 'strio'

function createFileName(title: string, ext: string): string {
  return ensureRight(slugify(title), ext)
}

createFileName('My Document', '.pdf')
// "my-document.pdf"

createFileName('User Profile', '.json')
// "user-profile.json"
```

### Tag Generation

```typescript
import { slugify } from 'strio'

function generateTags(input: string): string[] {
  return input
    .split(',')
    .map(tag => slugify(tag.trim()))
    .filter(tag => tag.length > 0)
}

generateTags('JavaScript, Vue.js, Node.js')
// ["javascript", "vue-js", "node-js"]
```

### API Endpoints

```typescript
import { slugify } from 'strio'

function createEndpoint(resource: string, action: string): string {
  return `/api/${slugify(resource)}/${slugify(action)}`
}

createEndpoint('User Profile', 'Get Details')
// "/api/user-profile/get-details"
```

### Database Slugs

```typescript
import { slugify } from 'strio'

interface Post {
  title: string
  slug?: string
}

function generateUniqueSlug(title: string, existing: string[]): string {
  let slug = slugify(title)
  let counter = 1
  
  while (existing.includes(slug)) {
    slug = `${slugify(title)}-${counter}`
    counter++
  }
  
  return slug
}

const existing = ['hello-world', 'hello-world-1']
generateUniqueSlug('Hello World', existing)
// "hello-world-2"
```

### Router Paths

```typescript
import { slugify } from 'strio'

function createRoutePath(pageName: string): string {
  return `/${slugify(pageName)}`
}

createRoutePath('User Profile')
// "/user-profile"

createRoutePath('About Us')
// "/about-us"
```

## Related Functions

- [transliterate](/api/transliterate) - Only transliterate
- [dasherize](/api/case) - Convert case to kebab-case
- [underscore](/api/case) - Convert to snake_case

## See Also

- [String Formatting Guide](/guide/string-formatting)
- [Case Conversion](/api/case)

