/* eslint-disable import/order */
'use client';
import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ContentProps } from '../types';

const Content: FC<ContentProps> = ({ service }) => (
  <div className='flex flex-col justify-between xl:h-[752px] xl:w-auto'>
    <div>
      <Reveal>
        <Image
          src={service.img}
          width={900}
          height={200}
          alt='Consulting'
          className='w-full'
        />
      </Reveal>
      <Reveal>
        <div className='xl:flex items-center justify-between pt-5 pb-7 lg:block hidden'>
          <Typography className='text-subtitle1 relative after:content after:absolute after:w-10 after:h-[2px] after:left-0 after:bg-primary after:bottom-[-8px]'>
            {service.title}
          </Typography>
          <div className='flex items-center gap-2'>
            <Link href={service.path} className='underline text-paragraph2'>
              View more
            </Link>
            <Arrow className='w-[18px] h-[18px] rotate-[315deg]' />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <Typography className='lg:text-paragraph1ExtraLight md:text-paragraph2Light text-secondary pb-[25px] lg:block hidden'>
          {service.description}
        </Typography>
      </Reveal>

      <div className='lg:hidden flex items-start justify-between pt-[15px]'>
        <Typography className='lg:text-paragraph1ExtraLight md:text-paragraph2Light text-tagExtraLight text-secondary md:pb-10 pb-[30px] w-full'>
          {service.description}
        </Typography>
        {/* <Link
        href={service.path}
        className='underline md:text-paragraph2 text-tagExtraLight md:w-[15%] w-[23%]'
      >
        View more
      </Link> */}
      </div>
      <Reveal>
        <Typography className='md:text-paragraph1Light text-tag lg:mb-[15px] md:mb-[15px] mb-3'>
          Service Included :
        </Typography>
      </Reveal>
      <Reveal>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-[15px] bg-bg lg:p-[30px] px-0 pb-5'>
          {service.subService.map((subService) => (
            <div
              key={subService.label}
              className='cursor-default last:mb-0 md:gap-2 gap-[2px] md:text-tagLight text-tagExtraLight pl-6 relative'
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
      </Reveal>
    </div>

    <Link
      href='/contact-us'
      rel='noopener noreferrer'
      className='text-primary group-hover:text-white text-center group w-[231px]'
    >
      <Button className='w-[231px] gap-3 bg-transparent' variant='blackOutline'>
        Book a meeting
        <Arrow />
      </Button>
    </Link>
  </div>
);

export default Content;
