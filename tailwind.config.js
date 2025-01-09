/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "gris2": "#8B8B8B",
      }
    },
  },
  daisyui: {

    themes: [
      {

        mytheme: {

          "primary": "#590004",

          "secondary": "#FCA311",

          "accent": "#255F85",

          "neutral": "#222220",

          "base-100": "#fcfcfc",

          "info": "#255F85",

          "success": "#2D4739",

          "warning": "#FCA311",

          "error": "#590004",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
