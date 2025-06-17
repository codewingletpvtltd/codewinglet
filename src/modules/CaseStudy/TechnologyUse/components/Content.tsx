'use client';
import Image from 'next/image';
import { FC } from 'react';

import { ContentProps } from '../types';

const Content: FC<ContentProps> = ({ service }) => (
  <div className='lg:flex gap-[77px]'>
    <div className='lg:w-[807px]'>
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
            <div className='lg:text-paragraph1ExtraLight md:text-tagLight text-tagExtraLight text-gray-800'>
              {subService.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Content;
