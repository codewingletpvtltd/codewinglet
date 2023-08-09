import { useId } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@codewinglet/components/Accordion';
import { useScreenSize } from '@codewinglet/hooks';
import { sm } from '@codewinglet/constants';

const TechnologySection = () => {
  const isMobileView = useScreenSize(sm);
  const technologies = [
    { label: 'Front-end Backend', path: '' },
    { label: 'Mobile', path: '' },
    { label: 'Devops/Cloud', path: '' },
    { label: 'IoT', path: '' },
    { label: 'Database', path: '' },
  ];
  const boldBorder = (
    <span className='absolute top-[44px] bg-white w-[146px] h-1'></span>
  );
  const uniqueId = useId();
  return (
    <Accordion expandIconsHidden={!isMobileView}>
      <AccordionSummary
        id='tech-section'
        iconPosition='end'
        className='relative text-h4 lg:text-h4 xs:text-h5 border-b-[1px] pb-2 cursor-default'
      >
        {boldBorder}
        Technology
      </AccordionSummary>
      <AccordionDetails
        id='tech-section'
        className='text-subtitle1 lg:text-subtitle1 xs:text-subtitle2 leading-[0px]'
      >
        <div className='grid grid-rows-5 grid-flow-col gap-x-8 gap-y-5'>
          {technologies.map((element, i) => (
            <Link
              href={element.path}
              key={`${uniqueId}-${i}`}
              className='flex flex-wrap cursor-pointer w-full'
            >
              {element.label}
            </Link>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
export default TechnologySection;
