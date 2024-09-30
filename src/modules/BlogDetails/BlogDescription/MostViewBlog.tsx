'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';

const fetchMostViewedBlog = async () => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    const blogRequest = await fetch(
      'http://127.0.0.1:1337/api/blogs?sort=views:desc&pagination[limit]=5',
      reqOptions
    );

    if (!blogRequest.ok) {
      throw new Error(`HTTP error! Status: ${blogRequest.status}`);
    }

    const response = await blogRequest.json();
    return response.data;
  } catch (error) {
    console.error('Fetch failed: ', error);
    return null;
  }
};

const MostViewBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await fetchMostViewedBlog();
      setBlogs(fetchedBlogs);
    };

    fetchBlogs();
  }, []);

  return (
    <div className='lg:sticky right-0 top-[230px]'>
      <Typography className='text-primary text-subtitle2 pb-[18px] border-b-2 border-primary'>
        Most Viewed Blogs
      </Typography>
      <ol
        type='1'
        className='list-decimal pt-5 pl-5 text-secondary lg:text-paragraph2Light text-paragraph1ExtraLight text-paragraph2Light flex flex-col md:gap-[26px] gap-5'
      >
        {blogs &&
          blogs.map((blog: any) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
            </li>
          ))}
      </ol>

      <div
        className='bg-primary text-white lg:p-5 md:p-11 lg:mt-5 mt-[30px] lg:text-left text-center md:px-28 p-5'
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
          className='w-[212px] text-primary !py-0 mt-5 border hover:border-white'
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
