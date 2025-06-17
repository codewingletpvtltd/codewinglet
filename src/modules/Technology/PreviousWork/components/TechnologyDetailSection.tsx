'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { Arrow, LeftArrow } from '@codewinglet/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Typography,
} from '@codewinglet/components';

import { technologyDetails } from '../data/technologyDetails';
import TechnologyDetailContent from './TechnologyDetailContent';
import TechnologyDetailTabs from './TechnologyDetailTabs';

const TechnologyDetailSection: React.FC = () => {
  const [activeTabContent, setActiveTabContent] = useState<{
    title: string;
    description: string;
    tag?: string[];
  }>(technologyDetails[0].content);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className='relative lg:block hidden'>
        <TechnologyDetailTabs
          onTabHover={(item) => setActiveTabContent(item.content)}
        />

        <div className='flex justify-end relative'>
          <div className='bg-black flex 2xl:w-[975px] w-[846px] h-[624px]'>
            {activeTabContent ? (
              <TechnologyDetailContent
                content={{
                  ...activeTabContent,
                  tag: activeTabContent.tag || [],
                }}
              />
            ) : (
              <Typography className='text-white m-auto pl-[132px]'>
                Hover over a tab to see more details.
              </Typography>
            )}

            {/* LOGO */}
            <div className='bg-[#DD0031] border-[8px] border-white border-b-0 border-r-0 absolute bottom-0 right-0 py-5 px-[42px]'>
              <Image
                src='/assets/Technologies/pages/angularWhiteLogo.svg'
                alt='angularWhiteLogo'
                width={168}
                height={45}
              />
            </div>
          </div>
        </div>
      </div>

      {/* TABLET */}
      <div className='lg:hidden block md:mt-[50px] mt-0 gap-20 mb-0'>
        <Accordion
          type='single'
          defaultValue='IT Consulting'
          collapsible
          className='flex flex-col gap-5 mb-10'
        >
          {technologyDetails.map((tech, i) => (
            <AccordionItem
              key={tech.label}
              value={tech.label}
              className='bg-white border border-gray-100'
            >
              <AccordionTrigger
                onClick={() => handleChangeIndex(i)}
                className='[&[data-state=open]>svg]:rotate-90 !pb-0 group pr-5'
                icon={
                  <LeftArrow className='transition duration-500 rotate-[270deg] flex-shrink-0 md:w-5 w-4' />
                }
              >
                <div
                  className={`md:text-subtitle2 text-tag text-left text-gray-800 ${
                    i === selectedIndex ? '' : ''
                  } md:p-5 p-[15px] cursor-pointer md:gap-5 gap-2.5 flex items-center justify-between leading-normal`}
                >
                  <div className='bg-gray-50 md:p-[15px] text-gray-800 transition duration-300 md:w-[60px] w-11 md:h-[60px] h-11 flex items-center justify-center flex-shrink-0'>
                    {tech.icon}
                  </div>
                  {tech.label}
                </div>
              </AccordionTrigger>
              <AccordionContent className='border-remove'>
                <TechnologyDetailContent content={activeTabContent} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Button
          className='w-[289px] lg:mt-[50px] mt-8 py-0 m-auto block'
          variant='blackOutline'
        >
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Let’s connect
            <Arrow />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default TechnologyDetailSection;
