import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['Button', 'autodocs'],
  argTypes: {
    children: {},
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'outline',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary Disabled',
    variant: 'outline',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'outline',
    size: 'sm',
  },
};
