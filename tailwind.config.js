/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "375px",
      sm: "400px",
      md: "768px",
      xmd: "1024px",
      lg: "1200px",
      xxl: "1500px"
    },
    colors: {
      black: "#0D0D0D",
      lowWhite: "#B7AA97",
      orange: "#EC5938",
      white: "#ffffff"
    },
    extend: {},
  },
  plugins: [],
}

