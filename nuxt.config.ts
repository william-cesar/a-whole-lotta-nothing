// https://nuxt.com/docs/api/configuration/nuxt-config
import { PT_BR } from './languages/pt-BR';
import { EN_US } from './languages/en-US';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  css: ['@/assets/styles/main.scss'],
    vite: {
      css: {
        preprocessorOptions: {
          sass: { additionalData: '@import "@/assets/styles/main.scss"' },
        },
      },
    },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'pt',
        name: 'Português'
      },
    ],
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: EN_US,
        pt: PT_BR
      }
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
  }
})
