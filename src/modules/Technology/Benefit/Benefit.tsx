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
  <div className='bg-bg hover:bg-white lg:p-[30px] p-[25px] group cursor-pointer transform duration-300'>
    <div className='bg-white group-hover:bg-bg w-[50px] h-[50px] flex items-center justify-center mb-[26px] transform duration-300'>
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={28}
        height={28}
        className='group-hover:[transform:_rotateY(180deg)] transform duration-300'
      />
    </div>
    <Typography className='lg:text-subtitle2 text-tagBold pb-2 text-primary'>
      {title}
    </Typography>
    <Typography className='lg:text-paragraph2Light text-tagBold text-primary font-light'>
      {description}
    </Typography>
  </div>
);

// Main component
const Benefit: React.FC = () => (
  <div className='bg-bg lg:py-20 md:py-[60px] py-10 scroll-mt-40' id='whyUs'>
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
        headingClassName='text-primary'
        descriptionClassName='text-primary lg:!text-subtitle2Light !text-paragraph1ExtraLight'
      />

      <div className='bg-white mt-[50px]'>
        <Typography className='text-primary lg:text-h6 text-subtitle2 lg:p-[30px] p-[25px] border-b border-headerBoxBorder'>
          Benefit of using Angular Development
        </Typography>
      </div>
      <div className='bg-white lg:p-[30px] p-[25px]'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[30px] md:gap-[25px] gap-5 relative'>
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
