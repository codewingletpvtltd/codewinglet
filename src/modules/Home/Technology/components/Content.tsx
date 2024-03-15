'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';
import { ContentProps } from '../types';

const Content: FC<ContentProps> = ({ service }) => (
  <div className='bg-primary md:p-[30px] p-5 transition-transform duration-500 ease-in [will-change:_top;] text-white lg:h-[425px] lg:mt-0 mt-5'>
    <Typography className='md:text-h6 text-paragraph1 relative after:content after:absolute after:w-[40px] after:h-[2px] after:left-0 after:bg-white after:bottom-[-8px] mb-[30px]'>
      {service.mainTitle}
    </Typography>

    <div className='lg:flex gap-[77px]'>
      <div className='lg:w-[807px]'>
        <Typography className='lg:text-paragraph2 md:text-paragraph2ExtraLight text-tagExtraLight text-secondary md:pb-5 pb-[25px]'>
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
              <div className='lg:text-paragraph2Light md:text-tagLight text-tagExtraLight'>
                {subService.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='block items-start justify-between md:w-[223px] w-full lg:mt-0 md:mt-10 mt-5'>
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
