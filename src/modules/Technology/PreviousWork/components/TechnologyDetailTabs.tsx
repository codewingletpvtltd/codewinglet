'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';

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
  <div className='text-white m-auto pl-[152px] pr-[120px]'>
    <Typography className='text-h6'>{content.title}</Typography>
    <div className='bg-white h-[3px] w-[50px] mb-5 mt-3'></div>
    <Typography className='text-paragraph2Light'>
      {content.description}
    </Typography>
    <ul className='grid grid-cols-5 gap-4 ml-5 mt-5'>
      {content.tag?.map((item) => (
        <li className='list-disc text-paragraph2Light' key={item}>
          {item}
        </li>
      ))}
    </ul>

    <Button className='w-[205px] lg:mt-[50px] mt-8 py-0' variant='outline'>
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

  return (
    <div className='relative'>
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
  );
};

export default TechnologyDetailSection;
