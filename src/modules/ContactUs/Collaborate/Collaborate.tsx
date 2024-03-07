'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

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
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='2xl:w-[356px] xl:w-[480px]'>
          <Image
            src={'/assets/ContactUs/professional.png'}
            alt='Arrow'
            width={600}
            height={630}
            className='absolute 2xl:top-[-3.7%] xl:top-[-8.3%] 2xl:w-[19%] xl:w-[28%] lg:block hidden'
          />
        </div>

        <div className='relative 2xl:w-[1024px] xl:w-[800px] 2xl:pl-[30px] xl:pl-0'>
          <SectionHeader
            title={<>Collaborate with our experts for professional guidance</>}
            headingClassName='text-white lg:pr-20 lg:text-left sm:text-center text-left'
            descriptionClassName='!hidden'
          />
          <Typography className='lg:text-paragraph1Light sm:text-paragraph2Light text-tagLight sm:mt-[30px] mt-5 2xl:mb-14 xl:mb-[50px] flex flex-wrap lg:justify-start sm:justify-center justify-start gap-[18px]'>
            <span className='relative sm:pl-8 pl-6 2xl:order-1'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-[20px] w-[15px]'
              />
              Unlock personalized quotations
            </span>
            <span className='relative sm:pl-8 pl-6 2xl:order-2'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-[20px] w-[15px]'
              />{' '}
              Discover industry-specific solutions
            </span>
            <span className='relative sm:pl-8 pl-6 2xl:order-3 xl:order-5 order-5'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-[20px] w-[15px]'
              />{' '}
              Boost business growth
            </span>
            <span className='relative sm:pl-8 pl-6 2xl:order-4'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-[20px] w-[15px]'
              />{' '}
              Overcome business challenges
            </span>
            <span className='relative sm:pl-8 pl-6 2xl:order-5'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5 sm:w-[20px] w-[15px]'
              />{' '}
              Experience our dedicated support
            </span>
          </Typography>
          <Typography className='sm:text-paragraph1 text-tagLight font-300 text-secondary lg:text-left sm:text-center text-left lg:mb-0 sm:mt-10 mb-5 mt-5'>
            Book your Free
            <span className='text-white'> 30 minutes expert </span>
            consultation now
          </Typography>
          <Button className=' sm:w-[233px] w-full lg:m-[initial] 2xl:mt-[30px] xl:mt-5 block m-auto'>
            <Link
              href='#'
              rel='noopener noreferrer'
              target='_blank'
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
