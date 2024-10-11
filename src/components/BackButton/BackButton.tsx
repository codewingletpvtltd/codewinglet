'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Typography from '../Typography';

const BackButton = () => {
  const router = useRouter();
  return (
    <Typography
      className='flex gap-[13px] cursor-pointer'
      onClick={() => router.back()}
    >
      <Image
        src='/assets/icons/RightArrow.svg'
        alt='Back'
        width={16}
        height={16}
        className='rotate-180'
      />
      Back
    </Typography>
  );
};

export default BackButton;
