import { StoryObj } from '@storybook/react';
import HiringBoard from './HiringBoard';

export default {
  component: HiringBoard,
};

export const Default: StoryObj<typeof HiringBoard> = {
  args: {
    children: 'Click here to apply',
  },
};
