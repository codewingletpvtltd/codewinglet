import { StoryObj } from '@storybook/react';
import SectionHeader from './SectionHeader';

export default {
  component: SectionHeader,
  tags: ['SectionHeader'],
};

export const Basic: StoryObj<typeof SectionHeader> = {
  args: {
    title: 'This is a title',
    description: 'This is a description',
  },
};

export const HighlightedWords: StoryObj<typeof SectionHeader> = {
  args: {
    title: 'This is a title',
    description: 'This is a description',
    highlight: [0],
  },
};
