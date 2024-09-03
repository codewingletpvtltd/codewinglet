/* eslint-disable import/order */
'use client';

import { Button, Typography } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils';
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
});

const ThankYou = () => (
  <>
    <div className='bg-white md:mt-[92px] mt-[170px] md:h-[calc(100vh_-_92px)] h-[calc(100vh_-_170px)] flex flex-col justify-center items-center'>
      <Typography
        className={getClassNames(
          'text-center lg:text-[130px] md:text-[80px] text-[44px] uppercase',
          raleway.className
        )}
      >
        Thank You
      </Typography>
      <Typography className='lg:text-subtitle2Light md:text-paragraph1ExtraLight text-[15px] font-light text-center lg:px-[29%] md:px-[10%] px-5 lg:mb-[50px] mb-10'>
        Thank you for registering for{' '}
        <span className='font-semibold'>Codewinglet DevBattle 2024!</span> We're
        excited to have you join us and look forward to seeing you at the event.
      </Typography>
      <Typography className='text-secondary md:text-paragraph1 text-tag md:mb-5 mb-2.5'>
        Know more about us :
      </Typography>
      <div className='flex gap-12 relative after:content after:absolute after:w-[1px] after:h-[26px] after:left-[46%] md:after:top-1.5 top-0 after:bg-headerBoxBorder'>
        <Link
          href='https://in.linkedin.com/company/codewinglet'
          target='_blank'
          className='underline md:underline-offset-[8px] flex justify-center items-center gap-4 lg:text-h6 md:text-subtitle2 text-paragraph2'
        >
          <Image
            src='/assets/icons/linkedin.svg'
            alt='linkedin'
            width={30}
            height={30}
            className='md:w-[30px] w-5 md:h-[30px] h-5'
          />
          Linkedin
        </Link>
        <Link
          href='https://www.instagram.com/codewinglet/'
          target='_blank'
          className='underline md:underline-offset-[8px] flex justify-center items-center gap-4 lg:text-h6 md:text-subtitle2 text-paragraph2'
        >
          {' '}
          <Image
            src='/assets/icons/instagram.svg'
            alt='instagram'
            width={30}
            height={30}
            className='md:w-[30px] w-5 md:h-[30px] h-5'
          />
          Instagram
        </Link>
      </div>
      <Button
        className='lg:block bg-white m-auto text-center block group px-4'
        variant='blackOutline'
      >
        <Link
          href='/event-form'
          rel='noopener noreferrer'
          className='text-primary  group-hover:text-white text-center flex items-center justify-center gap-3'
        >
          New Candidate Registration
        </Link>
      </Button>
    </div>
  </>
);

export default ThankYou;
