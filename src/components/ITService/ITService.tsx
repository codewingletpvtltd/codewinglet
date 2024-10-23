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
  <div className='bg-bg p-[30px]'>
    <div className='bg-white w-[50px] h-[50px] flex items-center justify-center mb-[26px]'>
      <Image src={iconSrc} alt={iconAlt} width={28} height={28} />
    </div>
    <Typography className='lg:text-subtitle2 text-tagBold pb-2'>
      {title}
    </Typography>
    <Typography className='lg:text-paragraph2Light text-tagBold'>
      {description}
    </Typography>
  </div>
);

// Main component
const ITService: React.FC = () => (
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
        descriptionClassName='text-primary'
      />

      <SectionHeader
        title={<>Why Choose Codewinglet's IT Services?</>}
        description={
          <>Optimized customized software solutions to empower your niche.</>
        }
        headingClassName='text-primary'
        descriptionClassName='text-primary'
      />

      <div className='bg-white mt-[50px]'>
        <Typography className='text-h6 p-[30px] border-b border-headerBoxBorder'>
          Benefit of using Angular Development
        </Typography>
      </div>
      <div className='bg-white p-[30px]'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[30px] md:gap-10 gap-5 relative'>
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

export default ITService;
