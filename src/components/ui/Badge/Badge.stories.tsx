import { Meta, StoryObj } from '@storybook/react';

import Badge, { BadgeProps } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    content: { control: 'text' },
    color: {
      control: 'select',
      options: ['default', 'red', 'green', 'blue', 'yellow', 'purple'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    overlap: { control: 'boolean' },
    children: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    content: '1',
    color: 'default',
    size: 'small',
    overlap: false,
  },
  render: (args: BadgeProps) => (
    <Badge {...args}>
      <div className='w-10 h-10 bg-gray-200 rounded-full' />
    </Badge>
  ),
};

export const RedBadge: Story = {
  args: {
    content: '2',
    color: 'red',
    size: 'medium',
    overlap: false,
  },
  render: (args: BadgeProps) => (
    <Badge {...args}>
      <div className='w-10 h-10 bg-gray-200 rounded-full' />
    </Badge>
  ),
};

export const LargeBadge: Story = {
  args: {
    content: '99',
    color: 'blue',
    size: 'large',
    overlap: false,
  },
  render: (args: BadgeProps) => (
    <Badge {...args}>
      <div className='w-10 h-10 bg-gray-200 rounded-full' />
    </Badge>
  ),
};
