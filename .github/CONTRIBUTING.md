### Contributing to strio

Thanks for your interest in contributing to **strio** 🙌  
This short guide explains how to make changes in a way that fits the project.

---

### 1. Start with an issue or idea

- For **bugs** — open an issue describing the problem and reproduction steps.
- For **new features** — open an issue or draft PR with a short proposal:
  - what problem it solves
  - why it is useful for most users

---

### 2. Local setup

```bash
git clone https://github.com/magic-b/strio.git
cd strio
npm install
```

Core commands:

```bash
npm test          # run tests
npm run build     # build the library
npm run docs:dev  # run docs locally (VitePress)
```

Before opening a PR, make sure:

- tests pass
- the build succeeds

---

### 3. Style and principles

- Code is written in **TypeScript**
- Prefer **small, focused functions**
- API should be:
  - **minimal**
  - **predictable**
  - free of hidden "magic"

If you add a new function:

- put the implementation under `src/core/`
- export it from `src/index.ts`
- add tests under `tests/`
- update or add docs under `docs/` (EN and/or RU)

---

### 4. Pull requests

When creating a PR:

- use a clear title (`feat: add slugify separator option`, `fix: handle empty strings in join`, etc.)
- describe briefly:
  - what you changed
  - whether there are breaking changes
  - whether there are new functions/options
- add short usage examples if relevant

There is a prepared PR template: `.github/PULL_REQUEST_TEMPLATE.md`.

---

### 5. Code review

- Treat review as a collaboration, not an exam 🙂
- If something is unclear — ask questions directly in PR comments
- Be ready to adjust naming, API or structure slightly

Thanks for contributing to **strio**! 💚



