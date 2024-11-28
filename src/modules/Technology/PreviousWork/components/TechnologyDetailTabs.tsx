'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button, Typography } from '@codewinglet/components';
import { Arrow } from '@codewinglet/assets';

interface TechnologyDetailSectionProps {
  image: {
    src: string;
    alt: string;
  };
  link: {
    title: string;
    url: string;
  };
  tabPoints: Array<any>;
}

export const TechnologyDetailTabs: React.FC<any> = ({ items, onTabHover }) => (
  <div className='absolute left-0 z-10 top-[67px]'>
    <ul className='h-[510px] overflow-y-scroll example'>
      {items.map((item: any, index: number) => (
        <li
          key={index}
          onMouseEnter={() => onTabHover(item)}
          className='flex gap-5 items-center bg-white border border-headerBoxBorder p-5 w-[510px] mb-[30px] last:mb-0 cursor-pointer group'
        >
          <div className='bg-bg group-hover:bg-black p-[15px] text-primary group-hover:text-white transition duration-300'>
            <Image
              src={item?.image?.image?.url}
              alt={'icon'}
              width={28}
              height={28}
              className='invert group-hover:invert-0'
            />
          </div>
          <Typography className='text-subtitle2'>{item.title.text}</Typography>
          <Arrow className='ml-auto hidden group-hover:block transition duration-300' />
        </li>
      ))}
    </ul>
  </div>
);

const TechnologyDetailContent: React.FC<any> = ({ content, link }) => (
  <div className='text-white m-auto pl-[152px] pr-[120px]'>
    <Typography className='text-h6'>{content.title.text}</Typography>
    <div className='bg-white h-[3px] w-[50px] mb-5 mt-3'></div>
    <Typography className='text-paragraph2Light'>
      {content.description.text}
    </Typography>
    <ul className='grid grid-cols-5 gap-4 ml-5 mt-5'>
      {content.list?.map((item: any) => (
        <li className='list-disc text-paragraph2Light' key={item}>
          {item.text}
        </li>
      ))}
    </ul>

    <Button className='w-[205px] lg:mt-[50px] mt-8 py-0' variant='outline'>
      <Link
        href='/contact-us'
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-3'
      >
        {link.title}
        <Arrow />
      </Link>
    </Button>
  </div>
);

const TechnologyDetailSection: React.FC<TechnologyDetailSectionProps> = ({
  tabPoints,
  image,
  link,
}) => {
  const [activeTabContent, setActiveTabContent] = useState<any>(tabPoints[0]);
  return (
    <div className='relative'>
      <TechnologyDetailTabs
        items={tabPoints}
        onTabHover={(item: any) => setActiveTabContent(item)}
      />

      <div className='flex justify-end relative'>
        <div className='bg-black flex w-[975px] h-[624px]'>
          {activeTabContent ? (
            <TechnologyDetailContent content={activeTabContent} link={link} />
          ) : (
            <Typography className='text-white m-auto pl-[132px]'>
              Hover over a tab to see more details.
            </Typography>
          )}

          {/* LOGO */}
          <div className='border-[8px] border-white border-b-0 border-r-0 absolute bottom-0 right-0 '>
            <Image src={image.src} alt={image.alt} width={168} height={45} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyDetailSection;
