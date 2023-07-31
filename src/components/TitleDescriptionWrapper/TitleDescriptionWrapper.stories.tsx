import { StoryObj } from '@storybook/react';
import TitleDescriptionWrapper from './TitleDescriptionWrapper';

export default {
  component: TitleDescriptionWrapper,
  tags: ['TitleDescriptionWrapper'],
};

export const Basic: StoryObj<typeof TitleDescriptionWrapper> = {
  args: {
    title: 'This is a title',
    description: 'This is a description',
  },
};

export const BoldFirstWord: StoryObj<typeof TitleDescriptionWrapper> = {
  args: {
    title: 'This is a title',
    description: 'This is a description',
    highlight: [0],
  },
};

export const BoldFirstAndLastWords: StoryObj<typeof TitleDescriptionWrapper> = {
  args: {
    title: 'This is a title',
    description: 'This is a description',
    highlight: [0, 3],
  },
};

export const CustomTitleClass: StoryObj<typeof TitleDescriptionWrapper> = {
  args: {
    title: 'This is a title',
    description: 'This is a description',
    titleClass: 'text-#FF0000',
  },
};

export const CustomDescriptionClass: StoryObj<typeof TitleDescriptionWrapper> =
  {
    args: {
      title: 'This is a title',
      description: 'This is a description',
      descriptionClass: 'text-#FF0000-lg',
    },
  };

export const CustomClassesAndBoldWords: StoryObj<
  typeof TitleDescriptionWrapper
> = {
  args: {
    title: 'This is a title',
    description: 'This is a description',
    highlight: [0, 3],
    titleClass: 'text-#FF0000-2xl',
    descriptionClass: 'text-#FF333-lg',
  },
};
