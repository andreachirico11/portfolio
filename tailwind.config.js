/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './myForm/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#F76C58',
        'custom-green': '#16A078',
        'custom-white': '#FFFFFF',
        'custom-blue': '#2C313D',
        'custom-yellow': '#FFFA87',
        'custom-grey': '#6F778A',
      },
      borderRadius: {
        custom: '46px',
      },
      dropShadow: {
        custom: '3px 3px 0 rgb(0 0 0 / 0.25)',
      },
      fontFamily: {
        code: ['Source Code Pro', 'monospace'],
        os: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        loading: {
          '0%': {
            width: '0',
            left: '0',
            right: 'unset',
          },
          '50%': {
            width: '100%',
          },
          '100%': {
            left: 'unset',
            right: '0',
            width: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
