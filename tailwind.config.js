/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0098ff",
          "secondary": "#505000",
          "accent": "#007300",
          "neutral": "#1d170e",
          "base-100": "#fdfff9",
          "info": "#00d4ec",
          "success": "#00ad85",
          "warning": "#cb0000",
          "error": "#ca003e",
        },
      }
    ],
  },
}

