/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {},
      fontFamily: {
        sans: ["Raleway", "sans-serif", "system-ui"],
        serif: ['"Bree Serif"', "serif", "system-ui"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B8CEFD",
          secondary: "#2E4892",
          accent: "#265EFF",
          neutral: "#ffffff",
          "base-100": "#070D1D",
          info: "#19bcff",
          success: "#00ca00",
          warning: "#ff9e00",
          error: "#ff2b77",
        },
      },
    ],
  },
};

// Blueish-white text color: #dee1f9
// Darker blue bg: #2E4892
// Lighter blue bg: #d1e2ff
// Old base-100: #f3f4f6
