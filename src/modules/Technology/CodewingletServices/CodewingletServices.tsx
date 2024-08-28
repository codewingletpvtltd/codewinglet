/* eslint-disable import/order */
'use client';
import { Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Image from 'next/image';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { ServiceCardProps, ServicePoint, servicesData } from './servicesData'; // Import the data and interfaces

// Subcomponent for Service Points
const ServicePoints: React.FC<{ points: ServicePoint[] }> = ({ points }) => (
  <>
    {points.map((point, pointIndex) => (
      <div className='pt-5 px-2.5' key={pointIndex}>
        <div className='relative pl-6'>
          <Image
            src={'/assets/OurService/check.svg'}
            alt='Arrow'
            width={16}
            height={16}
            className='absolute left-0 top-1.5 sm:w-[14px] w-[15px]'
          />
          <Typography className='lg:text-paragraph2 text-tagBold text-primary pb-2'>
            {point.heading}
          </Typography>
        </div>
        <Typography className='text-secondary lg:text-tagLight text-tagExtraLight'>
          {point.description}
        </Typography>
      </div>
    ))}
  </>
);

// Subcomponent for Service Card
const ServiceCard: React.FC<ServiceCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  points,
}) => (
  <div className='bg-white p-5'>
    <div className='bg-bg flex gap-4 items-center lg:px-5 px-4 lg:py-[30px] py-5'>
      <Image src={iconSrc} alt={iconAlt} width={32} height={32} />
      <Typography className='lg:text-paragraph1Bold text-tagBold'>
        {title}
      </Typography>
    </div>
    <ServicePoints points={points} />
  </div>
);

// Main component
const CodewingletServices: React.FC = () => (
  <div className='bg-bg lg:py-20 md:py-[60px] py-10'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <Reveal>
        <SectionHeader
          title={<>Why Choose Codewinglet's IT Services?</>}
          description={
            <>Optimized customized software solutions to empower your niche.</>
          }
          headingClassName='text-primary'
          descriptionClassName='text-primary'
        />
      </Reveal>

      <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-[50px] gap-10 mt-[50px] relative'>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            iconSrc={service.iconSrc}
            iconAlt={service.iconAlt}
            title={service.title}
            points={service.points}
          />
        ))}
      </div>
    </div>
  </div>
);

export default CodewingletServices;
