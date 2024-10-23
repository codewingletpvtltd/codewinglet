'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import ModelIcon from '@codewinglet/assets/icons/ModelIcon';
import { Button, SectionHeader, Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';

import { ModelCardProps, ModelPoint, modelData } from './modelData';

const ModelPoints: React.FC<{ points: ModelPoint[] }> = ({ points }) => (
  <>
    <div className='flex flex-col gap-5'>
      {points.map((point, pointIndex) => (
        <div key={pointIndex}>
          <div className='relative pl-6'>
            <Image
              src={'/assets/OurService/check.svg'}
              alt='Arrow'
              width={16}
              height={16}
              className='absolute left-0 top-1.5 sm:w-[14px] w-[15px]'
            />
            <Typography className='lg:text-paragraph2 text-tagBold text-primary'>
              {point.heading}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  </>
);

const ModelCard: React.FC<ModelCardProps> = ({
  title,
  description,
  points,
}) => (
  <div className='bg-white p-[15px] first:mt-20 last:mt-20 h-fit hover:-translate-y-4 transition-all ease-linear duration-300 cursor-pointer group'>
    <div className='bg-bg group-hover:bg-[url("/assets/Technologies/pages/bgModel.png")] flex gap-[26px] items-center p-[25px] transition-all duration-300'>
      <div className='bg-black group-hover:bg-white w-[68px] h-[68px] flex items-center justify-center rounded-full text-white group-hover:text-primary transition-all duration-300'>
        <ModelIcon className='' />
      </div>
      <Typography className='lg:text-h6 text-tagBold group-hover:text-white'>
        {title}
      </Typography>
    </div>
    <div className='px-2.5 pb-[15px]'>
      <Typography className='lg:text-paragraph2Light text-tagBold text-secondary pt-[15px] pb-[30px]'>
        {description}
      </Typography>
      <ModelPoints points={points} />
    </div>
  </div>
);

// Main component
const FlexibleModels: React.FC = () => (
  <div className='bg-black lg:py-20 md:py-[60px] py-10 scroll-mt-40' id='whyUs'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <Reveal>
        <SectionHeader
          title={<>Flexible Engagement Models</>}
          description={
            <>
              Follow these simple steps to connect with our expert developers
              and bring your vision to life.
            </>
          }
          headingClassName='text-white text-center'
          descriptionClassName='text-white text-center'
        />
      </Reveal>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[50px] md:gap-10 gap-5 mt-[50px] relative'>
        {modelData.map((service, index) => (
          <ModelCard
            key={index}
            title={service.title}
            description={service.description}
            points={service.points}
          />
        ))}
      </div>
      <Button
        className='sm:w-[286px] w-[203px] h-[52px] md:mt-[50px] mt-10 flex mx-auto'
        variant='outline'
      >
        <Link
          href='/contact-us'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-3'
        >
          Request a Consultation
          <Arrow />
        </Link>
      </Button>
    </div>
  </div>
);

export default FlexibleModels;
