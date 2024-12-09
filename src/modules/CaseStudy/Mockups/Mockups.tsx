'use client';

import Image from 'next/image';

const Mockups = () => (
  <div className='bg-white py-20'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex lg:gap-[30px] gap-5'>
      <div className='overflow-hidden cursor-pointer'>
        <Image
          src='/assets/CaseStudy/Mockups_1.png'
          alt='Mockups'
          className='object-cover object-center transition-transform duration-500 hover:scale-110 lg:w-[839px] w-[389px] lg:h-[698px] h-[340px]'
          width={839}
          height={698}
        />
      </div>
      <div className='flex flex-col lg:gap-[30px] gap-5'>
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
