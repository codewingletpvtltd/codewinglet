'use client';
import { memo } from 'react';
import Link from 'next/link';
import { Button, TypeAnimation, Typography } from '@codewinglet/components';
import './main.css';

import InfiniteSlider from './logoSlider';

const sequence = ['EdTech', 'E-Commerce', 'Healthcare', 'Real Estate', 'CRM'];

const HeroSection = () => (
  <div className='relative bg-transparent mb-0 h-[calc(100vh-78px)] mt-[78px] flex flex-col justify-between'>
    <div className='box'>
      <span style={{ animationDelay: '1s' }}></span>
      <span style={{ animationDelay: '2s' }}></span>
      <span style={{ animationDelay: '3s' }}></span>
      <span style={{ animationDelay: '4s' }}></span>
      <span style={{ animationDelay: '5s' }}></span>
      <span style={{ animationDelay: '6s' }}></span>
    </div>

    <div className='max-w-[1410px] px-[15px] mx-auto w-full m-auto'>
      <div className='px-[200px]'>
        <Typography
          variant='h2'
          className='text-[55px] text-center font-500 text-white'
        >
          Your Premier Web, Mobile And Software development squad in{' '}
        </Typography>

        <TypeAnimation
          sequence={sequence}
          className='text-[55px] text-center font-500 text-white'
        />

        <Typography
          variant='body1'
          className='text-center my-[41px] mb-[84px] !font-200 text-[22px] text-white'
        >
          Do you have a concept for project? connect with codewinglet right away
          to secure a technologically advanced and cost effective development
          solution!
        </Typography>

        <Button link className=' w-[222px]'>
          <Link
            href='https://calendly.com/slapani'
            rel='noopener noreferrer'
            target='_blank'
          >
            Request a Quote
          </Link>
        </Button>
      </div>
    </div>

    <InfiniteSlider />
  </div>
);

export default memo(HeroSection);
