/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  variants:{
    extend:{
      display:['group-focus'],
      opacity:['group-focus'],
      inset:['group-focus']
    }
  },
  plugins: [require("daisyui"),],
}

