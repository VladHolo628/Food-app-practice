/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        mainHeader: "70px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
