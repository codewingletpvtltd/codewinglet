import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, TypeAnimation, Typography } from '@codewinglet/components';
import {
  ArrowRightSVG,
  Illustration,
  LeftLineMediumSVG,
  LeftLineSVG,
  RectangleSVG,
  RightLineSVG,
  StarsSVG,
} from '@codewinglet/assets';
import Technologies from './components/Technologies';

const sequence = ['EdTech', 'E-Commerce', 'Healthcare', 'Real Estate', 'CRM'];

const HeroSection = () => (
  <div className='relative bg-aliceBlue z-0 overflow-hidden pt-[38px]'>
    <div className='relative'>
      <div className='my-[50px] xl:p-0 md:px-[38px] max-w-screen-xl xl:mx-auto px-[20px] flex items-center max-sm:2flex-col md:gap-[35px] lg:gap-[75px] xl:gap-[140px] lg:w-full relative flex-col md:flex-row'>
        <div className='relative lg:self-end flex-1'>
          <div className='max-w-[680px] capitalize'>
            <Typography
              variant='h3'
              className='inline !text-[22px] lg:!text-[28px] xl:!text-[35px] 2xl:!text-[40px] text-black'
            >
              Your Premier Web, Mobile <br /> And Software development <br />{' '}
              squad in{' '}
            </Typography>

            <TypeAnimation
              sequence={sequence}
              className='inline !text-[22px] lg:!text-[28px] xl:!text-[35px] 2xl:!text-[40px]'
            />
          </div>

          <Typography
            variant='body1'
            className='text-darkGray mt-[30px] mb-[29px]  !text-[14px] lg:!text-[16px] lg:w-[413px] xl:!text-[18px] xl:w-[473px] 2xl:!text-[20px] 2xl:w-[548px] text-lightBlack'
          >
            Do you have a concept for project? connect with codewinglet right
            away to secure a technologically advanced and cost effective
            development solution!
          </Typography>

          <Button link>
            <Link
              href='https://calendly.com/slapani'
              rel='noopener noreferrer'
              target='_blank'
            >
              Consult Codewinglet
            </Link>
          </Button>
        </div>
        <div className='relative h-[257px] w-[259px] md:min-w-[300px] md:h-[auto] mt-[105px] md:mt-[51px] lg:mt-[71px] xl:mt-[83px] 2xl:mt-[80px] flex justify-center lg:w-[357px] lg:h-[359px] xl:w-[424px] xl:h-[426px]'>
          <Image
            src={Illustration}
            alt='Ill'
            loading='eager'
            className='md:w-[357px] md:h-[357px] lg:h-[423px] lg:w-[423px] xl:h-[510px] xl:w-[510px]'
          />
          <ArrowRightSVG className='absolute -z-50 hidden md:block top-[40px] left-[-75px] 2xl:w-[94px] 2xl:h-[66px]' />
        </div>
      </div>
      <Technologies />
    </div>
    <LeftLineSVG className='absolute -z-50 top-[80px] sm:top-0 left-0 lg:hidden' />
    <StarsSVG className='absolute -z-50 top-[360px] right-[150px] md:top-[280px] md:left-[300px] lg:top-[450px] lg:left-[350px] xl:top-[480px] xl:left-[460px] 2xl:left-[800px] 2xl:top-[600px]' />
    <RectangleSVG className='absolute -z-50 bottom-[460px] left-[40px] md:bottom-[150px] md:left-[revert] md:right-[60px]  lg:!right-[90px]' />
    <RightLineSVG className='absolute hidden -z-50 right-0 top-[-90px] h-[calc(100%+90px)] 2xl:right-[88px] lg:block' />
    <LeftLineMediumSVG className='absolute -z-50 hidden lg:block top-[-83px] h-[calc(100%+90px)] left-[-64px] xl:left-[0px]' />
  </div>
);

export default memo(HeroSection);
