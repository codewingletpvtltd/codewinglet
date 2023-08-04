'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@codewinglet/components';
import useScreenSize from '@codewinglet/utils/useScreenSize';
const { theme } = require('../../tailwind.config');

export default function Home() {
  const isMobileScreen = useScreenSize(`(max-width: ${theme.screens.xs})`);

  return (
    <div className='bg-primary w-full'>
      Home Page Y y
      <h1 className='font-secondary text-h1 font-700'>
        font-family: Bespoke Sans
      </h1>
      <h1 className='font-primary'>primary font family</h1>
      <Accordion expandIconsHidden={!isMobileScreen}>
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
    </div>
  );
}
