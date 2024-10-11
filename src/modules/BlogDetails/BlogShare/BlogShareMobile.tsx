'use client';

import Image from 'next/image';

const BlogShareMobile = ({ title }: { title: string }) => {
  const shareHandle = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: 'Check out this blog!',
          url: window.location.href, // Share the current URL
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };
  return (
    <div className='md:hidden sm:block'>
      <div
        className='flex items-center justify-center lg:w-10 w-[30px] lg:h-10 h-[30px] rounded-full bg-bg cursor-pointer'
        onClick={shareHandle}
      >
        <Image
          src='/assets/icons/share.svg'
          alt='share'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default BlogShareMobile;
