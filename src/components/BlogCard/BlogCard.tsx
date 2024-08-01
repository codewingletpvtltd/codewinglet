import Image from 'next/image';
import { FC } from 'react';
import Button from '../Button';
import Typography from '../Typography';
import { BlogCardProps } from './types';

const BlogCard: FC<BlogCardProps> = ({ image, desc, title, date }) => (
  <div className='relative h-[400px] md:h-[390px] xl:h-[450px] w-full'>
    {image ? (
      <Image
        src={image}
        alt='Blog Image'
        className='rounded-10 z-[-10] w-full'
        width={500}
        height={500}
      />
    ) : (
      <div className='h-[400px] md:h-[390px] xl:h-[450px] w-full rounded-10 z-[-10]' />
    )}
    <div className='rounded-10 shadow-lg py-[18px] px-4 top-[-100px] relative bg-white z-10 mx-[17px] md:mx-[14px]'>
      <Typography
        variant='subtitle2'
        className='font-500 text-primary leading-[18px] md:text-4 md:leading-[22px]'
      >
        {desc}
      </Typography>
      <div className='flex flex-row items-center mt-[6px] mb-[11px]'>
        <Image
          src={'/assets/icons/Calender.svg'}
          alt='Calender'
          height={50}
          width={50}
        />
        {date && (
          <Typography
            variant='subtitle2'
            className='md:text-4 text-lightBlack ml-[8px]'
          >
            {date.toLocaleString('default', { month: 'long' })} {date.getDate()}
            , {date.getFullYear()}
          </Typography>
        )}
      </div>
      <Typography
        variant='h5'
        className='md:text-[22px] lg:text-[25px] mb-[11px]'
      >
        {title}
      </Typography>
      <Button>Read More</Button>
    </div>
  </div>
);

export default BlogCard;
