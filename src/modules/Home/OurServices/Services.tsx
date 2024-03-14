'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Arrow } from '@codewinglet/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@codewinglet/components';
import ServiceData from './constants';
import Content from './components/Content';

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };

  const service = ServiceData[selectedIndex];

  return (
    <>
      {/* DESKTOP */}
      <div className='xl:flex mt-[50px] gap-20 mb-[50px] lg:block hidden'>
        <ul className='2xl:w-1/2 xl:w-[471px]'>
          {ServiceData.map((service, i) => (
            <li
              key={service.title}
              onClick={() => handleChangeIndex(i)}
              className={`text-subtitle2Light ${
                i === selectedIndex
                  ? 'text-primary !text-subtitle2'
                  : 'text-secondary'
              } border-b border-headerBoxBorder last:border-b-0 py-[22px] cursor-pointer flex items-center justify-between`}
            >
              {service.title}
              <Arrow
                className={`w-[21px] h-[21px] rotate-[315deg] ${
                  i === selectedIndex ? 'block' : 'hidden'
                }`}
              />
            </li>
          ))}
        </ul>
        <div className='2xl:w-1/2 xl:w-[739px]'>
          <Content service={service} />
        </div>
      </div>

      {/* TABLET */}
      <div className='lg:hidden block md:mt-[50px] mt-5 gap-20 mb-10'>
        <Accordion type='single' defaultValue='IT Consulting' collapsible>
          <ul className=''>
            {ServiceData.map((service, i) => (
              <AccordionItem key={service.title} value={service.title}>
                <AccordionTrigger
                  onClick={() => handleChangeIndex(i)}
                  className='[&[data-state=open]>svg]:rotate-[45deg] border-b border-headerBoxBorder !pb-0 group '
                  icon={
                    <Arrow className='w-[21px] h-[21px] transition duration-500 group-hover:rotate-[45deg]' />
                  }
                >
                  <li
                    className={`md:text-subtitle2Light text-paragraph2Light ${
                      i === selectedIndex
                        ? 'text-primary md:!text-subtitle2 !text-paragraph2'
                        : 'text-secondary'
                    }  py-[22px] cursor-pointer flex items-center justify-between`}
                  >
                    {service.title}
                  </li>
                </AccordionTrigger>
                <AccordionContent className='border-remove'>
                  <Content service={service} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </ul>
        </Accordion>
      </div>

      <div className='lg:hidden md:block hidden'>
        <Button
          className='lg:w-[231px] md:w-[333px] lg:block m-auto text-center block group bg-bg'
          variant='blackOutline'
        >
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='text-primary group-hover:text-white text-center flex items-center justify-center gap-3'
          >
            Book a meeting
            <Arrow />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Services;
