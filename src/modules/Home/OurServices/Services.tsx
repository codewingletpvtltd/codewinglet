'use client';
import Link from 'next/link';
import { useState } from 'react';

import { Arrow } from '@codewinglet/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@codewinglet/components';

import Content from './components/Content';
import ServiceData from './constants';

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };

  const service = ServiceData[selectedIndex];

  return (
    <>
      <div className='xl:flex justify-between mt-[50px] gap-20 lg:block hidden'>
        <div className='2xl:w-[590px] xl:w-[471px]'>
          {ServiceData.map((service, i) => (
            <div
              key={service.title}
              onClick={() => handleChangeIndex(i)}
              className={`text-paragraph1ExtraLight ${
                i === selectedIndex ? 'text-primary' : 'text-secondary'
              } border-b border-headerBoxBorder py-5 cursor-pointer flex items-center justify-between hover:text-primary`}
            >
              {service.title}
              <Arrow
                className={`w-[21px] h-[21px] rotate-[315deg] ${
                  i === selectedIndex ? 'block' : 'hidden'
                }`}
              />
            </div>
          ))}
        </div>
        <div className='xl:w-[644px]'>
          <div className='relative bg-white lg:p-10 p-5 transition-transform duration-500 ease-in [will-change:_top;] 2xl:w-[644px] 2xl:h-[819px] xl:h-[816px] xl:w-auto'>
            <Content service={service} />
          </div>
        </div>
      </div>

      {/* TABLET */}
      <div className='lg:hidden block md:mt-[50px] mt-0 gap-20 mb-0'>
        <Accordion type='single' defaultValue='IT Consulting' collapsible>
          {ServiceData.map((service, i) => (
            <AccordionItem key={service.title} value={service.title}>
              <AccordionTrigger
                onClick={() => handleChangeIndex(i)}
                className={`[&[data-state=open]>svg]:rotate-[45deg] !pb-0 group ${
                  i === selectedIndex
                    ? 'border-b border-primary'
                    : 'border-b border-headerBoxBorder'
                }`}
                icon={
                  <Arrow
                    className={`w-[21px] h-[21px] transition duration-500 group-hover:rotate-[45deg] ${
                      i === selectedIndex ? 'text-primary' : 'text-secondary'
                    } `}
                  />
                }
              >
                <div
                  className={`md:text-subtitle2Light text-paragraph2Light ${
                    i === selectedIndex
                      ? 'text-primary md:!text-subtitle2 !text-paragraph2'
                      : 'text-secondary'
                  }  md:py-[22px] py-5 cursor-pointer flex items-center justify-between`}
                >
                  {service.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className='border-remove'>
                <Content service={service} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link
          href='/contact-us'
          rel='noopener noreferrer'
          className='text-primary group-hover:text-white text-center group mt-6 md:hidden block m-auto'
        >
          <Button
            className='gap-2 bg-transparent w-[178px]'
            variant='blackOutline'
          >
            Book a meeting
            <Arrow />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Services;
