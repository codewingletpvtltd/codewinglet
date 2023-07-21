/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xl: "1920px",
      lg: "1440px",
      md: "1024px",
      sm: "768px",
      xs: "375px",
    },
    colors: {
      primary: "#0278BE",
      secondary: "#02457C",
      black: "#143048",
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
      primary: ["BespokeSans-Variable", "sans-serif"],
      secondary: ["CabinetGrotesk-Variable", "sans-serif"],
    },
    fontSize: {
      h1: [
        "32px",
        {
          lineHeight: "34px",
        },
      ],
      h2: [
        "28px",
        {
          lineHeight: "32px",
        },
      ],
      h3: [
        "20px",
        {
          lineHeight: "24px",
        },
      ],
      h4: [
        "18px",
        {
          lineHeight: "24px",
        },
      ],
    },
  },
  plugins: [],
};
