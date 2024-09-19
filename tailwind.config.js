/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b593db",
        secondary: "#cc8eac",
        tertiary: "#fffbf3",
      },
      fontFamily: {
        "gloria-hallelujah": ["Gloria Hallelujah", "cursive"],
        saira: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
