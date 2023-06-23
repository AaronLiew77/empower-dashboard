/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      backgroundColor: {
        'custom-color': '#E6E9F8',
        'sidenav-font-color': '#1965BF',
        'secondaryColor': '#1965BF'
      },



    },
  },
  plugins: [],
});
