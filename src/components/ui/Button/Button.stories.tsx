// components/Button.stories.tsx
import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  // title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['Button', 'autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'outline',
        'blackOutline',
        'secondary',
        'ghost',
        'link',
        'primary',
        'sec',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'icon', 'small', 'medium', 'large'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    startIcon: {
      control: { type: 'text' },
      description: 'Icon to display at the start of the button',
    },
    endIcon: {
      control: { type: 'text' },
      description: 'Icon to display at the end of the button',
    },
    children: {
      control: { type: 'text' },
      description: 'Button text or other children',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default button
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

// Loading button
export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
};

// Button with start icon
export const WithStartIcon: Story = {
  args: {
    children: 'Start Icon',
    startIcon: <span>🚀</span>, // Example icon
  },
};

// Button with end icon
export const WithEndIcon: Story = {
  args: {
    children: 'End Icon',
    endIcon: <span>🔍</span>, // Example icon
  },
};

// Large button with outline
export const LargeOutline: Story = {
  args: {
    size: 'default',
    variant: 'outline',
    children: 'Large Outline Button',
  },
};

// Button with both start and end icons
export const WithIcons: Story = {
  args: {
    children: 'Button with Icons',
    startIcon: <span>🌟</span>, // Example start icon
    endIcon: <span>✅</span>, // Example end icon
  },
};

// Button with only icon
export const OnlyIcons: Story = {
  args: {
    endIcon: <span>🌟</span>,
    isIconOnly: true,
  },
};
