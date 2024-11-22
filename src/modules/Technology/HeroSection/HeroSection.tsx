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
                We offer AngularJS development services across diy6verse
                industries, including eCommerce, healthcare, and education.1
              </>
            }
            headingClassName='text-white lg:!text-[56px] !text-h2'
            descriptionClassName='text-white lg:pt-6 pt-3.5 !text-paragraph1ExtraLight'
          />
          <Button
            className='w-[298px] lg:mt-[60px] mt-8 py-0 mr-6'
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
            className='w-[298px] lg:mt-[60px] mt-8 py-0'
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

          <div>
            <Counter />
          </div>
        </div>
        <div className='mx-auto mt-auto relative'>
          <div className='bg-bg border-[5px] border-[#313131] w-[226px] text-center absolute lg:-right-20 right-4 top-36 py-4'>
            <Typography className='text-primary text-[30px] leading-7'>
              150+
            </Typography>
            <Typography className='text-primary text-paragraph1Light'>
              Successful projects
            </Typography>
          </div>

          <div className='relative z-[1px]'>
            <Image
              src='/assets/Technologies/pages/hero.png'
              alt='hero'
              width={490}
              height={690}
              className='m-auto'
            />
            <Image
              src='/assets/Technologies/pages/angular_logo.svg'
              alt='angular_logo'
              width={72}
              height={72}
              className='absolute z-[2] top-[50%] lg:left-[53%] left-[52.5%]'
            />
            <Image
              src='/assets/Technologies/pages/laptopBg.svg'
              alt='laptopBg'
              width={278}
              height={164}
              className='absolute z-[1] top-[46%] lg:left-[32%] left-[37%]'
            />
            <Typography className='absolute z-20 top-[64%] lg:left-[43%] left-[46%] text-white text-h5 uppercase'>
              Angular JS.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HeroSection;
