import { StoryObj } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
  tags: ['Button'],
};

export const BasicButton: StoryObj<typeof Button> = {
  args: {
    text: 'Contact Us',
  },
};
