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
        'brand2': '#EAFFF9',
        'delivered': '#2D941C',
        'cancelled': '#F71616',
        'pending': '#2E3192',
        'offline': '#D9D9D9',

      }
    },
  },
  plugins: [],
}
