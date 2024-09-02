/* eslint-disable import/order */
'use client';
import { Arrow } from '@codewinglet/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { faqData } from './constants';

interface ServicesProps {
  servicesData: any;
}

const Services = ({ servicesData }: ServicesProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <div
        className='bg-black lg:py-20 md:py-[60px] py-10 scroll-mt-40'
        id='AngularServices'
      >
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto relative'>
          <div className='lg:border-y border-t border-b-0 border-grayBorder lg:flex'>
            <div className='bg-primary md:w-[72px] md:h-[72px] w-10 h-10 rounded-full flex items-center flex-shrink-0 justify-center absolute md:-top-9 lg:left-0 md:left-10 -top-5 left-5'>
              <Image
                src='/assets/Technologies/pages/command.svg'
                alt='command'
                width={32}
                height={32}
                className='md:w-8 md:h-8 w-[18px] h-[18px]'
              />
            </div>
            <Reveal>
              <div className='lg:w-[755px] lg:pr-[252px] md:pt-[76px] pt-12'>
                <SectionHeader
                  title={servicesData?.title}
                  description={servicesData?.description}
                  headingClassName='text-white lg:!text-h2 md:!text-[36px] !text-subtitle2'
                  descriptionClassName='text-secondary pt-3'
                />
                <Reveal>
                  <Link
                    className='md:w-auto w-full'
                    href={servicesData?.hireDeveloper?.link}
                    aria-label='Instagram'
                  >
                    <Button
                      variant='outline'
                      className='w-[206px] gap-2.5 lg:mt-[60px] mt-10'
                    >
                      {servicesData?.hireDeveloper?.title} <Arrow />
                    </Button>
                  </Link>
                </Reveal>
              </div>
            </Reveal>
            <div className='lg:w-[655px] border-l border-grayBorder lg:mt-0 mt-[50px]'>
              <Accordion type='single' collapsible className='flex flex-col'>
                {servicesData?.technicalPoints?.map((point: any, i: number) => (
                  <AccordionItem
                    key={point.id}
                    value={point.title}
                    defaultChecked={i == 0}
                    className='border-b border-[#3b3b3b] last:border-0'
                  >
                    <AccordionTrigger
                      onClick={() => handleChangeIndex(i)}
                      className={`lg:!text-subtitle2Light md:!text-paragraph1Light !text-tagLight relative ${
                        i === selectedIndex
                          ? 'text-primary lg:!text-subtitle2 md:!text-paragraph1 !text-tag after:content after:absolute after:bg-white after:w-[3px] after:h-[26px] after:left-0'
                          : 'text-primary'
                      } [&[data-state=open]>svg]:rotate-[45deg] md:!py-[30px] !py-5 md:!px-[46px] !px-[32px] xl:!pr-[70px] md:!pr-[60px] !pr-[50px] text-left leading-normal text-white font-normal`}
                    >
                      {point.title}
                    </AccordionTrigger>
                    <AccordionContent className='border-remove faq text-secondary lg:!text-paragraph1ExtraLight md:!text-paragraph2Light !text-tagExtraLight px-[46px]'>
                      {point.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
