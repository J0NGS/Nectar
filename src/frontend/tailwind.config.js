/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      'primary': '#FFB300',
      'secondary': '#975815',
      'gradient-header': 'linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(../images/header.jpg)',
    },
  },
  plugins: [],
}

