/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)',
      },
    },
  },
  plugins: [],
}
