'use client';

import Image from 'next/image';

import { SectionHeader } from '@codewinglet/components';

const Companies = () => {
  const companies = [
    {
      src: '/assets/Technologies/pages/microsoft.svg',
      alt: 'microsoft',
      width: 195,
      height: 42,
      className:
        'lg:py-8 md:py-[50px] py-[11px] md:px-0 px-[30px] 2xl:mx-[40px] lg:mx-[84px] m-auto lg:w-[195px]',
    },
    {
      src: '/assets/Technologies/pages/ibm.svg',
      alt: 'ibm',
      width: 98,
      height: 42,
      className:
        'lg:py-8 md:py-[50px] py-[11px] md:px-0 px-[30px] 2xl:mx-auto lg:mx-[84px] m-auto lg:w-auto',
    },
    {
      src: '/assets/Technologies/pages/google.svg',
      alt: 'google',
      width: 124,
      height: 42,
      className:
        'lg:py-8 md:py-[50px] py-[11px] md:px-0 px-[30px] 2xl:mx-auto lg:mx-[84px] m-auto lg:w-auto',
    },
    {
      src: '/assets/Technologies/pages/forbes.svg',
      alt: 'forbes',
      width: 148,
      height: 42,
      className:
        'lg:py-8 md:py-[50px] py-[11px] md:px-0 px-[30px] 2xl:mx-auto lg:mx-[84px] m-auto lg:w-auto',
    },
    {
      src: '/assets/Technologies/pages/paypal.svg',
      alt: 'paypal',
      width: 156,
      height: 42,
      className:
        'lg:py-8 md:py-[50px] py-[11px] md:px-0 px-[30px] 2xl:mx-auto lg:mx-[84px] m-auto lg:w-auto',
    },
  ];

  return (
    <div
      className='bg-white lg:py-20 md:py-[60px] py-10 scroll-mt-40'
      id='whoUsed'
    >
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
          descriptionClassName='text-primary text-center lg:!text-subtitle2Light md:!text-paragraph1ExtraLight'
        />
        <div className='relative overflow-hidden'>
          <div className='md:mt-[50px] mt-5 relative marquee flex flex-shrink-0 2xl:gap-24 lg:gap-0 md:gap-24'>
            {companies.map((company, index) => (
              <Image
                key={index}
                src={company.src}
                alt={company.alt}
                width={company.width}
                height={company.height}
                className={company.className}
              />
            ))}
            {companies.map((company, index) => (
              <Image
                key={index}
                src={company.src}
                alt={company.alt}
                width={company.width}
                height={company.height}
                className={company.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
