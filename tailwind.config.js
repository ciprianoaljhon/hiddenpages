/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color": "var(--bg-clr)",
        "color-2": "var(--bg-clr-2)",
        "main-clr": "var(--main-clr)",
        "main-clr-opacity": "var(--main-clr-opacity)",
        "accent": "var(--accent-clr)",
        "neutral": "var(--neutral)",
        "neutral-1": "var(--neutral-1)",
        "neutral-2": "var(--neutral-2)",
        "neutral-3": "var(--neutral-3)",
        "primary": "var(--txt-primary)",
        "secondary": "var(--txt-secondary)",
        "tertiary": "var(--txt-tertiary)"
      },
      theme: {
        screens: {
          '2xl': { 'max': '1535px' },

          'xl': { 'max': '1279px' },
          'lg': { 'max': '1023px' },

          'md': { 'max': '767px' },

          'sm': { 'max': '639px' },
        }
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '&>*');
    }
  ],
}