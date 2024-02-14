'use client';
import { memo } from 'react';
import Link from 'next/link';
import { Button, TypeAnimation, Typography } from '@codewinglet/components';
import './main.css';

import InfiniteSlider from './logoSlider';

const sequence = ['EdTech', 'E-Commerce', 'Healthcare', 'Real Estate', 'CRM'];

const HeroSection = () => (
  <div className='relative bg-transparent mb-0 h-[calc(100vh-78px)] mt-[78px] flex flex-col justify-between hero'>
    <div className='box'>
      <span style={{ animationDelay: '1s' }}></span>
      <span style={{ animationDelay: '2s' }}></span>
      <span style={{ animationDelay: '3s' }}></span>
      <span style={{ animationDelay: '4s' }}></span>
      <span style={{ animationDelay: '5s' }}></span>
      <span style={{ animationDelay: '6s' }}></span>
    </div>

    <div className='max-w-[1410px] px-[15px] mx-auto w-full m-auto'>
      <div className='xl:px-[200px] md:px-5 sm:px-0 px-0'>
        <Typography className='lg:text-h1 md:text-[42px] sm:text-[37px] text-body2 !font-300 text-center  text-white leading-[1.2]'>
          Your Premier Web, Mobile And Software development squad in{' '}
        </Typography>

        <TypeAnimation
          sequence={sequence}
          className='text-center text-white lg:text-h1 md:text-[42px] sm:text-[37px] text-h6 !font-300'
        />

        <Typography className='lg:text-body1 md:text-[20px] text-subtitle1 text-center my-[41px] mb-[84px] text-white md:px-0 sm:px-[0px] px-0'>
          Do you have a concept for project? connect with codewinglet right away
          to secure a technologically advanced and cost effective development
          solution!
        </Typography>

        <Button link className=' w-[222px]'>
          <Link href='#' rel='noopener noreferrer' target='_blank'>
            Request a Quote
          </Link>
        </Button>
      </div>
    </div>

    <InfiniteSlider />
  </div>
);

export default memo(HeroSection);
