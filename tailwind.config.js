/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        open:["Open Sans"],
      },

      colors: {
        'bg-color': '#72BF44',
      },
    },
  },
  plugins: [],
}