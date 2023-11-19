/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "EB Garamond",
          "Times New Roman",
          "serif",
          "Arial",
          "sans-serif",
        ],
      },
      screens: {
        print: { raw: "print" },
        xs: "425px",
        md: [
          { min: "925px" },
          { raw: "print" }, // Always hit md in print mode
        ],
        lg: "1096px",
      },
    },
  },
};
