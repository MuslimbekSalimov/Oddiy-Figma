/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto', 'san-serif'],
        philosopher:["Philosopher"]
      }
    },
  },
  plugins: [],
}