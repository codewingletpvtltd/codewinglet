import { StoryObj } from '@storybook/react';

import Loader from './Loader';

export default {
  component: Loader,
  tags: ['Loader'],
  parameters: {
    layout: 'centered',
  },
};

export const Basic: StoryObj<typeof Loader> = {};
