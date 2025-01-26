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
    },
  },
  plugins: [],
};
