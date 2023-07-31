import { StoryObj } from '@storybook/react';
import ServiceCard from './ServiceCard';

export default {
  component: ServiceCard,
  tags: ['ServiceCard'],
};

export const CardTitleAndContent: StoryObj<typeof ServiceCard> = {
  args: {
    cardTitle: 'This is Card Title',
    cardContent: 'This is a Card Content',
  },
};
