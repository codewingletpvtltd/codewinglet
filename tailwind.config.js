/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      borderRadius: {
        10: '10px',
      },
      keyframes: {
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
        swing: {
          from: { transform: 'rotate(3deg)' },
          to: { transform: 'rotate(-3deg)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        odd: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        enterFromTop: {
          from: {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        enterFromRight: {
          from: {
            opacity: 0,
            right: '-150px',
          },
          to: {
            opacity: 1,
            right: '30px',
          },
        },
        exitToRight: {
          from: {
            opacity: 1,
            right: '30px',
          },
          to: {
            opacity: 0,
            right: '-150px',
          },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        swing: 'swing ease-in-out 0.8s infinite alternate',
        spin: 'spin 4s infinite linear',
        enterFromTop: 'enterFromTop linear 0.2s',
        enterFromRight: 'enterFromRight linear 0.2s',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
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
        tabShadow: '0px -1px 0px inset #0278BE',
        aboutUsCardShadow: '1px 1px 15px 0px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'curve-pattern': 'url("/assets/reactJS.svg")',
      },
      textShadow: {
        sm: '2px 2px 0 #506B82, -1px -1px 0 #506B82,1px -1px 0 #506B82,-1px 1px 0 #506B82,1px 1px 0 #506B82',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',
      },
      colors: {
        white: '#FFFFFF',
        paleWhite: '#F8FCFF',
        primary: '#0278BE',
        secondary: '#02457C',
        black: '#141414',
        lightBlack: '#506B82',
        gray: '#CDCCD2',
        lightGray: '#F3EFF3',
        error: '#F44336',
        aqua: '#CAD5DF',
        lightOrange: '#FEF2EF',
        culturedWhite: '#F4F5F9',
        lightGreen: '#ECF8F0',
        aliceBlue: '#F8FCFF',
        sky: '#ABE2FF',
        lightBlue: '#F4FAFF',
        darkBlue: '#141F6A',
        successBg: 'rgb(237, 247, 237)',
        infoBg: 'rgb(229, 246, 253)',
        warnBg: 'rgb(255, 244, 229)',
        popupErrorBg: 'rgb(253, 237, 237)',
        success: 'rgb(46, 125, 50)',
        info: 'rgb(2, 136, 209)',
        warn: 'rgb(237, 108, 2)',
        popupError: 'rgb(211, 47, 47)',
      },
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
      primary: ['Poppins', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif'],
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
          fontWeight: 800,
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
  plugins: [require('tailwindcss-animate')],
};
