import Image from 'next/image';

import Typography from '../Typography';
const NoBlogFound = ({
  text = 'No Blog Posted Yet!',
  subText = 'It looks like we haven\'t written any blog posts in this category just yet. Stay tuned for upcoming content!',
}) => (
  <div className='h-screen w-full bg-white text-black flex justify-center m-8'>
    <div className='w-full flex flex-col items-center'>
      <Image
        src={'/assets/blog/no_blog_icon.svg'}
        alt='No Blog Found Image'
        width={260}
        height={260}
        className='w-[260px] h-[260px]'
      />
      <Typography className='text-h6 leading-8 mt-3 text-gray-800'>
        {text}
      </Typography>
      <Typography className='font-normal text-tagLight leading-6 mt-3 text-gray-300 text-center'>
        {subText}
      </Typography>
    </div>
  </div>
);

export default NoBlogFound;
