<p align="center">
  <img src="./docs/public/logo-dark.svg" alt="strio logo" width="320">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/strio">
    <img src="https://img.shields.io/npm/v/strio.svg?color=%233c8772&label=npm" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/strio">
    <img src="https://img.shields.io/npm/dm/strio.svg?color=%233c8772" alt="npm downloads">
  </a>
  <a href="https://bundlephobia.com/result?p=strio">
    <img src="https://img.shields.io/bundlephobia/minzip/strio.svg?label=bundle%20size" alt="bundle size">
  </a>
  <a href="https://github.com/magic-b/strio/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/magic-b/strio/deploy-docs.yml?label=CI" alt="CI status">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/npm/l/strio.svg" alt="license: MIT">
  </a>
</p>

### strio — modern string utilities for JS/TS

**strio** is a modern, lightweight and predictable utility library for working with strings in JavaScript and TypeScript.  
It focuses on **minimalism**, **clean API** and **performance**: only practical functions, no unnecessary magic.

- **Minimal**: only functions that solve real everyday problems
- **Modern stack**: ESM, CommonJS and full TypeScript types out of the box
- **Clean API**: short names, predictable behavior

---

### Install

```bash
npm install strio
# или
pnpm add strio
# или
yarn add strio
```

---

### Documentation

Full documentation (EN + RU), examples and API reference:

- **Docs website**: [strio docs](https://magic-b.github.io/strio/)
- **Docs source**: see the `docs/` directory

Useful GitHub links:

- **Issues**: [GitHub Issues](https://github.com/magic-b/strio/issues)
- **Contributing guide**: [`CONTRIBUTING.md`](./.github/CONTRIBUTING.md)
- **Pull request template**: [`PULL_REQUEST_TEMPLATE.md`](./.github/PULL_REQUEST_TEMPLATE.md)

---

### Usage

**ESM (Node.js ≥ 16 / bundlers / TypeScript)**:

```ts
import { join, template, slugify } from 'strio';

const title = join('Hello', { separator: ' — ' }, 'world'); // "Hello — world"
```

**CommonJS (require)**:

```js
const { join, template, slugify } = require('strio');

const url = slugify('Привет, мир!'); // "privet-mir"
```

**TypeScript**

`strio` ships with full TypeScript typings, no extra config required:

```ts
import { join, template } from 'strio';

const result = join('foo', 'bar'); // result: string
```

You can import only what you need (named exports only):

```ts
import { slugify } from 'strio';
```

---

### Useful examples

#### `join` — smart string joining

```ts
import { join } from 'strio';

join('John', 'Doe'); 
// "John, Doe"

join('John', null, '', 'Doe'); 
// "John, Doe" (null and empty strings are filtered out)

join('Section', { separator: ' / ' }, 'Subsection', 'Page');
// "Section / Subsection / Page"
```

#### `template` — conditional templates via []‑blocks

```ts
import { template } from 'strio';

const name = 'John';
const age: number | null = null;

template`Hello, ${name}[ (${age} y.o.)]!`;
// age === null → "Hello, John!"
// age === 30  → "Hello, John (30 y.o.)!"

const dir = 'docs';
const file: string | null = null;

template`/${dir}[/${file}]`;
// file === null      => "/docs"
// file === "readme"  => "/docs/readme"
```

#### `slugify` — readable URL slugs

```ts
import { slugify } from 'strio';

slugify('Hello World!');        // "hello-world"
slugify('Привет Мир!');        // "privet-mir"
slugify('  Multiple   Spaces'); // "multiple-spaces"
slugify('café résumé');        // "cafe-resume"

// Кастомный разделитель:
slugify('Hello World', '_');   // "hello_world"
```

You can find more examples in the docs and in the `tests/` directory.

---

### Bug reports

Please open an issue on GitHub and include:

- what you **expected** vs what you **got**
- a minimal reproducible example
- `strio` version, Node.js version and your bundler/environment

Issue templates live in `.github/ISSUE_TEMPLATE`:

- Bug reports: [bug_report.md](./.github/ISSUE_TEMPLATE/bug_report.md)
- Feature requests: [feature_request.md](./.github/ISSUE_TEMPLATE/feature_request.md)

👉 Create a new issue here: <https://github.com/magic-b/strio/issues>

---

### Contributing

Pull requests and ideas are very welcome 🙌

Before starting a bigger change:

- open an issue / draft PR to discuss the idea
- try to follow the existing style and architecture

```bash
npm install
npm test
npm run build
```

For new functions:

- add tests under `tests/`
- add or update docs under `docs/`
- document the change clearly in your PR description

See `.github/CONTRIBUTING.md` for the full contributing guide.


