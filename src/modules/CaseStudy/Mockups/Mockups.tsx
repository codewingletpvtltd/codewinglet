'use client';

import Image from 'next/image';

const Mockups = () => (
  <div className='bg-white lg:py-20 md:py-[60px] py-10'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto md:flex lg:gap-[30px] gap-5'>
      <div className='overflow-hidden cursor-pointer'>
        <Image
          src='/assets/CaseStudy/Mockups_1.png'
          alt='Mockups'
          className='object-cover object-center transition-transform duration-500 hover:scale-110 lg:w-[839px] md:w-[389px] lg:h-[698px] md:h-[340px]'
          width={839}
          height={698}
        />
      </div>
      <div className='flex md:flex-col lg:gap-[30px] gap-5 md:mt-0 mt-[15px]'>
        <div className='overflow-hidden cursor-pointer'>
          <Image
            src='/assets/CaseStudy/Mockups_2.png'
            alt='Mockups'
            className='object-cover object-center transition-transform duration-500 hover:scale-110 lg:w-[541px] w-[279px] lg:h-[334px] h-[160px]'
            width={541}
            height={334}
          />
        </div>
        <div className='overflow-hidden cursor-pointer'>
          <Image
            src='/assets/CaseStudy/Mockups_2.png'
            alt='Mockups'
            className='object-cover object-center transition-transform duration-500 hover:scale-110 lg:w-[541px] w-[279px] lg:h-[334px] h-[160px]'
            width={541}
            height={334}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Mockups;
