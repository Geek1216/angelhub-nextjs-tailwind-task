/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ah-black': '#262626',
        'ah-primary':'#D99D26',
        
      },
      backgroundColor:{
        'card-light-blue':'#F2F2F2'
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'] 
      }
    }
  },
  plugins: [],
}