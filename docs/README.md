# strio Documentation

This directory contains the VitePress documentation for strio.

## Development

```bash
# Start dev server
npm run docs:dev

# Build documentation
npm run docs:build

# Preview built docs
npm run docs:preview
```

## Structure

```
docs/
├── .vitepress/           # VitePress configuration
│   ├── config.ts         # Main config
│   ├── locales/          # Locale configurations
│   │   ├── en.ts         # English config
│   │   └── ru.ts         # Russian config
│   └── theme/            # Custom theme
│       ├── index.ts      # Theme entry
│       └── custom.css    # Custom styles
├── public/               # Static assets
│   └── logo.svg          # Logo
├── en/                   # English docs (root)
│   ├── guide/            # Guide pages
│   └── api/              # API reference
└── ru/                   # Russian docs
    ├── guide/            # Guide pages (RU)
    └── api/              # API reference (RU)
```

## Adding New Pages

1. Create markdown file in appropriate directory
2. Add entry to sidebar in `locales/[lang].ts`
3. Test locally with `npm run docs:dev`

## Adding New Languages

1. Create new locale config in `.vitepress/locales/[lang].ts`
2. Import and add to `config.ts`:
   ```ts
   import { [lang] } from './locales/[lang]'
   
   export default defineConfig({
     locales: {
       // ... existing
       [lang]: {
         label: 'Language Name',
         lang: '[lang]-[REGION]',
         ...[lang]
       }
     }
   })
   ```
3. Create directory structure: `docs/[lang]/guide/` and `docs/[lang]/api/`
4. Translate content

## Deployment

The documentation can be deployed to:
- **GitHub Pages** - via GitHub Actions
- **Vercel** - auto-deploy from repository
- **Netlify** - drag & drop or git integration
- **Custom server** - build and serve `docs/.vitepress/dist`

### Example GitHub Pages Workflow

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## Contributing

When contributing to documentation:
1. Update both English and Russian versions
2. Follow existing formatting and style
3. Test locally before submitting PR
4. Check for broken links
5. Ensure code examples work

## Style Guide

- Use clear, concise language
- Include code examples for all functions
- Show real-world use cases
- Keep examples practical and relevant
- Use proper TypeScript types in examples
- Add comments to complex examples


This directory contains the VitePress documentation for strio.

## Development

```bash
# Start dev server
npm run docs:dev

# Build documentation
npm run docs:build

# Preview built docs
npm run docs:preview
```

## Structure

```
docs/
├── .vitepress/           # VitePress configuration
│   ├── config.ts         # Main config
│   ├── locales/          # Locale configurations
│   │   ├── en.ts         # English config
│   │   └── ru.ts         # Russian config
│   └── theme/            # Custom theme
│       ├── index.ts      # Theme entry
│       └── custom.css    # Custom styles
├── public/               # Static assets
│   └── logo.svg          # Logo
├── en/                   # English docs (root)
│   ├── guide/            # Guide pages
│   └── api/              # API reference
└── ru/                   # Russian docs
    ├── guide/            # Guide pages (RU)
    └── api/              # API reference (RU)
```

## Adding New Pages

1. Create markdown file in appropriate directory
2. Add entry to sidebar in `locales/[lang].ts`
3. Test locally with `npm run docs:dev`

## Adding New Languages

1. Create new locale config in `.vitepress/locales/[lang].ts`
2. Import and add to `config.ts`:
   ```ts
   import { [lang] } from './locales/[lang]'
   
   export default defineConfig({
     locales: {
       // ... existing
       [lang]: {
         label: 'Language Name',
         lang: '[lang]-[REGION]',
         ...[lang]
       }
     }
   })
   ```
3. Create directory structure: `docs/[lang]/guide/` and `docs/[lang]/api/`
4. Translate content

## Deployment

The documentation can be deployed to:
- **GitHub Pages** - via GitHub Actions
- **Vercel** - auto-deploy from repository
- **Netlify** - drag & drop or git integration
- **Custom server** - build and serve `docs/.vitepress/dist`

### Example GitHub Pages Workflow

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## Contributing

When contributing to documentation:
1. Update both English and Russian versions
2. Follow existing formatting and style
3. Test locally before submitting PR
4. Check for broken links
5. Ensure code examples work

## Style Guide

- Use clear, concise language
- Include code examples for all functions
- Show real-world use cases
- Keep examples practical and relevant
- Use proper TypeScript types in examples
- Add comments to complex examples


This directory contains the VitePress documentation for strio.

## Development

```bash
# Start dev server
npm run docs:dev

# Build documentation
npm run docs:build

# Preview built docs
npm run docs:preview
```

## Structure

```
docs/
├── .vitepress/           # VitePress configuration
│   ├── config.ts         # Main config
│   ├── locales/          # Locale configurations
│   │   ├── en.ts         # English config
│   │   └── ru.ts         # Russian config
│   └── theme/            # Custom theme
│       ├── index.ts      # Theme entry
│       └── custom.css    # Custom styles
├── public/               # Static assets
│   └── logo.svg          # Logo
├── en/                   # English docs (root)
│   ├── guide/            # Guide pages
│   └── api/              # API reference
└── ru/                   # Russian docs
    ├── guide/            # Guide pages (RU)
    └── api/              # API reference (RU)
```

## Adding New Pages

1. Create markdown file in appropriate directory
2. Add entry to sidebar in `locales/[lang].ts`
3. Test locally with `npm run docs:dev`

## Adding New Languages

1. Create new locale config in `.vitepress/locales/[lang].ts`
2. Import and add to `config.ts`:
   ```ts
   import { [lang] } from './locales/[lang]'
   
   export default defineConfig({
     locales: {
       // ... existing
       [lang]: {
         label: 'Language Name',
         lang: '[lang]-[REGION]',
         ...[lang]
       }
     }
   })
   ```
3. Create directory structure: `docs/[lang]/guide/` and `docs/[lang]/api/`
4. Translate content

## Deployment

The documentation can be deployed to:
- **GitHub Pages** - via GitHub Actions
- **Vercel** - auto-deploy from repository
- **Netlify** - drag & drop or git integration
- **Custom server** - build and serve `docs/.vitepress/dist`

### Example GitHub Pages Workflow

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## Contributing

When contributing to documentation:
1. Update both English and Russian versions
2. Follow existing formatting and style
3. Test locally before submitting PR
4. Check for broken links
5. Ensure code examples work

## Style Guide

- Use clear, concise language
- Include code examples for all functions
- Show real-world use cases
- Keep examples practical and relevant
- Use proper TypeScript types in examples
- Add comments to complex examples

