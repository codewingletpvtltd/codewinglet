'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { cn, formatDate, formatTag } from '@codewinglet/utils';

import Typography from '../Typography';
import { BlogCardProps } from './types';

const BlogCard: FC<BlogCardProps> = ({
  image,
  desc = 'No description available',
  title,
  className,
  date = '',
  readTime = 0,
  href,
  tags,
  imageSrc,
  imageAlt = 'Icon',
}) => (
  <Link href={href} className='group'>
    <div className={cn('relative lg:w-full w-[312px]', className)}>
      {image && (
        <div className='overflow-hidden w-full'>
          <Image
            src={image || '/assets/blog/blog_des_two.png'}
            alt='Blog Image'
            width={450}
            height={250}
            className='h-[250px] w-full transition-transform duration-500 object-center object-cover hover:scale-105'
          />
        </div>
      )}
      <div className='py-[15px]'>
        <Typography className='text-secondary text-tag'>
          {formatDate(date)}
          <span className='text-headerBoxBorder px-3'>•</span>
          {readTime} min read
        </Typography>

        <div className='flex justify-between items-start'>
          <Typography className='text-subtitle2 mt-2.5 overflow-hidden text-ellipsis line-clamp-2'>
            {title}
          </Typography>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={11}
              height={11}
              className='mt-4 transition duration-500 group-hover:rotate-[45deg]'
            />
          )}
        </div>

        <Typography className='text-paragraph2Light text-secondary leading-[18px] md:leading-[22px] mt-4 overflow-hidden text-ellipsis line-clamp-3'>
          {desc}
        </Typography>
        {tags && (
          <ul className='flex gap-2 pt-[17px] flex-wrap'>
            {Object.entries(tags)
              .filter(([key, value]) => value === true)
              .map(([key], index) => (
                <li
                  key={index}
                  className='text-secondary text-tagLight bg-bg border border-headerBoxBorder rounded-full py-0.5 px-2.5 w-fit'
                >
                  {formatTag(key)}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  </Link>
);

export default BlogCard;
