/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "375px",
      msm: "400px",
      sm: "650px",
      md: "768px",
      xmd: "995px",
      lg: "1200px",
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

