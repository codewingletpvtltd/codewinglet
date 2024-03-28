'use client';
import Link from 'next/link';
import { Button, SectionHeader } from '@codewinglet/components';
import { Arrow } from '@codewinglet/assets';
import { Reveal } from '@codewinglet/modules/Reveal';
import Services from './Services';

const OurService = () => (
  <section className='xl:py-20 lg:py-14 md:py-[60px] py-10 bg-bg'>
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <Reveal>
        <SectionHeader
          title={<>Our services</>}
          description={
            <>
              Optimized customized software solutions to empower your niche and
              strategic business growth
            </>
          }
          headingClassName=''
          descriptionClassName=''
        />
      </Reveal>
      <Services />
      <Link
        href='/contact-us'
        rel='noopener noreferrer'
        className='text-primary group-hover:text-white  lg:block m-auto text-center md:hidden block group mt-14'
      >
        <Button className='w-[231px] bg-bg gap-3' variant='blackOutline'>
          Book a meeting
          <Arrow />
        </Button>
      </Link>
    </section>
  </section>
);

export default OurService;
