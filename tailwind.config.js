/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "serif"],
        pacifico: ["Pacifico", "serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
