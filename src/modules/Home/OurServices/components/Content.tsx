import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography } from '@codewinglet/components';
import { Arrow } from '@codewinglet/assets';
import { ContentProps } from '../types';

const Content: FC<ContentProps> = ({ service }) => (
  <div className='bg-white p-10 transition-transform duration-500 ease-in [will-change:_top;] w-[690px]'>
    <Image
      src={service.img}
      width={900}
      height={200}
      alt='Consulting'
      className='w-full'
    ></Image>
    <div className='flex items-center justify-between pt-[30px] pb-[28px]'>
      <Typography className='text-subtitle1 relative after:content after:absolute after:w-[40px] after:h-[2px] after:left-0 after:bg-primary after:bottom-[-8px]'>
        {service.title}
      </Typography>
      <div className='flex items-center gap-2'>
        <Link href={service.path} className='underline text-paragraph2'>
          View more
        </Link>
        <Arrow className='w-[18px] h-[18px] rotate-[315deg]' />
      </div>
    </div>
    <Typography className='text-paragraph1ExtraLight text-secondary pb-[50px]'>
      {service.description}
    </Typography>
    <Typography className='text-paragraph1Light mb-5'>
      Service Included :
    </Typography>
    <div className='flex flex-wrap gap-5'>
      {service.subService.map((subService) => (
        <Button
          key={subService.label}
          variant='secondary'
          className='px-[25px] hover:px-[12px] py-5 last:mb-0 group flex items-center gap-2 text-paragraph2Light'
        >
          <Link
            className='group-hover:translate-x-[-1px] [transition:_all_.5s;]'
            href={subService.path}
          >
            {subService.label}
          </Link>
          <Arrow className='hidden group-hover:block h-[18px] group-hover:w-[18px]' />
        </Button>
      ))}
    </div>
  </div>
);

export default Content;
