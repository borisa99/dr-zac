/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hero: '#EEF6FF',
        blue: '#408CFF',
        darkBlue: '#142457',
        textMain: '#181818',
      },
      fontSize: {
        paragraph: '0.938rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
