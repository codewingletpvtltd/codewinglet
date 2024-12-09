'use client';

import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';

const Innovation = () => (
  <>
    <div className='bg-white lg:py-20'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px] bg-primary relative'>
        {/* VIDEO */}
        {/* <div className='absolute left-0 top-0 h-[376px] w-[1410px]'>
          <video
            aria-hidden='true'
            poster='/media/video/poster/background-black-flag.jpg'
            autoPlay
            loop
            muted
            playsInline
            className='w-[1410px] h-[376px]'33
          >
            <source src='/assets/CaseStudy/videoBg.mp4' type='video/mp4' />
            Sorry, your browser does not support this video
          </video>
        </div> */}

        {/* Blend effect */}
        {/* <div className='w-full h-full block blend-mode bg-primary absolute top-0 left-0'></div> */}

        <div className='text-center md:pt-[62px] pt-10 md:pb-20 pb-10 2xl:w-9/12 lg:w-[85%] w-[95%] mx-auto relative z-10'>
          <SectionHeader
            title={<>Unlock Innovation – Hire the Best, Build the Best!</>}
            description={
              <>
                Ready to elevate your project? Our expert developers are here to
                turn your ideas into scalable solutions. Connect with us today
                to find the perfect talent and accelerate your growth!
              </>
            }
            headingClassName='text-white lg:!text-h2 md:!text-[36px]'
            descriptionClassName='text-white pt-1.5 lg:!text-subtitle2Light md:!text-paragraph1ExtraLight'
          />
          <Button
            className='md:w-[277px] w-full lg:mt-[50px] mt-8 py-0 mr-6'
            variant='secondary'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Hire Our Skilled Developer
            </Link>
          </Button>
          <Button
            className='md:w-[252px] w-full lg:mt-[50px] md:mt-8 mt-5 py-0'
            variant='outline'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Book a Free Session
              <Arrow />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </>
);

export default Innovation;
