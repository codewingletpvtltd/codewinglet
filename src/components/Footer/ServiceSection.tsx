import { useId } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@codewinglet/components/Accordion';
import useScreenSize from '@codewinglet/hooks/useScreenSize';
import { sm } from '../../constants/mediaQueryConst';

const ServiceSection = () => {
  const isMobileView = useScreenSize(sm);
  const services = [
    'Front-end Backend',
    'Mobile',
    'Devops/Cloud',
    'IoT',
    'Database',
    'Robotics',
    'Git Solutions',
  ];
  const boldBorder = (
    <span className='absolute top-[36.5px] bg-white w-[106px] h-1'></span>
  );
  const uniqueId = useId();
  return (
    <Accordion expandIconsHidden={!isMobileView}>
      <AccordionSummary
        id='service-section'
        iconPosition='end'
        className='relative text-h4 lg:text-h4 xs:text-h5 border-b-[1px] pb-2 cursor-default'
      >
        {boldBorder}
        Service
      </AccordionSummary>
      <AccordionDetails
        id='service-section'
        className='text-subtitle1 lg:text-subtitle1 xs:text-subtitle2 leading-[0px]'
      >
        <div className='grid grid-rows-5 grid-flow-col gap-x-8 gap-y-5'>
          {services.map((element, i) => (
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
export default ServiceSection;
