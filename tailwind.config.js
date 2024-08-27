/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/*.{html,js,jsx}', './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '360px',
      },
      colors: {
        'khaki-1': '#007c72',
        'yellow-1': '#F5C754',
        'gray-1': '#434343',
        'gray-2': '#9EA3BA',
        'gray-3': '#D4DBE8',
        'black-1': '#141C24',
        page: '#EDEDE3',
        'page-outer': '#dfe0df',
      },
    },
    fontFamily: {
      helvetica: ['Helvetica'],
    },
  },
  plugins: [],
};
