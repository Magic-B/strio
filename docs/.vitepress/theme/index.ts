import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Add custom slots if needed
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register custom components or plugins
  }
} satisfies Theme

