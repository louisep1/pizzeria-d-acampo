/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      colors: {
        'light-blue': '#82ddf0',
        'med-blue': '#5296a5',
        'dark-sand': '#f6c28b',
        'light-sand': '#fcd7ad',
        brown: '#a57548',
        'yellow-beige': '#e1c591',
        'dark-blue': '#1b3159',
        'clear-black': 'rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero/pizza-oven.jpg')",
      },
    },
    fontFamily: {
      serif: 'Roboto Slab, serif',
      sans: 'Lato, sans-serif',
    },
  },
  plugins: [],
}
