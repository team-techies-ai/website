/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        wide: '.025em',
      },
      wordSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
      },
    },
  },
  theme: {
    extend: {
      animation: {
        shine: "shine 2s infinite",
      },
            backdropBlur: {
              sm: '4px',
              DEFAULT: '8px',
              md: '12px',
            },
      keyframes: {
        shine: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
      backdropBlur: ['responsive'],
      backdropBrightness: ['responsive'],
    },
  },
  plugins: [],
};
