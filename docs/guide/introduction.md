# What is strio?

**strio** is a modern, lightweight, and intuitive string utilities library for JavaScript and TypeScript. It provides a comprehensive set of functions for string manipulation, validation, formatting, and transformation.

## The Problem

Working with strings in JavaScript can be tedious. While the language provides basic string methods, many common operations require verbose code, multiple method calls, or external libraries with heavy dependencies.

## The Solution

strio solves this by providing:

- **50+ utility functions** covering common string operations
- **Zero dependencies** - pure JavaScript/TypeScript
- **TypeScript-first** design with full type safety
- **Tree-shakeable** - only bundle what you use
- **Consistent API** - predictable function names and behavior
- **Production-ready** - thoroughly tested and documented

## Philosophy

strio is built on three core principles:

### 1. Simplicity

Every function has a clear, intuitive name and does exactly what you expect:

```typescript
import { capitalize, slugify, isEmpty } from 'strio'

capitalize('hello') // "Hello"
slugify('Hello World') // "hello-world"
isEmpty('   ') // true
```

### 2. Performance

We use native JavaScript methods where possible and avoid unnecessary abstractions:

```typescript
// Optimized for speed
import { contains, count } from 'strio'

contains('hello world', 'world') // true
count('hello world', 'l') // 3
```

### 3. Safety

Built-in protection against common security issues:

```typescript
import { escapeHtml, stripTags } from 'strio'

escapeHtml('<script>alert("xss")</script>')
// "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"

stripTags('<p>Hello <strong>world</strong></p>')
// "Hello world"
```

## Use Cases

strio is perfect for:

- **Web applications** - form validation, text formatting, URL handling
- **Backend services** - data processing, API responses, logging
- **CLI tools** - text manipulation, output formatting
- **Content management** - text processing, slug generation
- **Data transformation** - cleaning, normalizing, formatting

## What's Included?

strio includes functions for:

- **Manipulation** - capitalize, reverse, truncate, trim, insert
- **Case conversion** - camelCase, PascalCase, kebab-case, snake_case
- **Validation** - isEmpty, isAlpha, isNumeric, isEmail
- **Searching** - contains, count, between
- **Formatting** - humanize, slugify, ordinalize, pluralize
- **Security** - escapeHtml, stripTags
- **Utilities** - words, join, template, random, similarity
- **And more!**

## Next Steps

- [Getting Started](/guide/getting-started) - Install and start using strio
- [API Reference](/api/overview) - Explore all available functions
- [Examples](/guide/string-manipulation) - See real-world use cases

## Community

- [GitHub](https://github.com/magic-b/strio) - Report issues, contribute
- [npm](https://www.npmjs.com/package/strio) - View package details

