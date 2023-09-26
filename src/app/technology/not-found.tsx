'use client';

import { useRouter } from 'next/navigation';
import { Button, Typography } from '@codewinglet/components';

const Error = () => {
  const router = useRouter();

  return (
    <div className='mt-[130px] mb-[55px] flex items-center justify-center h-[30vh] flex-col'>
      <Typography variant='h4' className='text-primary md:text-h3 lg:text-h1'>
        This page is under construction.
      </Typography>
      <Button className='mt-[20px]' onClick={() => router.push('/')}>
        Go To Home Page
      </Button>
    </div>
  );
};

export default Error;
