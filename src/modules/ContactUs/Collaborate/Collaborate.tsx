'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography } from '@codewinglet/components';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const Collaborate = () => (
  <div className='text-white py-20 relative'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <div className='flex justify-between items-center gap-[113px]'>
        <div className='w-[30%]'>
          <Image
            src={'/assets/ContactUs/collaborate.png'}
            alt='Arrow'
            width={383}
            height={559}
            className='absolute top-[-13.3%]'
          />
        </div>

        <div className='relative'>
          <SectionHeader
            title={<>Collaborate with our experts for professional guidance</>}
            headingClassName='text-white pr-5'
            descriptionClassName='!hidden'
          />
          <Typography className='text-h5 flex gap-10 mt-5 mb-14'>
            <span className='relative after:content after:absolute after:top-[5px] after:right-[-22px] after:w-[1px] after:h-[24px] after:bg-dropBorder'>
              Get personalized quotations
            </span>
            <span className='relative after:content after:absolute after:top-[5px] after:right-[-22px] after:w-[1px] after:h-[24px] after:bg-dropBorder'>
              Kickstart your dream project
            </span>
            <span>Kickstart your dream</span>
          </Typography>
          <Typography className='text-body2 font-300 text-dropdownText'>
            Book your Free
            <span className='text-white'> 30 minutes expert </span>
            consultation now
          </Typography>
          <Button className=' w-[233px] m-[initial] mt-[30px]'>
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
