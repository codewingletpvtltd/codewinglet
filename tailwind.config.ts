import type { Config } from 'tailwindcss';

// TODO : font should be set as per figma view, but need to find proper solution
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      h1: ['55px', { fontWeight: 500 }],
      h1Light: ['55px', { fontWeight: 500 }],
      h2: ['40px', { fontWeight: 400 }],
      h3: ['38px', { fontWeight: 500 }],
      h3bold: ['38px', { fontWeight: 600 }],
      h4: ['30px', { fontWeight: 500 }],
      h5: ['26px', { fontWeight: 500 }],
      h6: ['24px', { fontWeight: 500 }],
      subtitle1: ['22px', { fontWeight: 500, lineHeight: '35px' }],
      subtitle1Light: ['22px', { fontWeight: 300 }],
      subtitle2: ['20px', { fontWeight: 500 }],
      subtitle2Light: ['20px', { fontWeight: 300 }],
      paragraph1Bold: ['18px', { fontWeight: 600 }],
      paragraph1: ['18px', { fontWeight: 500 }],
      paragraph1Light: ['18px', { fontWeight: 400 }],
      paragraph1ExtraLight: ['18px', { fontWeight: 300 }],
      paragraph2: ['16px', { fontWeight: 500 }],
      paragraph2Light: ['16px', { fontWeight: 300, lineHeight: '26px' }],
      tagBold: ['14px', { fontWeight: 600 }],
      tag: ['14px', { fontWeight: 500 }],
      tagLight: ['14px', { fontWeight: 300 }],
      tagExtraLight: ['12px', { fontWeight: 400 }],
      smRegular: ['14px', {}],
    },

    fontFamily: {
      primary: ['var(--font-poppins)', 'sans-serif'],
      playFair: ['Playfair Display', 'serif'],
    },
    backgroundImage: {
      'dot-pattern': 'url("/assets/career/dotGrid.png")',
    },
    boxShadow: {
      custom: '0px 4px 10px 0px rgba(159, 159, 159, 0.1)',
    },
    textDecorationThickness: {
      '2': '2px', // custom thickness of 4px
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#141414',
        secondary: '#606060',
        success: '#26AD5C',
        error: '#FF4343',
        info: '#376DCF',
        warning: '#FFBF1A',
        black: '#000000',
        white: '#FFFFFF',
        bg: '#F5F5F5',
        headerBoxBorder: '#DADADA',
        placeholderText: '#979797',
        transparent: 'transparent',
        darkBlack: '#191919',
        darkBorder: '#1d1d1d',
        grayBorder: '#3b3b3b',
        lightGray: '#808080',
      },
    },
  },
  plugins: [],
} satisfies Config;
