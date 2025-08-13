/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // scan all files in /src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
