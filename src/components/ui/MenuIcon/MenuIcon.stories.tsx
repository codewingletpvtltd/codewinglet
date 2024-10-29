import { Meta, StoryObj } from '@storybook/react';

import MenuIcon from './MenuIcon';

const meta: Meta<typeof MenuIcon> = {
  title: 'MenuIcon',
  component: MenuIcon,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the menu icon is open or closed.',
    },
    onClick: { action: 'clicked', description: 'Click event handler' },
    className: {
      control: 'text',
      description: 'Additional custom class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuIcon>;

export const Default: Story = {
  args: {
    isOpen: true,
    className: '',
  },
};
