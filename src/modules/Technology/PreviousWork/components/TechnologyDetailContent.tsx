'use client';

import Link from 'next/link';
import React from 'react';

import { Button, Typography } from '@codewinglet/components';

import { TechnologyDetailContentProps } from '../data/technologyDetails';

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
      </Link>
    </Button>
  </div>
);

export default TechnologyDetailContent;
