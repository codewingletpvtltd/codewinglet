'use client';
import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';

import { BenefitCardProps, benefitData } from './benefitData';

// Subcomponent for Service Card
const BenefitCard: React.FC<BenefitCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => (
  <div className='bg-gray-50 hover:bg-white lg:p-[30px] md:p-[25px] p-[15px] group cursor-pointer transform duration-300'>
    <div className='md:block flex items-center gap-3'>
      <div className='bg-white group-hover:bg-gray-50 md:w-[50px] w-10 md:h-[50px] h-10 flex items-center justify-center md:mb-[26px] mb-2 transform duration-300'>
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={28}
          height={28}
          className='group-hover:[transform:_rotateY(180deg)] transform duration-300 md:w-[28px] w-5 md:h-[28px] h-5'
        />
      </div>

      <Typography className='lg:text-subtitle2 text-tagBold pb-2 text-gray-800'>
        {title}
      </Typography>
    </div>
    <Typography className='lg:text-paragraph2Light text-tagBold text-gray-800 font-light'>
      {description}
    </Typography>
  </div>
);

// Main component
const Benefit: React.FC = () => (
  <div
    className='bg-gray-50 lg:py-20 md:py-[60px] py-10 scroll-mt-40'
    id='whyUs'
  >
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <SectionHeader
        title={<>A Simple Guide to Angular Development</>}
        description={
          <>
            Choose AngularJS for its robust MVC architecture, two-way data
            binding, and comprehensive community support. Here’s why it’s
            preferred for dynamic web application development:
          </>
        }
        headingClassName='text-gray-800 lg:text-h2'
        descriptionClassName='text-gray-800 lg:!text-subtitle2Light md:!text-paragraph1ExtraLight'
      />

      <div className='bg-white md:mt-[50px] mt-5'>
        <Typography className='text-gray-800 lg:text-h6 md:text-subtitle2 text-paragraph2 lg:p-[30px] md:p-[25px] p-[15px] border-b border-gray-100'>
          Benefit of using Angular Development
        </Typography>
      </div>
      <div className='bg-white lg:p-[30px] md:p-[25px] p-[15px]'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[30px] md:gap-[25px] gap-[15px] relative'>
          {benefitData.map((service, index) => (
            <BenefitCard
              key={index}
              iconSrc={service.iconSrc}
              iconAlt={service.iconAlt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Benefit;
