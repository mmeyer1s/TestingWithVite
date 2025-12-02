/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',
        'primary-dark': '#654321',
        secondary: '#D2691E',
        accent: '#F4A460',
        'bg': '#FFF8F0',
      },
    },
  },
  plugins: [],
}

