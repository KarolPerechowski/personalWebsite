/** @type {import('tailwindcss').Config} */
module.exports = {
  root: "./",
  build: {
    outDir: "dist",
  },
  publicDir: "public",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "react-blue": "#61DBFB",
        "theme-background": "#0a2647",
        "theme-blue-3": "#144272",
        "theme-blue-2": "#205295",
        "theme-blue-1": "#2C74B3",
        "neon-5": "#6700ff",
        "neon-4": "	#8a00ff",
        "neon-3": "	#b700ff",
        "neon-2": "	#da00ff",
        "neon-1": "#f500ff",

      },
    },
    keyframes: {
      appear: {
        "animation-duration": "3s",
      },
    },
  },
  plugins: [],
};
