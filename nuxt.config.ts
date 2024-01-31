// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  tailwindcss: {
    editorSupport: true,
    viewer: true,
    configPath: "tailwind.config",
  },
  googleFonts: {
    families: {
      Monserrat: true,
      Orbitron: 900,
    }
  }
});