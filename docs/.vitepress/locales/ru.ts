import { defineConfig, type DefaultTheme } from 'vitepress'

export const ru = defineConfig({
  lang: 'ru-RU',
  description: 'Современные, лёгкие и интуитивные утилиты для работы со строками в JavaScript и TypeScript',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/ru/guide/': { base: '/ru/guide/', items: sidebarGuide() },
      '/ru/api/': { base: '/ru/api/', items: sidebarAPI() }
    },

    editLink: {
      pattern: 'https://github.com/magic-b/strio/edit/main/docs/:path',
      text: 'Редактировать эту страницу на GitHub'
    },

    footer: {
      message: 'Выпущено под лицензией MIT.',
      copyright: 'Авторские права © 2025-настоящее время Magic-B'
    },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    outline: {
      label: 'На этой странице'
    },

    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    langMenuLabel: 'Изменить язык',
    returnToTopLabel: 'Вернуться к началу',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Руководство',
      link: '/ru/guide/introduction',
      activeMatch: '/ru/guide/'
    },
    {
      text: 'Справочник API',
      link: '/ru/api/overview',
      activeMatch: '/ru/api/'
    },
    {
      text: 'v1.0.0',
      items: [
        {
          text: 'История изменений',
          link: 'https://github.com/magic-b/strio/blob/main/CHANGELOG.md'
        },
        {
          text: 'Участие в разработке',
          link: 'https://github.com/magic-b/strio/blob/main/CONTRIBUTING.md'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Введение',
      collapsed: false,
      items: [
        { text: 'Что такое strio?', link: 'introduction' },
        { text: 'Начало работы', link: 'getting-started' },
        { text: 'Почему strio?', link: 'why-strio' }
      ]
    },
    {
      text: 'Основные концепции',
      collapsed: false,
      items: [
        { text: 'Манипуляции со строками', link: 'string-manipulation' },
        { text: 'Валидация строк', link: 'string-validation' },
        { text: 'Форматирование строк', link: 'string-formatting' }
      ]
    }
  ]
}

function sidebarAPI(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Справочник API',
      items: [
        { text: 'Обзор', link: 'overview' }
      ]
    },
    {
      text: 'Манипуляции',
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
      text: 'Преобразование регистра',
      collapsed: false,
      items: [
        { text: 'camelize', link: 'camelize' },
        { text: 'pascalize', link: 'pascalize' },
        { text: 'dasherize', link: 'dasherize' },
        { text: 'underscore', link: 'underscore' }
      ]
    },
    {
      text: 'Валидация',
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
      text: 'Поиск',
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
      text: 'Форматирование',
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
      text: 'Утилиты',
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
      text: 'Отступы и выравнивание',
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
      text: 'Безопасность',
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
      text: 'Обеспечение',
      collapsed: false,
      items: [
        { text: 'ensureLeft', link: 'ensureLeft' },
        { text: 'ensureRight', link: 'ensureRight' }
      ]
    }
  ]
}

