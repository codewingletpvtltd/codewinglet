'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';

import { ContentProps } from '../types';

const Content: FC<ContentProps> = ({ service }) => (
  <div>
    <Typography className='md:text-h6 text-paragraph1 relative after:content after:absolute after:w-10 after:h-[2px] after:left-0 after:bg-white after:-bottom-2 mb-[30px] text-white'>
      {service.mainTitle}
    </Typography>

    <div className='lg:flex gap-[77px]'>
      <div className='lg:w-[807px]'>
        <Typography className='md:text-paragraph2 text-tagExtraLight text-gray-400 md:pb-5 pb-[25px]'>
          {service.description}
        </Typography>
        <div className='grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-5 grid-cols-3 gap-y-7'>
          {service.subService.map((subService) => (
            <div
              key={subService.label}
              className='flex flex-col items-center gap-1.5'
            >
              <Image
                src={subService.icon}
                alt='logo'
                width={30}
                height={30}
                className='w-[30px] h-[30px]'
              />
              <div className='lg:text-paragraph2Light md:text-tagLight text-tagExtraLight text-white'>
                {subService.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='block items-start justify-between md:w-[223px] w-full lg:mt-0 md:mt-5 mt-5'>
        <Image
          src={service.img}
          width={223}
          height={183}
          alt='Consulting'
          className='w-[223px] h-[183px] mb-[15px] lg:block hidden'
        />
        <Link
          className='md:w-auto w-full'
          href='/contact-us'
          aria-label='Instagram'
        >
          <Button
            variant='outline'
            className='md:w-[223px] w-full gap-2.5 py-[8px]'
          >
            Hire developer <Arrow />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Content;
