import { StoryObj } from '@storybook/react';
import Typography from './Typography';

export default {
  component: Typography,
  tags: ['Typography'],
};

export const H1: StoryObj<typeof Typography> = {
  args: {
    children: 'H1 Heading',
    variant: 'h1',
  },
};

export const H2: StoryObj<typeof Typography> = {
  args: {
    children: 'H2 Heading',
    variant: 'h2',
  },
};

export const H3: StoryObj<typeof Typography> = {
  args: {
    children: 'H3 Heading',
    variant: 'h3',
  },
};

export const H4: StoryObj<typeof Typography> = {
  args: {
    children: 'H4 Heading',
    variant: 'h4',
  },
};

export const H5: StoryObj<typeof Typography> = {
  args: {
    children: 'H5 Heading',
    variant: 'h5',
  },
};

export const H6: StoryObj<typeof Typography> = {
  args: {
    children: 'H6 Heading',
    variant: 'h6',
  },
};

export const Body1: StoryObj<typeof Typography> = {
  args: {
    children: 'Body1 Typography',
    variant: 'body1',
  },
};

export const Body2: StoryObj<typeof Typography> = {
  args: {
    children: 'Body2 Typography',
    variant: 'body2',
  },
};

export const Subtitle1: StoryObj<typeof Typography> = {
  args: {
    children: 'Subtitle1 Heading',
    variant: 'subtitle1',
    'aria-label': 'Subtitle',
  },
};
