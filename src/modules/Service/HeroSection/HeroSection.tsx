'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const projectHighlights = [
  '100+ Projects Delivered',
  'Client Satisfaction Rate: 98%',
  'Serving 10+ Industries Globally',
  '7+ Years of Proven Expertise',
];

const HeroSection = () => (
  <div className='lg:mt-[86px] md:mt-[90px] mt-[78px] lg:py-20 md:py-[60px] py-10 lg:pt-0 md:!pt-[60px] !pt-10 relative bg-white'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto relative z-10 2xl:gap-[76px] gap-14'>
      <div className=''>
        <SectionHeader
          title={
            <>
              Empowering Your Business with Expert Custom software development
              Solutions
            </>
          }
          description={
            <>
              At Codewinglet, we craft tailored web development solutions that
              drive business growth through quality and innovation, addressing
              your unique challenges effectively.
            </>
          }
          headingClassName='text-gray-800 2xl:!text-[55px] lg:!text-[53px] leading-normal'
          descriptionClassName='text-gray-800 mt-1.5 lg:!text-subtitle2Light md:!text-subtitle2Light'
        />

        <Button className='w-[276px] md:mt-10 mt-8 py-0' variant='blackOutline'>
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Schedule a Consultation
            <Arrow />
          </Link>
        </Button>
      </div>

      <div className='lg:mt-10 md:mt-[70px] mt-10 relative md:h-auto h-[336px]'>
        <Image
          src='/assets/Service/serviceHero.png'
          alt='mainPortfolio'
          width={1330}
          height={426}
          className='lg:w-[1330px] w-[658px] lg:h-[426px] md:h-[382px] h-[188px] object-cover'
        />

        <div className='bg-white p-1.5 absolute md:-bottom-10 bottom-0 md:right-0 right-3.5'>
          <div className='bg-black md:p-[26px] p-5 md:w-[365px] w-[295px] text-white flex flex-col gap-[15px]'>
            {projectHighlights.map((highlight, index) => (
              <div key={index} className='flex md:gap-3.5 gap-2'>
                <div className='text-success'>
                  <CheckIcon className='md:w-[25px] w-5 md:h-[25px] h-5' />
                </div>
                <Typography className='text-white md:text-[17px] text-tagLight'>
                   {highlight}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
