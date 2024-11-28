'use client';

import Image from 'next/image';

import { SectionHeader } from '@codewinglet/components';
interface CompaniesProps {
  details: any;
}
const Companies = ({ details }: CompaniesProps) => (
  <div
    className='bg-white lg:py-20 md:py-[60px] py-10 scroll-mt-40'
    id='whoUsed'
  >
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <SectionHeader
        title={<>{details?.title?.text}</>}
        description={<>{details?.description?.text}</>}
        headingClassName='text-primary lg:!text-h2 md:!text-[35px] !text-subtitle2 text-center'
        descriptionClassName='text-primary text-center lg:!text-subtitle2Light md:!text-paragraph1ExtraLight'
      />
      <div className='relative overflow-hidden'>
        <div className='md:mt-[50px] mt-5 relative marquee flex flex-shrink-0 2xl:gap-24 lg:gap-0 md:gap-24'>
          {details?.companiesList.map((company: any) => (
            <Image
              key={company.image.url}
              src={company.image.url}
              alt={company.title}
              width={195}
              height={42}
              className='lg:py-8 md:py-[50px] py-[30px] md:px-0 px-[30px] 2xl:mx-[40px] lg:mx-[84px] m-auto lg:w-[195px]'
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Companies;
