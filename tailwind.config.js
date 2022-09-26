/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container :{
      center: true, 
      pading: '16px',
    },
    extend: {
      colors:{
        primary: '#14b8a6',
        secondary : '#64748b',
        dark: '#0f172a'
      },
      screens : {
        '2xl' : '1320px'
      },
    },
  },
  plugins: [],
}
