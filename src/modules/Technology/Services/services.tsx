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

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <div className='bg-black lg:py-20 md:py-[60px] py-10'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto relative'>
          <div className='lg:border-y border-t border-b-0 border-grayBorder lg:flex'>
            <div className='bg-primary w-[72px] h-[72px] rounded-full flex flex-shrink-0 justify-center absolute -top-9 lg:left-0 left-10'>
              <Image
                src='/assets/Technologies/pages/command.svg'
                alt='command'
                width={32}
                height={32}
              />
            </div>
            <Reveal>
              <div className='lg:w-[755px] lg:pr-[252px] pt-[76px]'>
                <SectionHeader
                  title={<>Our Angular front-end services</>}
                  description={
                    <>
                      in today's fast-paced digital world, mobile apps are the
                      go-to solution for businesses to engage with customers.
                      Empower your business to deliver exactly what users crave.
                    </>
                  }
                  headingClassName='text-white lg:!text-h2 !text-[36px]'
                  descriptionClassName='text-secondary pt-3'
                />
                <Reveal>
                  <Link
                    className='md:w-auto w-full'
                    href='/contact-us'
                    aria-label='Instagram'
                  >
                    <Button
                      variant='outline'
                      className='md:w-[206px] w-full gap-2.5 lg:mt-[60px] mt-10'
                    >
                      Hire Developer <Arrow />
                    </Button>
                  </Link>
                </Reveal>
              </div>
            </Reveal>
            <div className='lg:w-[655px] border-l border-grayBorder lg:mt-0 mt-[50px]'>
              <Accordion
                type='single'
                defaultValue='IT Consulting'
                collapsible
                className='flex flex-col'
              >
                {faqData.map((faq, i) => (
                  <AccordionItem
                    key={faq.title}
                    value={faq.title}
                    defaultChecked={i == 0}
                    className='border-b border-[#3b3b3b] last:border-0'
                  >
                    <AccordionTrigger
                      onClick={() => handleChangeIndex(i)}
                      className={`lg:!text-subtitle2Light md:!text-paragraph1Light !text-tagLight relative ${
                        i === selectedIndex
                          ? 'text-primary lg:!text-subtitle2 md:!text-paragraph1 !text-tag after:content after:absolute after:bg-white after:w-[3px] after:h-[26px] after:left-0'
                          : 'text-primary'
                      } [&[data-state=open]>svg]:rotate-[45deg] !py-[30px] !px-[46px] xl:!pr-[70px] md:!pr-[60px] !pr-[50px] text-left leading-normal text-white font-normal`}
                    >
                      {faq.title}
                    </AccordionTrigger>
                    <AccordionContent className='border-remove faq text-secondary lg:!text-paragraph1ExtraLight md:!text-paragraph2Light !text-tagExtraLight px-[46px]'>
                      {faq.description}
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
