'use client';
import Image from 'next/image';
import React from 'react';

const MockupsSlider: React.FC = () => (
  <section className='overflow-hidden bg-white'>
    <article className='w-max flex animate-mockupSlider'>
      <div>
        <ul className='flex 2xl:gap-[30px] lg:gap-[22px] md:gap-3 gap-[5px]'>
          <li className='w-auto'>
            <Image
              src='/assets/CaseStudy/Mockups_1.png'
              alt='Mockups_1'
              width={839}
              height={800}
              className='2xl:w-[839px] lg:w-[631px] md:w-[335px] w-[161px] 2xl:h-[800px] lg:h-[602px] md:h-80 h-[156px]'
            />
          </li>
          <li className='w-auto flex flex-col justify-between'>
            <Image
              src='/assets/CaseStudy/Mockups_2.png'
              alt='Mockups_1'
              width={541}
              height={385}
              className='2xl:w-[541px] lg:w-[407px] md:w-[216px] w-[105px] 2xl:h-[385px] lg:h-[289px] md:h-[154px] h-[75px]'
            />
            <Image
              src='/assets/CaseStudy/Mockups_3.png'
              alt='Mockups_1'
              width={541}
              height={385}
              className='2xl:w-[541px] lg:w-[407px] md:w-[216px] w-[105px] 2xl:h-[385px] lg:h-[289px] md:h-[154px] h-[75px]'
            />
          </li>
          <li className='w-auto'>
            <Image
              src='/assets/CaseStudy/Mockups_1.png'
              alt='Mockups_1'
              width={839}
              height={800}
              className='2xl:w-[839px] lg:w-[631px] md:w-[335px] w-[161px] 2xl:h-[800px] lg:h-[602px] md:h-80 h-[156px]'
            />
          </li>
          <li className='w-auto flex flex-col justify-between'>
            <Image
              src='/assets/CaseStudy/Mockups_2.png'
              alt='Mockups_1'
              width={541}
              height={385}
              className='2xl:w-[541px] lg:w-[407px] md:w-[216px] w-[105px] 2xl:h-[385px] lg:h-[289px] md:h-[154px] h-[75px]'
            />
            <Image
              src='/assets/CaseStudy/Mockups_3.png'
              alt='Mockups_1'
              width={541}
              height={385}
              className='2xl:w-[541px] lg:w-[407px] md:w-[216px] w-[105px] 2xl:h-[385px] lg:h-[289px] md:h-[154px] h-[75px]'
            />
          </li>
        </ul>
      </div>

      <div className='2xl:ml-[30px] lg:ml-[22px] md:ml-3 ml-[5px]'>
        <ul className='flex 2xl:gap-[30px] lg:gap-[22px] md:gap-3 gap-[5px]'>
          <li className='w-auto'>
            <Image
              src='/assets/CaseStudy/Mockups_1.png'
              alt='Mockups_1'
              width={839}
              height={800}
              className='2xl:w-[839px] lg:w-[631px] md:w-[335px] w-[161px] 2xl:h-[800px] lg:h-[602px] md:h-80 h-[156px]'
            />
          </li>
          <li className='w-auto flex flex-col justify-between'>
            <Image
              src='/assets/CaseStudy/Mockups_2.png'
              alt='Mockups_1'
              width={541}
              height={385}
              className='2xl:w-[541px] lg:w-[407px] md:w-[216px] w-[105px] 2xl:h-[385px] lg:h-[289px] md:h-[154px] h-[75px]'
            />
            <Image
              src='/assets/CaseStudy/Mockups_3.png'
              alt='Mockups_1'
              width={541}
              height={385}
              className='2xl:w-[541px] lg:w-[407px] md:w-[216px] w-[105px] 2xl:h-[385px] lg:h-[289px] md:h-[154px] h-[75px]'
            />
          </li>
          <li className='w-auto'>
            <Image
              src='/assets/CaseStudy/Mockups_1.png'
              alt='Mockups_1'
              width={839}
              height={800}
              className='2xl:w-[839px] lg:w-[631px] md:w-[335px] w-[161px] 2xl:h-[800px] lg:h-[602px] md:h-80 h-[156px]'
            />
          </li>
          <li className='w-auto flex flex-col justify-between'>
            <Image
              src='/assets/CaseStudy/Mockups_2.png'
              alt='Mockups_1'
              width={541}
              height={385}
              className='2xl:w-[541px] lg:w-[407px] md:w-[216px] w-[105px] 2xl:h-[385px] lg:h-[289px] md:h-[154px] h-[75px]'
            />
            <Image
              src='/assets/CaseStudy/Mockups_3.png'
              alt='Mockups_1'
              width={541}
              height={385}
              className='2xl:w-[541px] lg:w-[407px] md:w-[216px] w-[105px] 2xl:h-[385px] lg:h-[289px] md:h-[154px] h-[75px]'
            />
          </li>
        </ul>
      </div>
    </article>
  </section>
);

export default MockupsSlider;
