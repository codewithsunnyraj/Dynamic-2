/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        herobg: "url('./src/assets/bg1.png')",
      },
      fontFamily:{
        weather:"'Merriweather', 'serif'"
      }
    },
  },
  plugins: [],
};
