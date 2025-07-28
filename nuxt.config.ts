// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Módulos instalados
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],

  // Importar el CSS de Tailwind
  css: ['@/assets/css/app.css'],
})


