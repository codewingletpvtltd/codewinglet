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
  <div className='lg:mt-[86px] md:mt-[90px] mt-[78px] lg:py-20 md:py-[60px] py-10 lg:pt-0 md:!pt-[60px] !pt-[88px] relative bg-white'>
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
          headingClassName='text-primary 2xl:!text-[55px] lg:!text-[53px] md:!text-h2 leading-normal'
          descriptionClassName='text-primary mt-1.5 lg:!text-subtitle2Light'
        />

        <Button className='w-[276px] lg:mt-10 mt-8 py-0' variant='blackOutline'>
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

      <div className='lg:mt-10 md:mt-[34px] mt-3.5 relative'>
        <Image
          src='/assets/Service/serviceHero.png'
          alt='mainPortfolio'
          width={1330}
          height={426}
          className=''
        />

        <div className='bg-white p-1.5 absolute -bottom-10 right-0'>
          <div className='bg-black p-[26px] w-[365px] text-white flex flex-col gap-[15px]'>
            {projectHighlights.map((highlight, index) => (
              <div key={index} className='flex gap-3.5'>
                <div className='text-success'>
                  <CheckIcon />
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
