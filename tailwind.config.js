/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Open Sans"', "ui-sans-serif", "system-ui"],
      display: ['"Glacial Indifference"', "ui-sans-serif", "system-ui"],
    },
  },
  plugins: ["gatsby-plugin-postcss", require("flowbite/plugin")],
};
