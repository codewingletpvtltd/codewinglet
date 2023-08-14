/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      borderRadius: {
        10: '10px',
      },
      keyframes: {
        swing: {
          '0%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(-2deg)' },
        },
      },
      animation: {
        swing: 'swing ease-in-out 0.8s infinite alternate',
      },
      minHeight: {
        h1: '68px',
        h2: '62px',
        h3: '50px',
        h4: '30px',
        h5: '30px',
        h6: '25px',
        body1: '30px',
        body2: '30px',
        subtitle1: '22px',
        subtitle2: '22px',
      },
      boxShadow: {
        lg: '1px 1px 20px 0 rgba(0,0,0,0.07)',
      },
    },
    colors: {
      white: '#FFFFFF',
      primary: '#0278BE',
      secondary: '#02457C',
      black: '#143048',
      lightBlack: '#506B82',
      gray: '#CDCCD2',
      lightGray: '#F3EFF3',
      error: '#F44336',
      aqua: '#CAD5DF',
      darkGray: '#506B82',
      white: '#FFFFFF',
      lightBlue: '#0278BE',
      lightOrange: '#FEF2EF',
    },
    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
      secondary: ['Outfit', 'sans-serif'],
    },
    fontSize: {
      h1: [
        '55px',
        {
          fontWeight: 800,
        },
      ],
      h2: [
        '50px',
        {
          fontWeight: 800,
        },
      ],
      h3: [
        '40px',
        {
          fontWeight: 900,
        },
      ],
      h4: [
        '25px',
        {
          fontWeight: 800,
        },
      ],
      h5: [
        '20px',
        {
          fontWeight: 800,
        },
      ],
      h6: [
        '16px',
        {
          fontWeight: 400,
        },
      ],
      body1: [
        '20px',
        {
          fontWeight: 500,
        },
      ],
      body2: [
        '18px',
        {
          fontWeight: 500,
        },
      ],
      subtitle1: [
        '16px',
        {
          fontWeight: 400,
        },
      ],
      subtitle2: [
        '14px',
        {
          fontWeight: 400,
        },
      ],
    },
  },
  variants: {},
  plugins: [],
};
