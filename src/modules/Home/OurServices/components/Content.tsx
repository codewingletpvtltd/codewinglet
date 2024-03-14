'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography } from '@codewinglet/components';
import { Arrow } from '@codewinglet/assets';
import { ContentProps } from '../types';

const Content: FC<ContentProps> = ({ service }) => (
  <div className='bg-white lg:p-10 p-5 transition-transform duration-500 ease-in [will-change:_top;] 2xl:w-[690px] 2xl:h-[887px] xl:h-[887px] xl:w-auto'>
    <Image
      src={service.img}
      width={900}
      height={200}
      alt='Consulting'
      className='w-full'
    ></Image>
    <div className='xl:flex items-center justify-between pt-[30px] pb-[28px] lg:block hidden'>
      <Typography className='text-subtitle1 relative after:content after:absolute after:w-[40px] after:h-[2px] after:left-0 after:bg-primary after:bottom-[-8px]'>
        {service.title}
      </Typography>
      {/* <div className='flex items-center gap-2'>
        <Link href={service.path} className='underline text-paragraph2'>
          View more
        </Link>
        <Arrow className='w-[18px] h-[18px] rotate-[315deg]' />
      </div> */}
    </div>
    <Typography className='lg:text-paragraph1ExtraLight md:text-paragraph2Light text-secondary pb-[50px] lg:block hidden'>
      {service.description}
    </Typography>

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

    <Typography className='md:text-paragraph1Light text-tag lg:mb-5 md:mb-[15px] mb-3'>
      Service Included :
    </Typography>
    <div className='flex flex-wrap md:gap-5 gap-[15px]'>
      {service.subService.map((subService) => (
        <Button
          key={subService.label}
          variant='secondary'
          className='md:px-[25px] md:hover:px-[12px] md:py-5 px-[15px] py-[12px] hover:px-[5px] last:mb-0 group flex items-center md:gap-2 gap-[2px] md:text-paragraph2Light text-tagExtraLight md:text-center text-left whitespace-normal break-word'
        >
          <Link
            className='group-hover:translate-x-[-1px] [transition:_all_.5s;]'
            href={subService.path}
          >
            {subService.label}
          </Link>
          <Arrow className='hidden group-hover:block h-[18px] md:group-hover:w-[18px] group-hover:w-[12px]' />
        </Button>
      ))}
    </div>
  </div>
);

export default Content;
