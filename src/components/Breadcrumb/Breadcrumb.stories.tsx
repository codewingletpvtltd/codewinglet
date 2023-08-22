import { StoryObj } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

export default {
  component: Breadcrumb,
};

export const Basic: StoryObj<typeof Breadcrumb> = {
  args: {
    breadcrumbs: ['Home', 'Career'],
  },
};
