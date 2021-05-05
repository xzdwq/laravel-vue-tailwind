const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "./storage/framework/views/*.php",
    "./resources/**/*.blade.php",
    './resources/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or false or 'media' or 'class'
  theme: {
    // Добавление своих стилей
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        indigo: {
          400: colors.indigo['400'], //class="text-indigo-400"
          450: '#202e78' //class="text-indigo-450"
        },
      },
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
