export default defineNuxtConfig({
  compatibilityDate: '2024-04-03', // У вас стоит 2025-07-15, проверьте актуальность для текущей версии Nuxt
  devtools: { enabled: false }, // На продакшене девтулзы лучше отключать

  // Если на лендинге много картинок, рекомендую добавить этот модуль
  // modules: ['@nuxt/image'],
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

  // Включаем сжатие и оптимизацию Nitro для Vercel
  nitro: {
    compressPublicAssets: true,
  },

  // Настройка мета-тегов для SEO лендинга
  app: {
    head: {
      title: 'SEO лендинга',
      meta: [
        { name: 'description', content: 'Описание ваших услуг' }
      ],
    }
  }
})
