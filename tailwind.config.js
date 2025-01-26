/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ejs,css}"],
  theme: {
    extend: {
      colors: {
        background: "#170f1f",
        text: "#e8d4fc",
        primary: "#af97ce",
        secondary: "#4c2c7d",
        accent: "#54cdaa",
        "text-accent": "#f2e8ff",
      },
      fontFamily: {
        main: "Inter",
      },
      boxShadow: {
        "purple-haze": "0px 10px 50px 0px rgba(242,232,255,0.25)",
      },
      borderRadius: {
        "rounded-0": "0rem",
        "rounded-1": "1.1428571428571428rem",
        "rounded-2": "3.5714285714285716rem",
      },
    },
  },
  plugins: [],
};
