'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';

import Counter from './components/Counter';

const HeroSection = () => (
  <>
    <div
      className='bg-black lg:pt-[218px] md:pt-60 pt-[176px] relative scroll-mt-40'
      id='overview'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px]'>
        <div className='relative lg:w-[680px]'>
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

          <div>
            <Counter />
          </div>
        </div>
        <div className='mx-auto mt-auto'>
          <Image
            src='/assets/Technologies/pages/hero.png'
            alt='hero'
            width={490}
            height={690}
          />
        </div>
      </div>
    </div>
  </>
);

export default HeroSection;
