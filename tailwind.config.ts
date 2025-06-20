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
    },
    colors: {
      blue: {
        400: '#60a5fa', // This is Tailwind’s default blue-400
      },
      purple: {
        500: '#a855f7', // This is Tailwind’s default purple-500
      },
      gray: {
        50: '#F5F5F5', // Light Gray
        100: '#DADADA', // Soft Gray
        200: '#979797', // Medium Gray
        300: '#808080', // Regular Gray
        400: '#606060', // Dark Gray
        500: '#3b3b3b', // Charcoal Gray
        600: '#1d1d1d', // Deep Gray
        700: '#191919', // Almost Black
        800: '#141414', // Blackish Gray
        900: '#000000', // Black
      },
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      success: '#26AD5C',
      error: '#FF4343',
      info: '#376DCF',
      warning: '#FFBF1A',
    },
    fontFamily: {
      primary: ['var(--font-poppins)', 'sans-serif'],
      playFair: ['Playfair Display', 'serif'],
    },
    backgroundImage: {
      dotPattern: 'url("/assets/career/dotGrid.png")',
      projectBg: 'url("/assets/CaseStudy/AboutProjectBg.png")',
      keyFeatureBg: 'url("/assets/Project/KeyFeatureBg.png")',
      ourWorkBg: 'url("/assets/OurWork/ourWorkBg.png")',
      touchText:
        'linear-gradient(90deg,rgba(168, 85, 247, 1) 0%, rgba(96, 165, 250, 1) 100%)',
      linkedin:
        'linear-gradient(90deg,rgba(29, 78, 216, 1) 0%, rgba(37, 99, 235, 1) 100%)',
      instagram:
        'linear-gradient(90deg,rgba(234, 179, 8, 1) 0%, rgba(239, 68, 68, 1) 50%, rgba(236, 72, 153, 1) 100%)',
      twitter:
        'linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(31, 41, 55, 1) 100%)',
      dribble: 'linear-gradient(to right, #ea4c89, #f7a1c4)',
      behance: 'linear-gradient(to right, #1769ff, #00cfff)',
      facebook:
        'linear-gradient(90deg,rgba(37, 99, 235, 1) 0%, rgba(59, 130, 246, 1) 100%);',
    },
    boxShadow: {
      custom: '0px 4px 10px 0px rgba(159, 159, 159, 0.1)',
    },
    keyframes: {
      rotateInfinite: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
      sliderInfinite: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
    animation: {
      rotateInfinite: 'rotateInfinite 6s linear infinite',
      sliderInfinite: 'sliderInfinite 20s linear infinite',
    },
    textDecorationThickness: {
      '2': '2px', // custom thickness of 4px
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
