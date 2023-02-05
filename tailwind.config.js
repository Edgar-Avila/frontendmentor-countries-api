/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-els': 'hsl(209, 23%, 22%)',
        'dark-bg': 'hsl(207, 26%, 17%)',
        'dark-text': 'hsl(0, 0%, 100%)',
        'light-text': 'hsl(200, 15%, 8%)',
        'light-input': 'hsl(0, 0%, 52%)',
        'light-bg': 'hsl(0, 0%, 98%)',
        'light-els': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
