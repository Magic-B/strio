import { defineConfig } from 'vitepress'
import { en } from './locales/en'
import { ru } from './locales/ru'

export default defineConfig({
  title: 'strio',
  description: 'Modern string utilities for JavaScript and TypeScript',
  base: '/strio/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:site_name', content: 'strio' }],
    ['meta', { property: 'og:image', content: 'https://strio-docs.com/og-image.png' }],
  ],

  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/magic-b/strio' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/strio' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Нет результатов для',
                resetButtonTitle: 'Сбросить поиск',
                footer: {
                  selectText: 'выбрать',
                  navigateText: 'перейти',
                  closeText: 'закрыть'
                }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      ...en
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      ...ru
    }
  }
})

