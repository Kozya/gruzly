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

  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      leadToEmail: process.env.NUXT_PUBLIC_LEAD_TO_EMAIL || 'darthkozya@gmail.com',
    },
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
