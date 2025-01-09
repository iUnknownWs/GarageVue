// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      script: [{ src: "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" }, { src: "https://cdn.lightwidget.com/widgets/lightwidget.js" }],
    }
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    'vue3-carousel-nuxt',
    "@nuxt/icon",
  ],

  tailwindcss: {
    editorSupport: true,
    viewer: true,
    configPath: "tailwind.config",
  },

  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700],
      Orbitron: [400, 500, 600, 700, 800, 900],
    },
  },

  compatibilityDate: "2025-01-02",
});