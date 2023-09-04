const __PRIMARY_COLOR__ = '#24272B';
const __ERROR_COLOR__ = '#E95675';
const __TEXT_COLOR_SECONDARY__ = '#FFFFFF';
const __TEXT_COLOR_PRIMARY__ = '#24272B';
const __SECONDARY_BLACK_COLOR__ = '#515151';
const __PRIMARY_YELLOW_COLOR__ = '#F0B10D';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      borderRadius: {
        extraLarge: '12rem',
      },
    },
    colors: {
      black: {
        primary: __PRIMARY_COLOR__,
        secondary: __SECONDARY_BLACK_COLOR__,
      },
      white: {
        secondary: __TEXT_COLOR_SECONDARY__,
      },
      yellow: {
        primary: __PRIMARY_YELLOW_COLOR__,
      },
    },
    textColor: {
      primary: __TEXT_COLOR_PRIMARY__,
      secondary: __TEXT_COLOR_SECONDARY__,
      danger: __ERROR_COLOR__,
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
