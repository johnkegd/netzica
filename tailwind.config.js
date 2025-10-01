/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // Only apply dark mode when .dark class is present
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}
