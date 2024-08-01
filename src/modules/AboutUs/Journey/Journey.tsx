/* eslint-disable import/order */
'use client';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Typography } from '@codewinglet/components';
import Image from 'next/image';

const Journey = () => (
  <>
    <div className='relative bg-white lg:py-20 md:py-[60px] py-[30px] sm:pb-[inherit] pb-[70px] lg:mt-[86px] mt-[90px]'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <div className='lg:flex block'>
          <div className='lg:w-[598px] w-full'>
            <Typography className='text-primary md:text-subtitle2 text-tag'>
              About us
            </Typography>
            <Typography className='lg:text-h2 md:text-h3 text-subtitle2 lg:leading-normal md:leading-[50px] leading-7'>
              Discover Our IT Service Providing Journey
            </Typography>
            <Typography className='text-secondary text-subtitle2Light pt-3 pb-10 lg:block hidden'>
              We specialize in strategic planning, designing, and developing
              world-class software across diverse industries.
            </Typography>

            <div className='lg:flex group cursor-pointer text-primary mt-2.5 items-center group gap-2.5 hidden'>
              <Link
                href='https://maps.app.goo.gl/6W7ns2r5VzPFGmkA8'
                target='_blank'
                className='text-paragraph2 underline'
              >
                Explore now
              </Link>
              <Arrow className='group-hover:transition-all duration-700 group-hover:translate-x-1' />
            </div>
            <div className='lg:flex md:hidden flex md:justify-normal justify-between md:gap-[60px] gap-[135px] 2xl:mt-[279px] lg:mt-56 md:relative absolute bottom-5'>
              <Image
                src='/assets/AboutUs/darkGoogle.png'
                alt='darkGoogle'
                width={117}
                height={38}
                className='md:w-[117px] w-[77px]'
              />
              <Image
                src='/assets/AboutUs/darkGlassDoor.png'
                alt='darkGlassDoor'
                width={161}
                height={38}
                className='md:w-[161px] w-[101px] md:h-[38px] h-[26px]'
              />
            </div>
          </div>

          <div className='flex lg:justify-normal justify-between items-start relative lg:mt-0 md:mt-[54px] mt-5'>
            <div>
              <Image
                src='/assets/AboutUs/journey_1.png'
                alt='journey_1'
                width={365}
                height={400}
                className='2xl:mb-7 lg:mb-6 md:mb-[88px] mb-11 2xl:mr-7 lg:mr-6 2xl:ml-[78px] lg:ml-[52px] 2xl:w-[365px] md:w-[300px] w-[154px]'
              />
              <Image
                src='/assets/AboutUs/journey_3.png'
                alt='journey_3'
                width={443}
                height={286}
                className='2xl:w-[443px] w-[362px] md:ml-0 ml-[18px]'
              />
            </div>
            <Image
              src='/assets/AboutUs/roundLogo.png'
              alt='roundLogo'
              width={138}
              height={138}
              className='md:w-[138px] w-[70px] absolute 2xl:top-[339px] lg:top-[294px] top-auto 2xl:left-[381px] lg:left-[297px] left-auto lg:bottom-auto md:bottom-[50px] bottom-[25px] lg:right-auto md:right-[52px] right-[18px]'
            />
            <Image
              src='/assets/AboutUs/journey_2.png'
              alt='journey_2'
              width={315}
              height={343}
              className='2xl:pt-[85px] lg:pt-[79px] 2xl:w-[315px] md:w-[261px] w-[134px]'
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Journey;
