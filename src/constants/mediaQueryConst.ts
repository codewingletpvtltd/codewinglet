const { theme } = require('../../tailwind.config');

export const xs = `(max-width: ${theme.screens.xs})`; //Effects will be applied when the viewport width is 375px or less.
export const sm = `(min-width: ${theme.screens.sm}) and (max-width: ${theme.screens.md})`; // 768px to 1024px
export const md = `(min-width: ${theme.screens.md}) and (max-width: ${theme.screens.lg})`; //1024px to 1440px
export const lg = `(min-width: ${theme.screens.lg}) and (max-width: ${theme.screens.xl})`; //1440px to 1920px
export const xl = `(min-width: ${theme.screens.xl})`; //Effects will be applied when the viewport width is 1920px or More
