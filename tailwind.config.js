/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppin: 'Poppins,san-serif',
        dmsans: 'Dm Sans'
      },
      backgroundImage: {
        banner: "url('/images/banner1.jpg')"
      },
    },
  },
  plugins: [],
}