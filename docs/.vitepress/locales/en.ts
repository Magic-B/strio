import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Modern, lightweight & intuitive string utilities for JavaScript and TypeScript',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/api/': { base: '/api/', items: sidebarAPI() }
    },

    editLink: {
      pattern: 'https://github.com/magic-b/strio/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Magic-B'
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    outline: {
      label: 'On this page'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    langMenuLabel: 'Change language',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/introduction',
      activeMatch: '/guide/'
    },
    {
      text: 'API Reference',
      link: '/api/overview',
      activeMatch: '/api/'
    },
    {
      text: 'v1.0.0',
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/magic-b/strio/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/magic-b/strio/blob/main/CONTRIBUTING.md'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is strio?', link: 'introduction' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Why strio?', link: 'why-strio' }
      ]
    },
    {
      text: 'Core Concepts',
      collapsed: false,
      items: [
        { text: 'String Manipulation', link: 'string-manipulation' },
        { text: 'String Validation', link: 'string-validation' },
        { text: 'String Formatting', link: 'string-formatting' }
      ]
    }
  ]
}

function sidebarAPI(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'API Reference',
      items: [
        { text: 'Overview', link: 'overview' }
      ]
    },
    {
      text: 'Manipulation',
      collapsed: false,
      items: [
        { text: 'capitalize', link: 'capitalize' },
        { text: 'capitalizeWords', link: 'capitalizeWords' },
        { text: 'reverse', link: 'reverse' },
        { text: 'truncate', link: 'truncate' },
        { text: 'truncateWords', link: 'truncateWords' },
        { text: 'trim', link: 'trim' },
        { text: 'insert', link: 'insert' },
        { text: 'mask', link: 'mask' }
      ]
    },
    {
      text: 'Case Conversion',
      collapsed: false,
      items: [
        { text: 'camelize', link: 'camelize' },
        { text: 'pascalize', link: 'pascalize' },
        { text: 'dasherize', link: 'dasherize' },
        { text: 'underscore', link: 'underscore' }
      ]
    },
    {
      text: 'Validation',
      collapsed: false,
      items: [
        { text: 'isEmpty', link: 'isEmpty' },
        { text: 'isBlank', link: 'isBlank' },
        { text: 'isString', link: 'isString' },
        { text: 'isAlpha', link: 'isAlpha' },
        { text: 'isNumeric', link: 'isNumeric' },
        { text: 'isAlphaNumeric', link: 'isAlphaNumeric' },
        { text: 'isUpperCase', link: 'isUpperCase' },
        { text: 'isLowerCase', link: 'isLowerCase' }
      ]
    },
    {
      text: 'Searching',
      collapsed: false,
      items: [
        { text: 'contains', link: 'contains' },
        { text: 'containsAll', link: 'containsAll' },
        { text: 'containsAny', link: 'containsAny' },
        { text: 'count', link: 'count' },
        { text: 'between', link: 'between' },
        { text: 'betweenAll', link: 'betweenAll' }
      ]
    },
    {
      text: 'Formatting',
      collapsed: false,
      items: [
        { text: 'humanize', link: 'humanize' },
        { text: 'titleCase', link: 'titleCase' },
        { text: 'slugify', link: 'slugify' },
        { text: 'ordinalize', link: 'ordinalize' },
        { text: 'pluralize', link: 'pluralize' }
      ]
    },
    {
      text: 'Utilities',
      collapsed: false,
      items: [
        { text: 'words', link: 'words' },
        { text: 'wordCount', link: 'wordCount' },
        { text: 'join', link: 'join' },
        { text: 'template', link: 'template' },
        { text: 'random', link: 'random' },
        { text: 'randomAlpha', link: 'randomAlpha' },
        { text: 'randomNumeric', link: 'randomNumeric' },
        { text: 'randomAlphanumeric', link: 'randomAlphanumeric' },
        { text: 'similarity', link: 'similarity' },
        { text: 'transliterate', link: 'transliterate' }
      ]
    },
    {
      text: 'Padding & Indentation',
      collapsed: false,
      items: [
        { text: 'padLeft', link: 'padLeft' },
        { text: 'padRight', link: 'padRight' },
        { text: 'padCenter', link: 'padCenter' },
        { text: 'indent', link: 'indent' },
        { text: 'dedent', link: 'dedent' }
      ]
    },
    {
      text: 'Security',
      collapsed: false,
      items: [
        { text: 'escapeHtml', link: 'escapeHtml' },
        { text: 'unescapeHtml', link: 'unescapeHtml' },
        { text: 'escapeRegExp', link: 'escapeRegExp' },
        { text: 'stripTags', link: 'stripTags' },
        { text: 'collapseWhitespace', link: 'collapseWhitespace' },
        { text: 'stripPrefix', link: 'stripPrefix' },
        { text: 'stripSuffix', link: 'stripSuffix' }
      ]
    },
    {
      text: 'Ensuring',
      collapsed: false,
      items: [
        { text: 'ensureLeft', link: 'ensureLeft' },
        { text: 'ensureRight', link: 'ensureRight' }
      ]
    }
  ]
}

