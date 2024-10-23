'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';

const HeroSection = () => (
  <>
    <div
      className='bg-black lg:pt-[328px] md:pt-60 pt-[176px] relative scroll-mt-40'
      id='overview'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px] md:pb-20 pb-10'>
        <div className='lg:mt-[65px] relative lg:w-[612px]'>
          <SectionHeader
            title={<>The best AngularJS development company</>}
            description={
              <>
                Are you ready to elevate your online presence and captivate your
                audience with high-performance websites and applications?
                <br /> <br />
                Look no further than our Angular Frontend Framework development
                services.
              </>
            }
            headingClassName='text-white'
            descriptionClassName='text-white pt-6'
          />
          <Button
            className='text-white underline lg:mt-[60px] mt-8 py-0'
            variant='link'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Explore blogs
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
