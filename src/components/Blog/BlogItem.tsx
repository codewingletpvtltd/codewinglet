import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@codewinglet/components';
import {
  calculateReadTime,
  formatDate,
  formatTag,
  getClassNames,
} from '@codewinglet/utils';

import { Blog } from './types';

interface BlogItemProps {
  blog: Blog;
}

export const BlogItem: React.FC<BlogItemProps> = ({ blog }) => (
  <div>
    <Link href={`/blogs/${blog.slug}`} className='group'>
      <div className='flex md:flex-row flex-col 2xl:gap-[45px] gap-5'>
        {blog.image && (
          <div className='overflow-hidden 2xl:w-[484px] lg:w-[418px] w-[334px]'>
            <Image
              src={blog.image.url}
              alt='article'
              width={484}
              height={315}
              className='w-full transition-transform duration-500 object-center object-cover 2xl:h-[315px] lg:h-[295px] h-[218px] hover:scale-105'
            />
          </div>
        )}
        <div className='2xl:py-[15px] 2xl:w-[428px] lg:w-[418px] w-[335px]'>
          <Typography className='text-secondary text-tag'>
            {formatDate(blog.createdAt)} • {calculateReadTime(blog.content)}
          </Typography>

          <div className='flex justify-between items-start'>
            <Typography className='text-subtitle2 mt-2.5 overflow-hidden text-ellipsis line-clamp-2'>
              {blog.title}
            </Typography>
            <Image
              src='/assets/icons/crossArrow.svg'
              alt='crossArrow'
              width={11}
              height={11}
              className='mt-4 transition duration-500 group-hover:rotate-[45deg]'
            />
          </div>

          <Typography
            className={getClassNames(
              'text-paragraph2Light text-secondary leading-[18px] md:leading-[22px] mt-4 overflow-hidden text-ellipsis lg:line-clamp-6 line-clamp-4'
            )}
          >
            {blog.summary}
          </Typography>
          {blog.tags && (
            <ul className='flex gap-2 pt-[50px]'>
              {Object.entries(blog.tags)
                .filter(([key, value]) => value === true)
                .map(([key], index) => (
                  <li
                    key={index}
                    className='text-secondary capitalize text-tagLight bg-bg border border-headerBoxBorder rounded-full py-0.5 px-2.5 w-fit'
                  >
                    {formatTag(key)}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  </div>
);
