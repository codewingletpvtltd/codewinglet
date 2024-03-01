'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography } from '@codewinglet/components';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const Collaborate = () => (
  <div className='text-white py-20 relative'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <div className='flex justify-between items-center gap-[113px]'>
        <div className='2xl:w-[30%] xl:w-6/12'>
          <Image
            src={'/assets/ContactUs/collaborate.png'}
            alt='Arrow'
            width={383}
            height={559}
            className='absolute 2xl:top-[-13.2%] xl:top-[-10.2%]'
          />
        </div>

        <div className='relative'>
          <SectionHeader
            title={<>Collaborate with our experts for professional guidance</>}
            headingClassName='text-white pr-5'
            descriptionClassName='!hidden'
          />
          <Typography className='text-h5 2xl:flex xl:block gap-10 mt-5 2xl:mb-14 xl:mb-[50px]'>
            <span className='relative after:content after:absolute after:top-[5px] 2xl:after:right-[-22px] xl:after:right-[22px] after:w-[1px] after:h-[24px] after:bg-dropBorder 2xl:w-auto xl:w-[47%] 2xl:block xl:inline-block'>
              Get personalized quotations
            </span>
            <span className='relative 2xl:after:block xl:after:hidden after:content after:absolute after:top-[5px] after:right-[-22px] after:w-[1px] after:h-[24px] after:bg-dropBorder 2xl:w-auto xl:w-[50%] 2xl:block xl:inline-block'>
              Kickstart your dream project
            </span>
            <span>Kickstart your dream</span>
          </Typography>
          <Typography className='text-body2 font-300 text-dropdownText'>
            Book your Free
            <span className='text-white'> 30 minutes expert </span>
            consultation now
          </Typography>
          <Button className=' w-[233px] m-[initial] 2xl:mt-[30px] xl:mt-5'>
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
