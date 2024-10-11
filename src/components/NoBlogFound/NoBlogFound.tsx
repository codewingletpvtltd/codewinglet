import React from 'react';
import Image from 'next/image';

import NoBlogFoundImage from '../../../public/assets/blog/no_blog_icon.svg';
import Typography from '../Typography';
const NoBlogFound = ({
  text = 'No Blog Posted Yet!',
  subText = 'It looks like we haven\'t written any blog posts in this category just yet. Stay tuned for upcoming content!',
}) => (
  <div className='h-screen w-full bg-white text-black flex justify-center m-8'>
    <div className='w-full flex flex-col items-center'>
      <Image
        src={NoBlogFoundImage}
        alt='No Blog Found Image'
        className='w-[260px] h-[260px]'
      />
      <Typography className='text-h6 leading-8 mt-3 text-primary'>
        {text}
      </Typography>
      <Typography className='font-normal text-[14px] leading-6 mt-3 text-lightGray text-center'>
        {subText}
      </Typography>
    </div>
  </div>
);

export default NoBlogFound;
