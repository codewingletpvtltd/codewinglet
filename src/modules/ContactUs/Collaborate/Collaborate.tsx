'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography } from '@codewinglet/components';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const Collaborate = () => (
  <div className='text-white lg:py-20 py-[50px] relative'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='2xl:w-[356px] xl:w-[480px]'>
          <Image
            src={'/assets/ContactUs/guidance.png'}
            alt='Arrow'
            width={401}
            height={630}
            className='absolute 2xl:top-[-5.1%] xl:top-[-10.2%] 2xl:w-[19%] xl:[w-28%] lg:block hidden'
          />
        </div>

        <div className='relative 2xl:w-[1024px] xl:w-[800px] 2xl:pl-[30px] xl:pl-0'>
          <SectionHeader
            title={<>Collaborate with our experts for professional guidance</>}
            headingClassName='text-white pr-5 lg:text-left text-center'
            descriptionClassName='!hidden'
          />
          <Typography className='lg:text-paragraph1Light text-paragraph2Light mt-5 2xl:mb-14 xl:mb-[50px] flex flex-wrap lg:justify-start justify-center gap-[18px]'>
            <span className='relative pl-8 2xl:order-1'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5'
              />
              Unlock personalized quotations
            </span>
            <span className='relative pl-8 2xl:order-2'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5'
              />{' '}
              Discover industry-specific solutions
            </span>
            <span className='relative pl-8 2xl:order-3 xl:order-5 order-5'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5'
              />{' '}
              Boost business growth
            </span>
            <span className='relative pl-8 2xl:order-4'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5'
              />{' '}
              Overcome business challenges
            </span>
            <span className='relative pl-8 2xl:order-5'>
              <Image
                src={'/assets/ContactUs/check.svg'}
                alt='Arrow'
                width={20}
                height={20}
                className='absolute left-0 top-1.5'
              />{' '}
              Experience our dedicated support
            </span>
          </Typography>
          <Typography className='text-paragraph1 font-300 text-secondary lg:text-left text-center lg:mb-0 lg:mt-0 mb-5 mt-10'>
            Book your Free
            <span className='text-white'> 30 minutes expert </span>
            consultation now
          </Typography>
          <Button className=' w-[233px] lg:m-[initial] 2xl:mt-[30px] xl:mt-5 block m-auto'>
            <Link
              href='#'
              rel='noopener noreferrer'
              target='_blank'
              className='flex items-center justify-center gap-3'
            >
              Talk to our expert
              <Image
                src={'/assets/icons/Arrow.svg'}
                alt='Arrow'
                width={16}
                height={16}
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Collaborate;
