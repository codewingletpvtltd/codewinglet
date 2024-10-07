import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@codewinglet/components';
import { formatDate, formatTag, getClassNames } from '@codewinglet/utils';

import { Blog } from './types';

interface BlogItemProps {
  blog: Blog;
}

export const BlogItem: React.FC<BlogItemProps> = ({ blog }) => (
  <>
    <div className='flex md:flex-row flex-col 2xl:gap-[45px] gap-5'>
      {blog.image && (
        <Image
          src={`http://127.0.0.1:1337${blog.image.url}`}
          alt='article'
          width={484}
          height={315}
          className='lg:w-[484px] w-[334px] 2xl:h-[315px] lg:h-[295px] h-[218px] object-cover'
        />
      )}
      <div className='2xl:py-[15px]'>
        <Typography className='text-secondary text-tag'>
          {formatDate(blog.createdAt)} • {blog.read} min read
        </Typography>
        <Link href={`/blogs/${blog.slug}`}>
          <div className='flex justify-between items-start'>
            <Typography className='text-subtitle2 mt-2.5 overflow-hidden text-ellipsis line-clamp-2'>
              {blog.title}
            </Typography>
            <Image
              src='/assets/icons/crossArrow.svg'
              alt='crossArrow'
              width={11}
              height={11}
              className='mt-4'
            />
          </div>
        </Link>
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
  </>
);
