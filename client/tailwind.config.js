/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "bumblebee",
      {
        darkBee: {
          "primary": "#E0A82E",
          "secondary": "#F9D72F",
          "accent": "#6b7280",
          "neutral": "#d1d5db",
          "base-100": "#374151",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#fca5a5",
        }
      }
    ],
  },
}
