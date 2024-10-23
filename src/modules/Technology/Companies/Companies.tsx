'use client';
import Image from 'next/image';

import { SectionHeader } from '@codewinglet/components';

const Companies = () => (
  <>
    <div className='bg-white sm:py-20 py-10 scroll-mt-40' id='whoUsed'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Top Companies Using Angular</>}
          description={
            <>
              Explore leading companies leveraging Angular for dynamic web
              applications
            </>
          }
          headingClassName='text-primary lg:!text-h2 md:!text-[35px] !text-subtitle2 text-center'
          descriptionClassName='text-secondary text-center'
        />
        <div className='relative'>
          <div className='absolute top-0 left-1/2 w-[1px] h-[122px] bg-primary lg:hidden'></div>
          <div className='absolute bottom-5 left-1/2 w-[1px] h-[122px] bg-primary lg:hidden'></div>
          <div className='grid lg:grid-cols-5 grid-cols-2 mt-[50px] relative lg:after:hidden after:content after:absolute after:bottom-1/2 after:left-0 after:w-full after:h-[1px] after:bg-primary'>
            <Image
              src='/assets/Technologies/pages/microsoft.svg'
              alt='microsoft'
              width={195}
              height={42}
              className='lg:py-8 md:py-[50px] py-[30px] md:px-0 px-[30px] 2xl:mx-[40px] lg:mx-[84px] m-auto lg:w-[195px]'
            />
            <Image
              src='/assets/Technologies/pages/ibm.svg'
              alt='ibm'
              width={98}
              height={42}
              className='lg:py-8 md:py-[50px] py-[30px] md:px-0 px-[30px] 2xl:mx-auto lg:mx-[84px] m-auto lg:w-auto'
            />
            <Image
              src='/assets/Technologies/pages/google.svg'
              alt='google'
              width={124}
              height={42}
              className='lg:py-8 md:py-[50px] py-[30px] md:px-0 px-[30px] 2xl:mx-auto lg:mx-[84px] m-auto lg:w-auto'
            />

            <Image
              src='/assets/Technologies/pages/forbes.svg'
              alt='ibm'
              width={148}
              height={42}
              className='lg:py-8 md:py-[50px] py-[30px] md:px-0 px-[30px] 2xl:mx-auto lg:mx-[84px] m-auto lg:w-auto'
            />
            <Image
              src='/assets/Technologies/pages/paypal.svg'
              alt='paypal'
              width={156}
              height={42}
              className='lg:py-8 md:py-[50px] py-[30px] md:px-0 px-[30px] 2xl:mx-auto lg:mx-[84px] m-auto lg:w-auto'
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Companies;
