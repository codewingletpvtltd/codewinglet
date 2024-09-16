import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import Typography from '../Typography';
import { BlogCardProps } from './types';

const BlogCard: FC<BlogCardProps> = ({
  image,
  desc = 'No description available',
  title,
  className,
  date = '',
  imageSrc,
  imageAlt = 'Icon',
}) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'No date available';

  return (
    <div className={classNames('relative lg:w-full w-[312px] mx-5', className)}>
      {image && (
        <Image
          src={image}
          alt='Blog Image'
          className='w-full'
          width={500}
          height={500}
        />
      )}
      <div className='py-[15px]'>
        <Typography className='text-secondary text-tag'>
          {formattedDate}
          <span className='text-headerBoxBorder px-3'>•</span>12 min read
        </Typography>
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
};

export default BlogCard;
