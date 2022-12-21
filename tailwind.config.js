/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#60a5fa",

          secondary: "#a6e9ea",

          accent: "#aefca9",

          neutral: "#191919",
          "base-100": "#F5F4F6",

          info: "#338DD1",

          success: "#24C273",

          warning: "#F2D073",

          error: "#E04D61",
        },
      },
      {
        dark: {
          primary: "#fc88c4",

          secondary: "#e5898b",

          accent: "#499314",

          neutral: "#FFFFFF",

          "base-100": "#364163",

          info: "#99ADEB",

          success: "#2FE472",

          warning: "#F19B32",

          error: "#EB6C5C",
        },
      },
    ],
  },
};
