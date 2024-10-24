// nuxt.config.ts
export default defineNuxtConfig({
  // Configuración del servidor
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8080/api' // Cambia la URL según tu configuración
  },
  router: {
    middleware: ['auth'], // Esto asegura que el middleware 'auth' se aplique globalmente
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/assets/css/styles.css'
        },
        {
          rel: 'stylesheet',
          href: '/assets/css/button.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
          defer: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          defer: true
        }
      ]
    }
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-10-11'
})
