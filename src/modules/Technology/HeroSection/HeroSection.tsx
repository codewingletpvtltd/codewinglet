'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';

const HeroSection = () => (
  <>
    <div
      className='bg-black lg:pt-[244px] md:pt-60 pt-[176px] relative scroll-mt-40'
      id='overview'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px] md:pb-20 pb-10'>
        <div className='lg:mt-[65px] relative lg:w-[680px]'>
          <SectionHeader
            title={<>Build the Future with Advanced AngularJS Development</>}
            description={
              <>
                We offer AngularJS development services across diy6verse
                industries, including eCommerce, healthcare, and education.
              </>
            }
            headingClassName='text-white !text-[56px]'
            descriptionClassName='text-white pt-6 !text-paragraph1ExtraLight'
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
        </div>
        <div className='lg:w-[748px] lg:mt-0 mt-10'>
          <Image
            src='/assets/Technologies/pages/hero.jpg'
            alt='hero'
            width={748}
            height={541}
          />
        </div>
      </div>
    </div>
  </>
);

export default HeroSection;
