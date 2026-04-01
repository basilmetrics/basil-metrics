/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6FBF0',
        forest: '#263519',
        sage:   '#82976E',
        lime:   '#89F337',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        mono: ['"Cascadia Mono"', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
