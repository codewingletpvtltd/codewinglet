import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      h1: ['55px', { fontWeight: 500 }],
      h2: ['40px', { fontWeight: 500 }],
      h3: ['38px', { fontWeight: 500 }],
      h4: ['30px', { fontWeight: 600 }],
      h5: ['26px', { fontWeight: 600 }],
      h6: ['24px', { fontWeight: 500 }],
      Subtitle1: ['22px', { fontWeight: 500, lineHeight: '35px' }],
      Subtitle2: ['20px', { fontWeight: 500 }],
      paragraph1: ['18px', { fontWeight: 600 }],
      paragraph2: ['16px', { fontWeight: 500 }],
      tag: ['14px', { fontWeight: 600 }],
    },
    colors: {
      primary: '#141414',
      secondary: '#606060',
      success: '#26AD5C',
      error: '#FF4343',
      warning: '#FFBF1A',
      black: '#000000',
      white: '#FFFFFF',
      bg: '#F5F5F5',
      headerBoxBorder: '#DADADA',
      placeholderText: '#979797',
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
