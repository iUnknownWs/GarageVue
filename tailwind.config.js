/** @type {import('tailwindcss').Config} */
export default {
  content: [
    [
      'components/**/*.{vue,js,ts}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'composables/**/*.{js,ts}',
      'plugins/**/*.{js,ts}',
      'App.{js,ts,vue}',
      'app.{js,ts,vue}',
      'Error.{js,ts,vue}',
      'error.{js,ts,vue}',
      'content/**/*.md'
    ]
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#590004",

          "secondary": "#545D7A",

          "accent": "#FCA311",

          "neutral": "#ffffff",

          "base-100": "#474A50",

          "info": "#8B8B8B",

          "success": "#22c55e",

          "warning": "#fcd34d",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}