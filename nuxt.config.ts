import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Bungee&family=Quicksand:wght@300..700&display=swap'
        }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
 css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css'
  ],
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
