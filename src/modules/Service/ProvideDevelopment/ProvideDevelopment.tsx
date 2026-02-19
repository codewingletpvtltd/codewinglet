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
            className='border-b border-gray-500 last:border-b-0 md:py-10 py-[25px]'
          >
            <AccordionTrigger
              icon={
                <>
                  <Arrow className='!rotate-90 transition-all duration-300' />
                </>
              }
              onClick={() => handleChangeIndex(i)}
              className={`lg:!text-subtitle2Light md:!text-paragraph1Light !text-tagLight relative ${
                i === selectedIndex ? 'text-white' : 'text-white'
              } [&[data-state=open]>svg]:!rotate-[270deg] !py-0 text-left leading-normal [&[data-state=open]]:pb-0`}
            >
              {service.title}
            </AccordionTrigger>
            <AccordionContent className='border-remove service text-gray-400 md:!text-paragraph2Light !text-tagExtraLight'>
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
        headingClassName='text-white lg:!text-h2 leading-normal text-center'
        descriptionClassName='!text-gray-400 mt-1.5 md:!text-subtitle2Light lg:mb-[50px] mb-10 text-center'
      />

      <div className='flex items-start lg:gap-[65px] lg:flex-row flex-col'>
        <div className='lg:w-[715px] w-full lg:order-1 order-2'>
          <ServiceProvide serviceProvide={serviceProvide} />
        </div>

        <div className='relative lg:order-2 order-1 m-auto overflow-hidden'>
          <Image
            src='/assets/Service/provideBg.png'
            alt='provideBg'
            width={630}
            height={524}
            className='md:w-[630px] w-[315px] md:h-[524px] h-[262px]'
          />
          <Image
            src='/assets/Service/projectUi.png'
            alt='projectUi'
            width={340}
            height={536}
            className='absolute md:-bottom-10 -bottom-5 md:left-10 left-5 z-[1] md:w-[340px] w-[175px] md:h-[536px] h-[276px]'
          />
          <Image
            src='/assets/Service/projectUiTwo.png'
            alt='projectUiTwo'
            width={294}
            height={511}
            className='absolute md:-top-10 -top-5 md:right-10 right-5 md:w-[294px] w-[151px] md:h-[511px] h-[263px]'
          />
        </div>
      </div>
    </div>
  </div>
);

export default ProvideDevelopment;
