/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
    "./skeletons/**/*.{js,jsx}",
    "./slugs/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Fatface", "cursive"],
      },
    },
  },
  plugins: [],
};
