/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor:{
        "darkBlue":"#0a5273",
        "lightBlue":"#1374a0"
      },
  },
  },
  plugins: [],
}

