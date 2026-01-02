/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a1a2f",
        accent: "#24d0c6",
      },
    },
  },
  plugins: [],
};
