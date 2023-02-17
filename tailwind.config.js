/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        bottom : '0px 0px 3rem 0px'
      },
      colors: {
      'dark-blue': '#264653',
      'medium-blue' : '#e9c46a',
      'light-blue' : '#e9c46a',
      'other-blue':'#f4a261'
      
    },
    fontFamily:{
      'gaya' : ['Gayathri', 'Arial'],
      'raj' : ['Rajdhani','Arial']
    }
  },
  },
  plugins: [],
}

