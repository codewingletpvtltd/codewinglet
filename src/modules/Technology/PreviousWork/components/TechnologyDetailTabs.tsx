'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Arrow, LeftArrow } from '@codewinglet/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Typography,
} from '@codewinglet/components';

import {
  TechnologyDetailContentProps,
  TechnologyDetailTabsProps,
  technologyDetails,
} from './technologyDetails';

const TechnologyDetailTabs: React.FC<TechnologyDetailTabsProps> = ({
  onTabHover,
}) => (
  <div className='absolute left-0 z-10 top-[67px]'>
    <ul className='h-[510px] overflow-y-scroll example'>
      {technologyDetails.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => onTabHover(item)}
          className='flex gap-5 items-center bg-white border border-headerBoxBorder p-5 w-[510px] mb-[30px] last:mb-0 cursor-pointer group'
        >
          <div className='bg-bg group-hover:bg-black p-[15px] text-primary group-hover:text-white transition duration-300'>
            {item.icon}
          </div>
          <Typography className='text-subtitle2'>{item.label}</Typography>
          <Arrow className='ml-auto hidden group-hover:block transition duration-300' />
        </li>
      ))}
    </ul>
  </div>
);

const TechnologyDetailContent: React.FC<TechnologyDetailContentProps> = ({
  content,
}) => (
  <div className='text-white m-auto lg:pl-[152px] lg:pr-[120px] lg:bg-transparent bg-black md:px-11 md:py-6 p-[15px]'>
    <Typography className='md:text-h6 text-tagExtraLight'>
      {content.title}
    </Typography>
    <div className='bg-white h-[3px] w-[50px] md:mb-5 mb-2.5 md:mt-3 mt-1.5'></div>
    <Typography className='md:text-paragraph2Light text-tagExtraLight font-light'>
      {content.description}
    </Typography>
    <ul className='grid md:grid-cols-5 grid-cols-2 gap-4 ml-5 mt-5'>
      {content.tag?.map((item) => (
        <li
          className='list-disc md:text-paragraph2Light text-tagExtraLight font-light'
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>

    <Button
      className='w-[205px] lg:mt-[50px] mt-8 py-0 lg:block hidden'
      variant='outline'
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
);

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

  // const service = ServiceData[selectedIndex];

  return (
    <>
      <div className='relative lg:block hidden'>
        <TechnologyDetailTabs
          onTabHover={(item) => setActiveTabContent(item.content)}
        />

        <div className='flex justify-end relative'>
          <div className='bg-black flex 2xl:w-[975px] w-[846px] h-[624px]'>
            {activeTabContent ? (
              <TechnologyDetailContent content={activeTabContent} />
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
              className='bg-white border border-headerBoxBorder'
            >
              <AccordionTrigger
                onClick={() => handleChangeIndex(i)}
                className='[&[data-state=open]>svg]:rotate-90 !pb-0 group pr-5'
                icon={
                  <LeftArrow className='transition duration-500 rotate-[270deg] flex-shrink-0 md:w-5 w-4' />
                }
              >
                <div
                  className={`md:text-subtitle2 text-tag text-left text-primary ${
                    i === selectedIndex ? '' : ''
                  } md:p-5 p-[15px] cursor-pointer md:gap-5 gap-2.5 flex items-center justify-between leading-normal`}
                >
                  <div className='bg-bg md:p-[15px] text-primary transition duration-300 md:w-[60px] w-11 md:h-[60px] h-11 flex items-center justify-center flex-shrink-0'>
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
