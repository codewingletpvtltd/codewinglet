'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';

const OurPromise = () => (
  <>
    <div className='bg-black lg:py-20 md:py-[60px] py-10 text-white'>
      <div className='container w-full lg:px-[15px] sm:px-[78px] px-5 mx-auto'>
        <div className='flex gap-[76px]'>
          <div className='w-[844px]'>
            <Typography className='text-gray-400 md:text-subtitle2 text-tag pb-1.5 lg:text-left md:text-center'>
              Our promise{' '}
            </Typography>
            <Typography className='md:text-h2 text-subtitle2 md:pb-10 pb-[22px] lg:text-left md:text-center'>
              We’re committed to building trustworthy partnership
            </Typography>

            <div className='text-white flex-col lg:text-subtitle2Light md:text-paragraph1ExtraLight text-tagLight md:grid flex grid-cols-2 lg:gap-[23px] gap-5 w-fit lg:mb-0 md:mb-[43px] mb-[22px]'>
              <span className='relative sm:pl-8 pl-6'>
                <Image
                  src={'/assets/ContactUs/check.svg'}
                  alt='Arrow'
                  width={20}
                  height={20}
                  className='absolute left-0 top-1.5 sm:w-5 w-[15px]'
                />
                Reliable Integrity
              </span>
              <span className='relative sm:pl-8 pl-6'>
                <Image
                  src={'/assets/ContactUs/check.svg'}
                  alt='Arrow'
                  width={20}
                  height={20}
                  className='absolute left-0 top-1.5 sm:w-5 w-[15px]'
                />
                Transparent Commitment
              </span>
              <span className='relative sm:pl-8 pl-6'>
                <Image
                  src={'/assets/ContactUs/check.svg'}
                  alt='Arrow'
                  width={20}
                  height={20}
                  className='absolute left-0 top-1.5 sm:w-5 w-[15px]'
                />
                Consistent Accountability
              </span>
              <span className='relative sm:pl-8 pl-6'>
                <Image
                  src={'/assets/ContactUs/check.svg'}
                  alt='Arrow'
                  width={20}
                  height={20}
                  className='absolute left-0 top-1.5 sm:w-5 w-[15px]'
                />
                Trustworthy Collaboration
              </span>
            </div>

            <Button className='w-[274px] h-12 2xl:mt-[70px] xl:mt-10 flex lg:m-0 m-[0_auto]'>
              <Link
                href='/contact-us'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3'
              >
                Let's Discuss a project
                <Arrow />
              </Link>
            </Button>
          </div>

          <div className='w-[490px] lg:block hidden'>
            <Image
              src='/assets/AboutUs/promise.png'
              alt='promise'
              width={490}
              height={402}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default OurPromise;
