/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "ui-system"],
      ssp: ["Source Sans Pro", "ui-sans-serif"],
    },
    extend: {
      colors: {
        green: "#2BA386",
      },
    },
  },
  plugins: [],
};
