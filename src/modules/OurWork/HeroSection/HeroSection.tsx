'use client';

import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';

import Counter from './components/Counter';

const HeroSection = () => (
  <>
    <div className='lg:mt-[86px] mt-[90px] lg:py-20 md:py-[60px] py-10 relative bg-ourWorkBg bg-no-repeat lg:bg-cover bg-contain'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto relative z-10'>
        <span className='lg:text-subtitle2Light md:text-paragraph2Light text-tagLight text-gray-400 block'>
          Portfolio
        </span>
        <SectionHeader
          title={<>The design partner for Health & Wellness brands</>}
          description={
            <>
              Thus, partnering with Brainvire, it aimed to revamp its website
              for seamless access to articles,.
            </>
          }
          headingClassName='text-white lg:!text-[55px] md:!text-h2 leading-normal'
          descriptionClassName='text-white mt-1.5 lg:!text-paragraph1ExtraLight'
        />

        <Button
          className='md:w-[242px] w-[151px] lg:mt-[50px] md:mt-8 mt-10 py-0 md:!text-paragraph2 !text-tag text-white'
          variant='outline'
        >
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Get in touch
            <Arrow />
          </Link>
        </Button>

        <Counter />
      </div>
    </div>
  </>
);

export default HeroSection;
