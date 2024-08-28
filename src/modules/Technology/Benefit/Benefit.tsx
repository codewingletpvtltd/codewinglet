/* eslint-disable import/order */
'use client';

import Image from 'next/image';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const Benefit = () => {
  const items = [
    'A Cross-platform Development',
    'A High-quality Application',
    'Enhances Speed as well as Performance',
    'Technical Benefits',
  ];
  return (
    <>
      <div className='bg-white md:py-20 py-10 scroll-mt-40' id='benefit'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex gap-[86px]'>
          <div className='lg:mt-14 relative lg:w-[655px]'>
            <SectionHeader
              title={<>The benefit of Angular JS in app development</>}
              description={
                <>
                  Launching effective web-based goods is a multifaceted and
                  challenging journey. Understanding market trends and consumer
                  needs, discovering product opportunities.
                </>
              }
              headingClassName='text-primary'
              descriptionClassName='text-secondary !text-paragraph1ExtraLight'
            />

            <ul className='md:mt-[70px] mt-10 flex flex-col gap-5'>
              {items.map((item, index) => (
                <li
                  key={index}
                  className='relative !pl-12 md:p-5 p-4 text-primary bg-bg lg:w-fit md:text-subtitle2 text-tag'
                >
                  <Image
                    src={'/assets/OurService/check.svg'}
                    alt='Arrow'
                    width={16}
                    height={16}
                    className='absolute left-5 md:top-7 top-5 sm:w-[16px] w-[15px]'
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:w-[669px] lg:mt-0 mt-10'>
            <Image
              src='/assets/Technologies/pages/benefit.jpg'
              alt='benefit'
              width={669}
              height={737}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
