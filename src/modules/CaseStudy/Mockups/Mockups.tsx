'use client';

import Image from 'next/image';

const Mockups = () => (
  <div className='bg-white lg:py-20'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[30px]'>
      <div className='overflow-hidden cursor-pointer'>
        <Image
          src='/assets/CaseStudy/Mockups_1.png'
          alt='Mockups'
          className='object-cover object-center transition-transform duration-500 hover:scale-110'
          width={839}
          height={698}
        />
      </div>
      <div className='flex flex-col gap-[30px]'>
        <div className='overflow-hidden cursor-pointer'>
          <Image
            src='/assets/CaseStudy/Mockups_2.png'
            alt='Mockups'
            className='object-cover object-center transition-transform duration-500 hover:scale-110'
            width={541}
            height={334}
          />
        </div>
        <div className='overflow-hidden cursor-pointer'>
          <Image
            src='/assets/CaseStudy/Mockups_2.png'
            alt='Mockups'
            className='object-cover object-center transition-transform duration-500 hover:scale-110'
            width={541}
            height={334}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Mockups;
