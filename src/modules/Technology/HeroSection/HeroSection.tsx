'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

import Counter from './components/Counter';

const HeroSection = () => (
  <>
    <div
      className='bg-black xl:pt-[218px] lg:pt-60 md:pt-48 pt-[176px] relative scroll-mt-40'
      id='overview'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px]'>
        <div className='relative lg:w-[680px]'>
          <SectionHeader
            title={<>Build the Future with Advanced AngularJS Development</>}
            description={
              <>
                We offer AngularJS development services across diverse
                industries, including eCommerce, healthcare, and education.
              </>
            }
            headingClassName='text-white lg:!text-[56px] md:!text-h2 md:text-left text-center'
            descriptionClassName='text-white lg:pt-6 md:pt-3.5 md:!text-paragraph1ExtraLight md:text-left text-center'
          />
          <Button
            className='md:w-[298px] w-full lg:mt-[60px] mt-8 py-0 md:mr-6'
            variant='secondary'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Hire Angular Development
            </Link>
          </Button>
          <Button
            className='md:w-[298px] w-full lg:mt-[60px] md:mt-8 mt-[15px] py-0'
            variant='outline'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Schedule Free Consultation
              <Arrow />
            </Link>
          </Button>

          <div className='lg:block hidden'>
            <Counter />
          </div>
        </div>
        <div className='mx-auto mt-auto relative lg:pt-0 md:pt-20 pt-10'>
          <div className='bg-gray-50 border-[5px] border-[#313131] md:w-[226px] w-[117px] text-center absolute lg:-right-20 md:right-4 -right-2 lg:top-36 md:top-56 top-[120px] md:py-4'>
            <Typography className='text-gray-800 md:text-[30px] text-paragraph2 leading-7'>
              150+
            </Typography>
            <Typography className='text-gray-800 md:text-paragraph1Light text-tagExtraLight'>
              Happy Clients
            </Typography>
          </div>

          <div className='relative z-[1px]'>
            <Image
              src='/assets/Technologies/pages/hero.png'
              alt='hero'
              width={490}
              height={690}
              className='m-auto md:w-[490px] w-[293px]'
            />
            <Image
              src='/assets/Technologies/pages/angular_logo.svg'
              alt='angular_logo'
              width={72}
              height={72}
              className='absolute z-[2] top-2/4 lg:left-[53%] left-[52.5%] md:w-[72px] w-12'
            />
            <Image
              src='/assets/Technologies/pages/laptopBg.svg'
              alt='laptopBg'
              width={278}
              height={164}
              className='absolute z-[1] top-[46%] lg:left-[32%] md:left-[37%] left-[34%] md:w-[278px] w-[168px]'
            />
            <Typography className='absolute z-20 top-[64%] lg:left-[43%] left-[46%] text-white md:text-h5 text-[13px] uppercase'>
              Angular JS.
            </Typography>
          </div>
          <div className='lg:hidden block pt-10'>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HeroSection;
