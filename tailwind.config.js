const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height:{
        '150':'35rem',
        '200':'40rem',
        '250':'45rem',
        '300':'50rem',
        '500':'0.09rem',





      },
      colors: {
        primary: {
          40: '#5E5082',
          90: '#FDE6F4',
          100: '#fef2fa',
          200: '#fde0f4',
          300: '#fbc6e9',
          400: '#f79ad9',
          500: '#ff1c6a',
          600: '#f41c6a',
          700: '#8e0057',
          800: '#5e003a',
          900: '#2f001d',
        },
        secondary: {
          100: '#F5F3FB',
          200: '#EBE7F7',
          300: '#E2DAF3',
          400: '#6b1959',
          500: '#7E6AAD',
          600: '#684bad',
          700: '#400f35',
          800: '#2b0a24',
          900: '#150512',
        },
        ternary: {
          100: '#dda9ca',
          200: '#9b768d',
          300: '#E8EAF2',
          400: '#A1A9AF',
          500: '#979797',
          600: '#9D85D8'
        },
        complementary: '#E8EAF2',
        title: '#282f39',
        subtitle: '#a1a9af',
        input: {
          text: '#282f39',
          background: '#f5f6fa',
          placeholder: '#E8EAF2',
        },
        success: {
          text: '#00810d',
          background: '#eeffed',
        },
        info: {
          text: '#025dc1',
          background: '#e5effa',
        },
        warning: {
          text: '#ab5301',
          background: '#fef7ea',
        },
        error: {
          text: '#d70903',
          background: '#fef2f1',
        },
        cardBackground: '#181818',
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
      },
      screens: {
        medium: { raw: '(min-height: 600px)' },
        tall: { raw: '(min-height: 900px)' },
        semilarge: { raw: '(min-width: 1400px)' },
      },
      spacing: {
      },
      
    },
  },
  plugins: [],
};
