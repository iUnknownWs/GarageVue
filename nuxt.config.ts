// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    'vue3-carousel-nuxt'
  ],
  tailwindcss: {
    editorSupport: true,
    viewer: true,
    configPath: "tailwind.config",
  },
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700],
      Orbitron: 900,
    },
  },
});