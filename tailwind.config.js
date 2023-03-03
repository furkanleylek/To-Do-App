/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'modal': '1px 1px 5px 1px rgba(0.1, 0.2, 0.3, 0.3)',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "navBlue": "#3498db",
      'white': '#ffffff',
      'grey': '#B0B4BB',
      'red': '#FD2727',
      'black': '#111111',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    }
  },
  plugins: [],
}
