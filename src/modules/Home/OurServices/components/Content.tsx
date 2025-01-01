'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';

import { ContentProps } from '../types';

const Content: FC<ContentProps> = ({ service }) => (
  <div className='flex flex-col justify-between xl:h-[752px] xl:w-auto bg-white lg:p-0 md:p-8 p-4'>
    <div>
      <Image
        src={service.img}
        width={900}
        height={180}
        alt='Consulting'
        className='w-full lg:h-[180px]'
      />
      <div className='xl:flex items-center justify-between pt-5 pb-7 lg:block hidden'>
        <Typography className='text-subtitle1 relative after:content after:absolute after:w-10 after:h-[2px] after:left-0 after:bg-gray-800 after:-bottom-2'>
          {service.title}
        </Typography>
        <div className='flex items-center gap-2'>
          <Link href={service.path} className='underline text-paragraph2'>
            View more
          </Link>
          <Arrow className='w-[18px] h-[18px] rotate-[315deg]' />
        </div>
      </div>

      <Typography className='lg:text-paragraph1ExtraLight md:text-paragraph2Light text-gray-400 pb-[25px] lg:block hidden'>
        {service.description}
      </Typography>

      <div className='lg:hidden flex items-start justify-between pt-[15px]'>
        <Typography className='lg:text-paragraph1ExtraLight md:text-paragraph2Light text-tagExtraLight text-gray-400 md:pb-10 pb-[30px] w-full'>
          {service.description}
        </Typography>
        <div className='flex items-center flex-shrink-0 gap-2'>
          <Link
            href={service.path}
            className='underline md:text-paragraph2 text-tagExtraLight'
          >
            View more
          </Link>
          <Arrow className='w-[18px] h-[18px] rotate-[315deg]' />
        </div>
      </div>
      <Typography className='md:text-paragraph1Light text-tag lg:mb-[15px] md:mb-[15px] mb-3'>
        Service Included :
      </Typography>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-[15px] bg-gray-50 lg:p-[30px] md:p-5 p-4'>
        {service.subService.map((subService) => (
          <div
            key={subService.label}
            className='cursor-default last:mb-0 md:gap-2 gap-[2px] md:text-tag text-tagExtraLight pl-6 relative underline'
          >
            <Image
              src={'/assets/OurService/check.svg'}
              alt='Arrow'
              width={16}
              height={16}
              className='absolute left-0 top-1.5 sm:w-[14px] w-[15px]'
            />

            {subService.label}
          </div>
        ))}
      </div>
    </div>

    <Link
      href='/contact-us'
      rel='noopener noreferrer'
      className='text-gray-800 group-hover:text-white text-center group w-[231px] mt-6 md:block hidden'
    >
      <Button className='w-[231px] gap-3 bg-transparent' variant='blackOutline'>
        Book a meeting
        <Arrow />
      </Button>
    </Link>
  </div>
);

export default Content;
