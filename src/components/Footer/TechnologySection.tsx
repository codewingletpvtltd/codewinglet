import { useId } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@codewinglet/components/Accordion';
import useScreenSize from '@codewinglet/hooks/useScreenSize';
import { sm } from '../../constants/mediaQueryConst';

const TechnologySection = () => {
  const isMobileView = useScreenSize(sm);
  const technologies = [
    'Front-end Backend',
    'Mobile',
    'Devops/Cloud',
    'IoT',
    'Database',
  ];
  const boldBorder = (
    <span className='absolute top-[36.5px] bg-white w-[146px] h-1'></span>
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
              href=''
              key={`${uniqueId}-${i}`}
              className='flex flex-wrap cursor-pointer w-full'
            >
              {element}
            </Link>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
export default TechnologySection;
