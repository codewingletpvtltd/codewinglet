'use client';

import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';

const Specialist = () => (
  <>
    <div className='bg-white lg:pb-20'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px] bg-primary'>
        <div className='text-center md:pt-[62px] pt-10 md:pb-20 pb-10 lg:w-9/12 mx-auto'>
          <SectionHeader
            title={<>Engage Our AngularJS Development Specialists</>}
            description={
              <>
                Bring your app vision to life with our AngularJS development
                experts. Schedule a free discovery session today to explore
                tailored solutions for your business!
              </>
            }
            headingClassName='text-white lg:!text-h2 md:!text-[36px]'
            descriptionClassName='text-white pt-1.5 lg:!text-subtitle2Light md:!text-paragraph1ExtraLight'
          />
          <Button
            className='md:w-[277px] w-full lg:mt-[50px] mt-8 py-0 mr-6'
            variant='secondary'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Hire Our Skilled Developer
            </Link>
          </Button>
          <Button
            className='md:w-[252px] w-full lg:mt-[50px] md:mt-8 mt-5 py-0'
            variant='outline'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Book a Free Session
              <Arrow />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </>
);

export default Specialist;
