/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hero: '#EEF6FF',
        black: '#181818',
        gray: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#454545',
          900: '#3D3D3D',
          950: '#181818',
        },
        blue: {
          100: '#EEF6FF',
          200: '#BCDCFF',
          300: '#8EC7FF',
          400: '#59A7FF',
          500: '#408CFF',
          600: '#1B63F5',
          700: '#144EE1',
          800: '#173FB6',
          900: '#19398F',
          950: '#142457',
        },
      },
      fontSize: {
        xxs: ['0.75rem', '1.3em'],
        xs: ['0.81rem', '1.25em'],
        sm: ['0.875', '1.4em'],
        md: ['0.93rem', '1.5em'],
        lg: ['1rem', '1.5em'],
        xl: ['1.125rem', '1.5em'],
        '2xl': ['1.25rem', '0.9em'],
        '3xl': ['1.5rem', '0.9em'],
        '4xl': ['2rem', '0.9em'],
        '5xl': ['2.25rem', '0.9em'],
        '6xl': ['3rem', '0.9em'],
        '7xl': ['3.75rem', '0.9em'],
        '8xl': ['4.5rem', '0.9em'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
