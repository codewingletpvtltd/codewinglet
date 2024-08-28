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
      <div className='bg-white lg:py-20 md:py-[60px] py-10'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex gap-[86px]'>
          <div className='mt-[50px] relative w-[655px]'>
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
              descriptionClassName='text-secondary'
            />

            <ul className='mt-[70px] flex flex-col gap-5'>
              {items.map((item, index) => (
                <li
                  key={index}
                  className='relative pl-11 p-5 text-primary bg-bg w-fit'
                >
                  <Image
                    src={'/assets/OurService/check.svg'}
                    alt='Arrow'
                    width={16}
                    height={16}
                    className='absolute left-5 top-6 sm:w-[14px] w-[15px]'
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-[669px]'>
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
