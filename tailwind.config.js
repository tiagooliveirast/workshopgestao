/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0B0B0B',
        'dark-secondary': '#111111',
        'dark-card': '#1A1A1A',
        gold: '#D4AF37',
        'gold-light': '#E5C45A',
        'gold-dark': '#B8962F',
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
