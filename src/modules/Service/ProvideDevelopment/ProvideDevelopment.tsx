'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Arrow } from '@codewinglet/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SectionHeader,
} from '@codewinglet/components';

import { serviceProvide } from './constants';

const ServiceProvide = ({
  serviceProvide,
}: {
  serviceProvide: {
    title: string;
    description: string;
  }[];
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Accordion
        type='single'
        defaultValue='IT Consulting'
        collapsible
        className='flex flex-col w-full group'
      >
        {serviceProvide.map((service, i) => (
          <AccordionItem
            key={service.title}
            value={service.title}
            defaultChecked={i == 0}
            className='border-b border-[#3B3B3B] last:border-b-0 py-10'
          >
            <AccordionTrigger
              icon={
                <>
                  <Arrow className='!rotate-[90deg] transition-all duration-300' />
                </>
              }
              onClick={() => handleChangeIndex(i)}
              className={`lg:!text-subtitle2Light md:!text-paragraph1Light !text-tagLight relative ${
                i === selectedIndex ? 'text-white' : 'text-white'
              } [&[data-state=open]>svg]:!rotate-[270deg] !py-0 text-left leading-normal [&[data-state=open]]:pb-0`}
            >
              {service.title}
            </AccordionTrigger>
            <AccordionContent className='border-remove service text-secondary md:!text-paragraph2Light !text-tagExtraLight'>
              {service.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const ProvideDevelopment = () => (
  <div className='lg:py-20 md:py-[60px] py-10 relative bg-black'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <SectionHeader
        title={<>Services We Provide in Web Development</>}
        description={
          <>
            In today's fast-paced digital world, mobile apps are the go-to
            solution for businesses to engage with customers. Empower your
            business to deliver exactly what users crave.
          </>
        }
        headingClassName='text-white md:!text-h2 leading-normal text-center'
        descriptionClassName='text-secondary mt-1.5 lg:!text-subtitle2Light mb-[50px] text-center'
      />

      <div className='flex items-start gap-[65px]'>
        <div className='w-[715px]'>
          <ServiceProvide serviceProvide={serviceProvide} />
        </div>

        <div className='relative'>
          <Image
            src='/assets/Service/provideBg.png'
            alt='provideBg'
            width={630}
            height={524}
          />
          <Image
            src='/assets/Service/projectUi.png'
            alt='projectUi'
            width={340}
            height={536}
            className='absolute bottom-0 left-10 z-[1]'
          />
          <Image
            src='/assets/Service/projectUiTwo.png'
            alt='projectUiTwo'
            width={294}
            height={511}
            className='absolute top-0 right-10'
          />
        </div>
      </div>
    </div>
  </div>
);

export default ProvideDevelopment;
