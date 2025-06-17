import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';
import { fetchMostViewedBlogs } from '@codewinglet/services';

const MostViewBlog = async () => {
  const blogs = await fetchMostViewedBlogs();
  return (
    <div className='lg:sticky right-0 top-[230px]'>
      <Typography className='text-gray-800 text-subtitle2 pb-[18px] border-b-2border-gray-800'>
        Most Viewed Blogs
      </Typography>
      <ol
        type='1'
        className='list-decimal pt-5 pl-5 text-gray-400 lg:text-paragraph2Light text-paragraph1ExtraLight text-paragraph2Light flex flex-col md:gap-[26px] gap-5'
      >
        {blogs &&
          blogs.map((blog: any) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
            </li>
          ))}
      </ol>

      <div
        className='bg-gray-800 text-white lg:p-5 md:p-11 lg:mt-5 mt-[30px] lg:text-left text-center md:px-28 p-5'
        style={{
          backgroundImage: 'url(/assets/blog/viewBg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'right',
          backgroundSize: 'cover',
        }}
      >
        <Typography className='text-subtitle2 pb-[15px]'>
          Facilitating the delivery of digital outcomes to expedite growth.
        </Typography>
        <Typography className='text-paragraph2Light'>
          Enhancing Business Growth by Facilitating the Expedited Delivery of
          Digital Solutions
        </Typography>
        <Button
          variant='secondary'
          className='w-[212px] text-gray-800 !py-0 mt-5 border hover:border-white'
        >
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Book a meeting
            <Arrow />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MostViewBlog;
