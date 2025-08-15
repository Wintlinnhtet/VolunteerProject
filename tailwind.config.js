/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
        },
      },
  plugins: [],
}
=======
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
>>>>>>> fa432265e0e89cfec79540c973d05f743809b6de
