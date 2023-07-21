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
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      h1: [
        "50px",
        {
          lineHeight: "54px",
          fontWeight: 400,
        },
      ],
      h2: [
        "40px",
        {
          lineHeight: "44px",
          fontWeight: 400,
        },
      ],
      h3: [
        "32px",
        {
          lineHeight: "36px",
          fontWeight: 400,
        },
      ],
      h4: [
        "28px",
        {
          lineHeight: "32px",
          fontWeight: 400,
        },
      ],
      body1: [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: 400,
        },
      ],
    },
  },
  plugins: [],
};
