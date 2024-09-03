/* eslint-disable import/order */
'use client';
import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceCardProps, ServicePoint, servicesData } from './servicesData';

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
const ITService: React.FC = () => (
  <div className='bg-bg lg:py-20 md:py-[60px] py-10 scroll-mt-40' id='whyUs'>
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

      <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[50px] md:gap-10 gap-5 mt-[50px] relative'>
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
      <Button
        className='sm:w-[224px] w-[203px] h-[52px] md:mt-[50px] mt-10 flex mx-auto'
        variant='default'
      >
        <Link
          href='/contact-us'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-3'
        >
          Let’s connect
          <Arrow />
        </Link>
      </Button>
    </div>
  </div>
);

export default ITService;
