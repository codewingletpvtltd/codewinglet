import { StoryObj } from '@storybook/react';

import Checkbox from './CheckBox';

export default {
  component: Checkbox,
  tags: ['Checkbox'],
  parameters: {
    layout: 'centered',
  },
};

export const Basic: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Checkbox Label',
    checked: false,
    intermediate: false,
  },
};
