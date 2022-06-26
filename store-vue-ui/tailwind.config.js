/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',
      'ms': '700px',
      'md': '768px',
      'mds': '930px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'rotate': 'rotate'
      },
      backgroundColor: {
        'dark-opacity': 'rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [],
}