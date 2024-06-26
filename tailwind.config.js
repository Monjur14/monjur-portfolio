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
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
        shimmer: "shimmer 8s infinite"
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
}

