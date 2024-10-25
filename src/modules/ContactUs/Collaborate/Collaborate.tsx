'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const Collaborate = () => (
  <div
    className='text-white lg:py-[50px] sm:py-[50px] py-[30px] relative'
    style={{
      backgroundImage: 'url("/assets/ContactUs/professionalBg.png")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='2xl:w-[356px] xl:w-[480px]'>
          <Image
            src={'/assets/ContactUs/professional.png'}
            alt='Arrow'
            width={600}
            height={630}
            className='professional-img absolute bottom-0 2xl:w-[21%] xl:w-[28%] lg:block hidden'
          />
        </div>

        <div className='relative 2xl:pl-[15%] xl:pl-[15%]'>
          <SectionHeader
            title={<>Collaborate with our experts for professional guidance</>}
            headingClassName='text-white lg:pr-20 lg:text-left sm:text-center text-left'
            descriptionClassName='!hidden'
          />

          <Typography className='lg:text-paragraph1ExtraLight sm:text-paragraph1ExtraLight text-tagLight sm:mt-[30px] mt-5 flex flex-wrap lg:justify-start sm:justify-center justify-start gap-[18px]'>
            <span className='relative sm:pl-8 pl-6 2xl:order-1'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-5 w-[15px]'
              />
              Unlock personalized quotations
            </span>
            <span className='relative sm:pl-8 pl-6 2xl:order-2'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-5 w-[15px]'
              />
              Discover industry-specific solutions
            </span>
            <span className='relative sm:pl-8 pl-6 2xl:order-3 xl:order-5 order-5'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-5 w-[15px]'
              />{' '}
              Boost business growth
            </span>
            <span className='relative sm:pl-8 pl-6 2xl:order-4'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-5 w-[15px]'
              />{' '}
              Overcome business challenges
            </span>
            <span className='relative sm:pl-8 pl-6 2xl:order-5'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-5 w-[15px]'
              />{' '}
              Experience our dedicated support
            </span>
          </Typography>

          <Typography className='sm:text-paragraph1ExtraLight text-tagLight text-secondary lg:text-left sm:text-center text-left lg:mb-0 sm:mt-[50px] mb-5 mt-5'>
            Book your Free
            <span className='text-white'> 30 minutes expert </span>
            consultation now
          </Typography>
          <Button className='sm:w-[233px] w-full lg:m-[initial] 2xl:mt-[30px] xl:mt-5 block m-auto'>
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Talk to our expert
              <Arrow />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Collaborate;
