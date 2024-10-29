import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { accordionData } from './constant';
import Accordion, { AccordCompProps } from './TechnologiesTab';

const meta: Meta<typeof Accordion> = {
  title: 'Technology Tab',
  component: Accordion,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the accordion header.',
    },
    count: {
      control: 'text',
      description: 'The count or identifier for the accordion item.',
    },
    caption: {
      control: 'text',
      description: 'A caption for the accordion content.',
    },
    content: {
      control: 'text',
      description: 'The main content of the accordion when expanded.',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Helper component to manage accordion state
const AccordionWrapper = (
  props: Omit<AccordCompProps, 'expanded' | 'handleChange'>
) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleChange = (count: string) => {
    setExpanded(expanded === count ? null : count);
  };

  return (
    <Accordion {...props} handleChange={handleChange} expanded={expanded} />
  );
};

// Define stories for each accordion item
export const DevOpsAccordion: Story = {
  args: {
    title: accordionData[0].title,
    count: accordionData[0].count,
    caption: accordionData[0].caption,
    content: accordionData[0].content,
  },
  render: (args) => <AccordionWrapper {...args} />,
};

export const UIUXAccordion: Story = {
  args: {
    title: accordionData[1].title,
    count: accordionData[1].count,
    caption: accordionData[1].caption,
    content: accordionData[1].content,
  },
  render: (args) => <AccordionWrapper {...args} />,
};

export const QAAccordion: Story = {
  args: {
    title: accordionData[2].title,
    count: accordionData[2].count,
    caption: accordionData[2].caption,
    content: accordionData[2].content,
  },
  render: (args) => <AccordionWrapper {...args} />,
};

export const AppDevelopmentAccordion: Story = {
  args: {
    title: accordionData[3].title,
    count: accordionData[3].count,
    caption: accordionData[3].caption,
    content: accordionData[3].content,
  },
  render: (args) => <AccordionWrapper {...args} />,
};

export const BackendAccordion: Story = {
  args: {
    title: accordionData[4].title,
    count: accordionData[4].count,
    caption: accordionData[4].caption,
    content: accordionData[4].content,
  },
  render: (args) => <AccordionWrapper {...args} />,
};

export const FrontendAccordion: Story = {
  args: {
    title: accordionData[5].title,
    count: accordionData[5].count,
    caption: accordionData[5].caption,
    content: accordionData[5].content,
  },
  render: (args) => <AccordionWrapper {...args} />,
};
