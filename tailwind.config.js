/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderRadius: {
        10: '10px',
      },
    },
    screens: {
      xl: '1920px',
      lg: '1440px',
      md: '1024px',
      sm: '768px',
      xs: '375px',
    },
    colors: {
      primary: '#0278BE',
      secondary: '#02457C',
      black: '#143048',
      gray: '#CDCCD2',
      error: '#F44336',
      aqua: '#CAD5DF',
      darkGray: '#506B82',
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
      primary: ['BespokeSans-Variable', 'sans-serif'],
      secondary: ['CabinetGrotesk-Variable', 'sans-serif'],
    },
    fontSize: {
      h1: [
        '55px',
        {
          fontWeight: 800,
          lineHeight: '68px',
        },
      ],
      h2: [
        '50px',
        {
          lineHeight: '62px',
          fontWeight: 800,
        },
      ],
      h3: [
        '40px',
        {
          lineHeight: '50px',
          fontWeight: 900,
        },
      ],
      h4: [
        '25px',
        {
          lineHeight: '30px',
          fontWeight: 800,
        },
      ],
      h5: [
        '20px',
        {
          lineHeight: '30px',
          fontWeight: 800,
        },
      ],
      h6: [
        '16px',
        {
          lineHeight: '25px',
          fontWeight: 400,
        },
      ],
      body1: [
        '20px',
        {
          lineHeight: '30px',
          fontWeight: 500,
        },
      ],
      body2: [
        '18px',
        {
          lineHeight: '30px',
          fontWeight: 500,
        },
      ],
      subtitle1: [
        '16px',
        {
          lineHeight: '22px',
          fontWeight: 400,
        },
      ],
      subtitle2: '14px',
    },
  },
  variants: {},
  plugins: [],
};
