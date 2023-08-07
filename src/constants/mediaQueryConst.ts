const { theme } = require('../../tailwind.config');

export const xs = `(max-width: ${theme.screens.xs})`; //Effects will be applied when the viewport width is 375px or less.
export const sm = `(max-width: ${theme.screens.sm})`;
export const md = `(max-width: ${theme.screens.md})`;
export const lg = `(max-width: ${theme.screens.lg})`;
export const xl = `(max-width: ${theme.screens.xl})`;
