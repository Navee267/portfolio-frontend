/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily : {
        display : "Poppins",
        body : "Cinzel"
      },
      screens: {
        xs: { max: '639px' },
        sm: '640px',
        md: '768px',
        'md-lg': { min: '768px', max: '1023px' },
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

