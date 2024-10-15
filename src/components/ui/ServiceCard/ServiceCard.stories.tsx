import { StoryObj } from '@storybook/react';

import ServiceCard from './ServiceCard';

export default {
  component: ServiceCard,
  tags: ['ServiceCard'],
};

export const Default: StoryObj<typeof ServiceCard> = {
  args: {
    title: 'Title',
    children: 'Content',
    icon: <div className='h-[58px] w-[58px] rounded-[50%] bg-lightOrange' />,
  },
};
