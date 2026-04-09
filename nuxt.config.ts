export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: ['@nuxt/image'],

  future: {
    compatibilityVersion: 4,
  },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          math: 'always',
        },
      },
    },
  },

  routeRules: {
    '/': { isr: 3600 },
  },

  nitro: {
    compressPublicAssets: true,
  },

  app: {
    head: {
      title: 'SEO лендинга',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'description', content: 'Описание ваших услуг' },
      ],
    },
  },
})
