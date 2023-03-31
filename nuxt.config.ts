// https://nuxt.com/docs/api/configuration/nuxt-config
import { PT_BR } from './languages/pt-BR';
import { EN_US } from './languages/en-US';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'A Whole Lotta Nothing',
    }
  },
  modules: [
    'nuxt-icon',
    ['@nuxtjs/eslint-module', {
      lintOnStart: false,
    }],
    ['@nuxtjs/i18n', { 
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
        messages: 
        {
          en: EN_US,
          pt: PT_BR
        }
      }}
    ],

    ['@nuxtjs/color-mode', 
      { preference: 'light' }
    ],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@import "@/assets/scss/main.scss";' },
      },
    },
  },
})
