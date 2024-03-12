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

const Technologies = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };

  const service = ServiceData[selectedIndex];

  return (
    <>
      {/* DESKTOP */}
      <div className='xl:flex mt-[50px] gap-16 lg:block hidden'>
        <ul className='2xl:w-[18%] border-l border-secondary grid'>
          {ServiceData.map((service, i) => (
            <li
              key={service.title}
              onClick={() => handleChangeIndex(i)}
              className={`text-subtitle2Light pl-[30px] ${
                i === selectedIndex
                  ? 'text-white !text-subtitle2 relative after:content after:absolute after:w-[1px] after:bg-white after:h-[36px] after:top-0 after:left-0'
                  : 'text-secondary'
              }  pb-[25px] last:pb-0 cursor-pointer flex items-center justify-between `}
            >
              {service.title}
            </li>
          ))}
        </ul>
        <div className='2xl:w-[82%]'>
          <Content service={service} />
        </div>
      </div>

      {/* TABLET */}
      <div className='lg:hidden block md:mt-[50px] mt-5 gap-20 mb-[50px]'>
        <Accordion type='single' defaultValue='IT Consulting' collapsible>
          <ul className=''>
            {ServiceData.map((service, i) => (
              <AccordionItem key={service.title} value={service.title}>
                <AccordionTrigger
                  className='[&[data-state=open]>svg]:rotate-[45deg] border-b border-headerBoxBorder !pb-0'
                  icon={
                    <Arrow className='w-[21px] h-[21px] transition duration-500 group-hover:rotate-[45deg]' />
                  }
                >
                  <li
                    onClick={() => handleChangeIndex(i)}
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

export default Technologies;
