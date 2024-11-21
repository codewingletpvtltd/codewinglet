'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

import { ModelCardProps, ModelPoint, modelData } from './modelData';

const ModelPoints: React.FC<{ points: ModelPoint[] }> = ({ points }) => (
  <>
    <div className='flex flex-col gap-5 pt-[15px]'>
      {points.map((point, pointIndex) => (
        <div key={pointIndex}>
          <div className='relative pl-11'>
            <div className='text-success absolute left-0 -top-0.5'>
              <CheckIcon />
            </div>
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
  icon,
  title,
  description,
  points,
}) => (
  <div className='bg-white p-[15px] h-fit hover:-translate-y-4 transition-all ease-linear duration-300 cursor-pointer group w-[447px]'>
    <div className='bg-black flex gap-[26px] items-center p-[25px] transition-all duration-300'>
      <div className='bg-white w-[68px] h-[68px] flex items-center justify-center rounded-full text-primary transition-all duration-300'>
        <img src={icon} alt={icon} />
      </div>
      <Typography className='lg:text-h6 text-tagBold text-white'>
        {title}
      </Typography>
    </div>
    <div className='px-2.5 pb-[15px]'>
      <Typography className='lg:text-paragraph2Light text-tagBold text-secondary py-[15px] border-headerBoxBorder border-dashed border-b'>
        {description}
      </Typography>
      <ModelPoints points={points} />
    </div>
  </div>
);

// Main component
const FlexibleModels: React.FC = () => (
  <div className='bg-black lg:py-20 md:py-[60px] py-10 scroll-mt-40' id='whyUs'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex gap-[65px]'>
      <div className='bg-primary text-white p-5 w-[400px]'>
        <Image
          src='/assets/Technologies/pages/flexible_model.png'
          alt='flexible_model'
          width={360}
          height={267}
        />
        <Typography className='text-h6 font-light mt-[30px]'>
          Hire Expert Developers
        </Typography>
        <Typography className='text-[23px] font-light'>
          With <span className='font-semibold'>15-Day Risk-Free Trial</span>
        </Typography>
        <Image
          src='/assets/Technologies/pages/developerCurve.png'
          alt='developerCurve'
          width={264}
          height={19}
          className='ml-[58px]'
        />
        <Typography className='text-paragraph2Light pt-[38px] flex gap-2.5 items-baseline'>
          <Arrow className='flex-shrink-0' />
          We’re offering a risk-free 15-day trial to help you assess our
          expertise and workflow.
        </Typography>
        <Typography className='text-paragraph2Light pt-[15px] flex gap-2.5 items-baseline'>
          <Arrow className='flex-shrink-0' />
          Experience our capabilities without any financial commitment.
        </Typography>

        <Button
          className='w-[331px] lg:mt-[60px] mt-8 py-0 text-primary hover:text-white hover:border-white border'
          variant='secondary'
        >
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Hire Angular Development
          </Link>
        </Button>
      </div>
      <div>
        <SectionHeader
          title={<>Flexible Engagement Models</>}
          description={
            <>
              Select a model that fits your project requirements, budget,
              timeline.
            </>
          }
          headingClassName='text-white'
          descriptionClassName='text-white'
        />

        <div className='lg:gap-[50px] md:gap-10 gap-5 mt-[50px] relative flex'>
          {modelData.map((service, index) => (
            <ModelCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              points={service.points}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default FlexibleModels;
