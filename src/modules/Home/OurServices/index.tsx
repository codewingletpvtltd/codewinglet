'use client';
import Link from 'next/link';
import { Button, SectionHeader } from '@codewinglet/components';
import { Arrow } from '@codewinglet/assets';
import Services from './Services';

const Technologies = () => (
  <section className='xl:py-20 lg:py-14 py-10 bg-bg'>
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <SectionHeader
        title={<>Our Services</>}
        description={
          <>
            Optimized customized software solutions to empower your niche and
            strategic business growth
          </>
        }
        headingClassName=''
        descriptionClassName=''
      />
      <Services />
      <Button
        className='w-[231px] lg:block m-auto text-center md:hidden block group bg-bg'
        variant='blackOutline'
      >
        <Link
          href='/contact-us'
          rel='noopener noreferrer'
          className='text-primary group-hover:text-white text-center flex items-center justify-center gap-3'
        >
          Book a meeting
          <Arrow />
        </Link>
      </Button>
    </section>
  </section>
);

export default Technologies;
