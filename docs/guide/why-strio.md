# Why strio?

There are several string utility libraries available for JavaScript. Here's why strio might be the right choice for your project.

## Comparison with Alternatives

### vs. Lodash

**Lodash** is a comprehensive utility library that includes string functions:

```typescript
// Lodash
import _ from 'lodash'
_.capitalize('hello') // "Hello"
_.snakeCase('helloWorld') // "hello_world"

// strio
import { capitalize, underscore } from 'strio'
capitalize('hello') // "Hello"
underscore('helloWorld') // "hello_world"
```

**Why choose strio:**
- ✅ **Smaller bundle size** - strio is focused only on strings
- ✅ **Better tree-shaking** - import only what you need
- ✅ **Modern TypeScript** - built with TS from the ground up
- ✅ **Specialized** - more string-specific functions

### vs. Voca

**Voca** is a popular string manipulation library:

```typescript
// Voca
import voca from 'voca'
voca.capitalize('hello') // "Hello"
voca.slugify('Hello World') // "hello-world"

// strio
import { capitalize, slugify } from 'strio'
capitalize('hello') // "Hello"
slugify('Hello World') // "hello-world"
```

**Why choose strio:**
- ✅ **Zero dependencies** - no external packages
- ✅ **TypeScript-first** - better type inference
- ✅ **Active maintenance** - modern tooling and practices
- ✅ **Simpler API** - less overloading, more clarity

### vs. Native JavaScript

Native JavaScript provides basic string methods:

```typescript
// Native
const text = 'hello world'
text.charAt(0).toUpperCase() + text.slice(1) // "Hello world"

// strio
import { capitalize } from 'strio'
capitalize('hello world') // "Hello world"
```

**Why choose strio:**
- ✅ **Convenience** - pre-built solutions for common tasks
- ✅ **Consistency** - uniform API across all functions
- ✅ **Safety** - built-in validation and edge case handling
- ✅ **Productivity** - write less code, accomplish more

## Key Advantages

### 1. Modern Codebase

Built with modern JavaScript/TypeScript:
- ✅ ES Modules support
- ✅ TypeScript-first design
- ✅ Modern tooling (tsup, Vitest)
- ✅ Up-to-date dependencies

### 2. Developer Experience

Designed for great DX:
- ✅ Excellent IntelliSense support
- ✅ Comprehensive documentation
- ✅ Clear error messages
- ✅ Intuitive function names

### 3. Performance

Optimized for speed:
- ✅ Native methods where possible
- ✅ Minimal abstraction overhead
- ✅ No unnecessary dependencies
- ✅ Benchmarked and tested

### 4. Security

Built with security in mind:
- ✅ HTML escaping
- ✅ XSS protection
- ✅ Safe regex operations
- ✅ Input validation

### 5. Reliability

Production-ready:
- ✅ Comprehensive test coverage
- ✅ Battle-tested in real projects
- ✅ Semantic versioning
- ✅ Regular updates

## Bundle Size Comparison

strio is designed to be lightweight:

| Library | Min + Gzip | Tree-shakeable |
|---------|-----------|----------------|
| **strio** | ~3kb | ✅ Yes |
| lodash | ~25kb | ⚠️ Partial |
| voca | ~12kb | ❌ No |
| underscore.string | ~8kb | ⚠️ Partial |

*Sizes are approximate and depend on which functions you use.*

## When to Use strio

strio is perfect for:

- ✅ New projects starting fresh
- ✅ Projects that need modern TypeScript support
- ✅ Applications with strict bundle size requirements
- ✅ Teams that value clear, maintainable code
- ✅ Projects requiring string-focused utilities

## When NOT to Use strio

Consider alternatives if:

- ❌ You already use Lodash extensively (stick with it for consistency)
- ❌ You need complex internationalization (use specialized i18n libraries)
- ❌ You're working with legacy ES5 code
- ❌ You only need 1-2 simple functions (write them yourself)

## Real-World Usage

strio is used in production by:

- 🌐 Web applications
- 🖥️ CLI tools
- 🔧 Build scripts
- 📊 Data processing pipelines
- 🎨 Content management systems

## Community & Support

- **Open Source** - MIT licensed
- **Active Development** - Regular updates
- **Responsive Maintainer** - Quick issue resolution
- **Growing Community** - Increasing adoption

## Try It Out

The best way to decide is to try it yourself:

```bash
npm install strio
```

```typescript
import { capitalize, slugify, truncate, isEmail } from 'strio'

// See how it feels in your codebase
const result = capitalize('hello world')
const slug = slugify('My New Post')
const preview = truncate('Long text...', 50)
const valid = isEmail('user@example.com')
```

## Next Steps

- [Getting Started](/guide/getting-started) - Install and use strio
- [API Reference](/api/overview) - Explore all functions
- [GitHub](https://github.com/magic-b/strio) - View source code

