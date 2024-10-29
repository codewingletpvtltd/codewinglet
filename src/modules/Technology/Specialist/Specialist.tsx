'use client';

import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';

const Specialist = () => (
  <>
    <div className='bg-white lg:pb-20 md:pb-[60px] pb-[30px]'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px] bg-primary'>
        <div className='text-center pt-[62px] pb-20 w-9/12 mx-auto'>
          <SectionHeader
            title={<>Engage Our AngularJS Development Specialists</>}
            description={
              <>
                Bring your app vision to life with our AngularJS development
                experts. Schedule a free discovery session today to explore
                tailored solutions for your business!
              </>
            }
            headingClassName='text-white !text-h2'
            descriptionClassName='text-white pt-1.5 !text-subtitle2Light'
          />
          <Button
            className='w-[277px] lg:mt-[50px] mt-8 py-0 mr-6'
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
            className='w-[252px] lg:mt-[50px] mt-8 py-0'
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
