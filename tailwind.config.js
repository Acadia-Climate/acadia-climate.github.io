/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {

      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#265eff",
          "secondary": "#00c5fb",
          "accent": "#175bea",
          "neutral": "#1d170e",
          "base-100": "#ffffff",
          "info": "#00d4ec",
          "success": "#00ad85",
          "warning": "#cb0000",
          "error": "#ca003e",
        },
      }
    ],
  },
}

