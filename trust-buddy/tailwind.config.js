/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito':['Nunito'],
        'nunito-sans':['Nunito Sans'],
        'poppins':['Poppins'],
        'inter':['Inter']
      },
      colors:{
        'brand2': '#EAFFF9'
      }
    },
  },
  plugins: [],
}
