/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],

  theme: {
    extend: {},
    
      colors:{
        'primary-orange': '#F26822',
        'secondary-slate-gray': '#323536',
        'dark-gray': '#252121',
        'black': '#000',
        'white': '#fff'
    },
    fontFamily:{
        sans: ['Inter', 'sans-serif'],
        serif: ['Editorial old', 'serif'],

        'serif-italic': ['Editorial old italic', 'serif'],
        'power-regular': ['Power Grotesk', 'sans']
    }
  },
  plugins: [],
}

