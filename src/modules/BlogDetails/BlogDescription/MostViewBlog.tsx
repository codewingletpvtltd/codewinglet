'use client';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';

const MostViewBlog = () => (
  <div className='lg:sticky right-0 top-[230px]'>
    <Typography className='text-primary text-subtitle2 pb-[18px] border-b-2 border-primary'>
      Most Viewed Blogs
    </Typography>
    <ol
      type='1'
      className='list-decimal pt-5 pl-5 text-secondary text-paragraph2Light flex flex-col gap-[26px]'
    >
      <li>How to Measure Project Success: Expert Panel</li>
      <li>
        Culture Fit Interview Questions: How to Assess External Tech Talent
      </li>
      <li>Should Startups Really Partner With Enterprise Tech Vendors?</li>
      <li>How to Hire Programmers for a Start-up</li>
      <li>
        Tech Support for Small Businesses: Unlocking Efficiency and Growth
      </li>
    </ol>

    <div
      className='bg-primary text-white p-5 mt-5'
      style={{ backgroundImage: 'url(/assets/blog/viewBg.png)' }}
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

export default MostViewBlog;
