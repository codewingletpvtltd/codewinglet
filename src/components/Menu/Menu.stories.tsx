import { StoryObj } from '@storybook/react';
import Menu from '.';

export default {
  component: Menu,
};

export const Default: StoryObj<typeof Menu> = {
  args: {
    open: true,
  },
};
