/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "tablet": "640px",
      // => @media (min-width: 640px)
      "laptop": "1025px",
      // => @media (min-width: 1024px) 

      "desktop": "1280px",
      // => @media (min-width: 1280px)

      "2xl": "1400px",
    },
    extend: {},
  },
  plugins: [],
};
