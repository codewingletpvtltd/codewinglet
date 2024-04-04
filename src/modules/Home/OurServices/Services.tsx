'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Arrow } from '@codewinglet/assets';
import Reveal from '@codewinglet/components/Reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
      <div className='xl:flex mt-[50px] gap-20 lg:block hidden'>
        <div className='2xl:w-[590px] xl:w-[471px]'>
          {ServiceData.map((service, i) => (
            <Reveal key={i}>
              <div
                key={service.title}
                onClick={() => handleChangeIndex(i)}
                className={`text-paragraph1ExtraLight ${
                  i === selectedIndex
                    ? 'text-primary !text-paragraph1Light'
                    : 'text-secondary'
                } border-b border-headerBoxBorder py-[20px] cursor-pointer flex items-center justify-between hover:text-primary hover:text-paragraph1Light`}
              >
                {service.title}
                <Arrow
                  className={`w-[21px] h-[21px] rotate-[315deg] ${
                    i === selectedIndex ? 'block' : 'hidden'
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className='2xl:w-[739px] xl:w-[739px]'>
          <div className='relative bg-white lg:p-10 p-5 transition-transform duration-500 ease-in [will-change:_top;] 2xl:w-[739px] 2xl:h-[819px] xl:h-[816px] xl:w-auto'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedIndex ? service.title : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Content service={service} />
              </motion.div>
            </AnimatePresence>
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
                className='[&[data-state=open]>svg]:rotate-[45deg] border-b border-headerBoxBorder !pb-0 group '
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
                  }  py-[22px] cursor-pointer flex items-center justify-between`}
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
      </div>
    </>
  );
};

export default Services;
