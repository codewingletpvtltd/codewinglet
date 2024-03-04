import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  colorPrimary: '#141414',
  colorSecondary: '#141414',

  brandTitle: 'CodeWinglet',
  brandUrl: 'https://www.codewinglet.com',
  brandImage: 'https://codewinglet.com/assets/icons/LogoBlack.svg',
});

addons.setConfig({
  theme,
});
