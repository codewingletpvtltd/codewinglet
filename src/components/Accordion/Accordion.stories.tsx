import { Story, Meta } from '@storybook/react';
import Accordion from './Accordion';
import AccordionDetails from './AccordionDetails';
import AccordionSummary from './AccordionSummary';
import { AccordionProps } from './types';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;
//iconPositions can be start|end
//You need to pass same id for AccordionSummary and AccordionDetails Component
//expandIconsHidden will take a boolean value to hide/show icons on the summary
//and if expandIconsHidden is true then all the details will be by default open
const Template: Story<AccordionProps> = (args) => (
  <Accordion expandIconsHidden={true} {...args}>
    <AccordionSummary id='panel1' iconPosition='end'>
      Panel 1
    </AccordionSummary>
    <AccordionDetails id='panel1'>
      <div>
        <p>This is the content of panel 1.1</p>
        <p>This is the content of panel 1.2</p>
        <p>This is the content of panel 1.3</p>
      </div>
      <div>
        <p>This is the content of panel 1.1</p>
        <p>This is the content of panel 1.2</p>
        <p>This is the content of panel 1.3</p>
      </div>
    </AccordionDetails>
    <AccordionSummary id='panel2' iconPosition='end'>
      Panel 2
    </AccordionSummary>
    <AccordionDetails id='panel2'>
      This is the content of panel 2
    </AccordionDetails>
  </Accordion>
);

export const Default = Template.bind({});
