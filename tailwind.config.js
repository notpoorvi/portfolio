/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        atkinson: ['"Atkinson Hyperlegible Next"', 'sans-serif'],
      },
      screens: {
        "sm": "500px",
        "mid": "610px"
      },
      colors: {
        'brand-purple-light': '#bcc4db',
        'brand-purple': '#575878',
        'brand-yellow': '#8f8c60',
      },

    },
  },
  plugins: [],
}

