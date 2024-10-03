'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

import { formatDate, formatTag } from '@codewinglet/utils';

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
  <div
    className={classNames(
      'relative lg:w-full w-[312px] md:mx-5 mx-2',
      className
    )}
  >
    {image && (
      <Image
        src={image}
        alt='Blog Image'
        width={450}
        height={250}
        className='h-[250px] object-cover'
      />
    )}
    <div className='py-[15px]'>
      <Typography className='text-secondary text-tag'>
        {formatDate(date)}
        <span className='text-headerBoxBorder px-3'>•</span>
        {readTime} min read
      </Typography>
      <Link href={href}>
        <div className='flex justify-between items-start'>
          <Typography className='text-subtitle2 mt-2.5'>{title}</Typography>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={11}
              height={11}
              className='mt-4'
            />
          )}
        </div>
      </Link>
      <Typography className='text-paragraph2Light text-secondary leading-[18px] md:text-4 md:leading-[22px] mt-2'>
        {desc}
      </Typography>
      {tags && (
        <ul className='flex gap-2 pt-6'>
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
);

export default BlogCard;
