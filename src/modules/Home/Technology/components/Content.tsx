import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';
import { ContentProps } from '../types';

const Content: FC<ContentProps> = ({ service }) => (
  <div className='bg-primary lg:p-[30px] p-5 transition-transform duration-500 ease-in [will-change:_top;] text-white h-[400px]'>
    <Typography className='text-h6 relative after:content after:absolute after:w-[40px] after:h-[2px] after:left-0 after:bg-white after:bottom-[-8px] mb-[30px]'>
      {service.mainTitle}
    </Typography>

    <div className='flex gap-[77px]'>
      <div className='w-[807px]'>
        <Typography className='lg:text-paragraph2 md:text-paragraph2Light text-secondary pb-5'>
          {service.description}
        </Typography>
        <div className='flex flex-wrap'>
          {service.subService.map((subService) => (
            <div
              key={subService.label}
              className='flex flex-col items-center gap-1.5 mr-[50px] mb-[30px]'
            >
              <Image
                src={subService.icon}
                alt='logo'
                width={30}
                height={30}
                className='w-[30px] h-[30px]'
              />
              <div className='text-paragraph2Light'>{subService.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='block items-start justify-between w-[223px]'>
        <Image
          src={service.img}
          width={223}
          height={183}
          alt='Consulting'
          className='w-[223px] h-[183px] mb-[15px]'
        />
        <Link
          className='sm:w-auto w-full'
          href='/contact-us'
          aria-label='Instagram'
        >
          <Button variant='outline' className='2xl:w-[223px] gap-2.5 py-[8px]'>
            Hire developer <Arrow />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Content;
