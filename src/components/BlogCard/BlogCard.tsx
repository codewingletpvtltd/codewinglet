import Image from 'next/image';
import { FC } from 'react';
import Typography from '../Typography';
import { BlogCardProps } from './types';

const BlogCard: FC<BlogCardProps> = ({ image, desc, title, date }) => (
  <div className='relative w-full'>
    {image ? (
      <Image
        src={image}
        alt='Blog Image'
        className='w-full'
        width={500}
        height={500}
      />
    ) : (
      <div className='w-full' />
    )}
    <div className='py-[15px]'>
      <Typography className='text-secondary text-tag'>
        Alec Whitten • 1 Jan 2023
      </Typography>
      <Typography className='text-subtitle2 mt-2.5'>{title}</Typography>
      <Typography className='text-paragraph2Light text-secondary leading-[18px] md:text-4 md:leading-[22px] mt-2'>
        {desc}
      </Typography>
      <ul className='flex gap-2 pt-6'>
        <li className='text-secondary text-tagLight bg-bg border border-headerBoxBorder rounded-full py-0.5 px-2.5 w-fit'>
          Management
        </li>
        <li className='text-secondary text-tagLight bg-bg border border-headerBoxBorder rounded-full py-0.5 px-2.5 w-fit'>
          Project
        </li>
      </ul>
    </div>
  </div>
);

export default BlogCard;
