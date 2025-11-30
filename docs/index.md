---
layout: home

hero:
  text: "Modern String Utilities"
  tagline: Power your text. Simplify your code.
  image:
    light: /logo-light.svg
    dark: /logo-dark.svg
    alt: strio
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /api/overview
    - theme: alt
      text: View on GitHub
      link: https://github.com/magic-b/strio

features:
  - icon: 🚀
    title: Lightweight & Fast
    details: Minimal footprint with maximum performance. Built for modern JavaScript environments.
  - icon: 🎯
    title: TypeScript First
    details: Written in TypeScript with full type definitions. Get excellent IntelliSense support.
  - icon: 📦
    title: Tree-Shakeable
    details: Import only what you need. Optimized for modern bundlers like Vite and Webpack.
  - icon: 🔧
    title: Rich API
    details: 50+ utility functions covering all your string manipulation needs.
  - icon: ✅
    title: Well Tested
    details: Comprehensive test suite ensuring reliability in production.
  - icon: 🌍
    title: Universal
    details: Works seamlessly in Node.js, browsers, and modern frameworks.
  - icon: 🎨
    title: Zero Dependencies
    details: No external dependencies. Just pure, efficient code.
  - icon: 📖
    title: Great Documentation
    details: Clear examples and detailed API documentation for every function.
  - icon: 🔐
    title: Security Built-in
    details: HTML escaping, XSS protection, and safe string operations out of the box.
---

## Quick Example

```typescript
import { capitalize, slugify, truncate } from 'strio'

// Capitalize text
capitalize('hello world') // "Hello world"

// Create URL-friendly slugs
slugify('Hello World! 123') // "hello-world-123"

// Truncate long text
truncate('Lorem ipsum dolor sit amet', 10) // "Lorem ipsu..."
```

## Why strio?

Modern JavaScript development requires reliable string utilities. **strio** provides a clean, intuitive API for all your text processing needs:

- 🎯 **Simple & Intuitive** - Clean function names and predictable behavior
- ⚡ **High Performance** - Optimized for speed without sacrificing readability
- 🛡️ **Type Safe** - Full TypeScript support with strict type checking
- 📦 **Tree-Shakeable** - Only bundle what you use
- 🧪 **Battle Tested** - Comprehensive test coverage

## Installation

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

## Browser Support

strio works in all modern browsers and Node.js environments:

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Node.js 16+

## License

[MIT](https://github.com/magic-b/strio/blob/main/LICENSE) © [Magic-B](https://github.com/magic-b)

