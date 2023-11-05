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
      },
    },
  },
};
