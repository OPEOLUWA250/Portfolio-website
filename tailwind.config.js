/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A1A2F",
        accent: "#24D0C6",
        light: "#FFFFFF",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
