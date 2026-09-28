/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#06201e',
          800: '#0b3834', // Inceptos dark green
          700: '#114a45',
          600: '#185d57',
          500: '#23736c',
        },
        sand: {
          100: '#FAF8F5',
          200: '#F4EFEA',
          300: '#EBE5DC', // Inceptos beige/tan
          400: '#DED6C9',
          500: '#CFC5B4',
        },
        terracotta: {
          400: '#d9927d',
          500: '#C2856E', // Inceptos accent coral/terracotta
          600: '#b0725b',
          700: '#9b5e48',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
