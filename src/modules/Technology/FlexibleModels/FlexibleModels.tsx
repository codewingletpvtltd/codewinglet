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
            <Typography className='lg:text-paragraph2 text-paragraph1Light text-primary'>
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
  <div className='bg-white p-[15px] hover:-translate-y-4 transition-all ease-linear duration-300 cursor-pointer group 2xl:w-[447px] lg:w-[400px] h-auto'>
    <div className='bg-black flex gap-[26px] items-center p-[25px] transition-all duration-300'>
      <div className='bg-white w-[68px] h-[68px] flex items-center justify-center rounded-full text-primary transition-all duration-300'>
        <img src={icon} alt={icon} />
      </div>
      <Typography className='2xl:text-h6 lg:text-subtitle2 text-subtitle2 text-white'>
        {title}
      </Typography>
    </div>
    <div className='px-2.5 pb-[15px]'>
      <Typography className='lg:text-paragraph2Light text-paragraph2Light text-secondary py-[15px] border-headerBoxBorder border-dashed border-b'>
        {description}
      </Typography>
      <ModelPoints points={points} />
    </div>
  </div>
);

// Main component
const FlexibleModels: React.FC = () => (
  <>
    <div
      className='bg-black lg:py-20 md:py-[60px] py-10 scroll-mt-40'
      id='whyUs'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex 2xl:gap-[65px] gap-10'>
        <SectionHeader
          title={<>Flexible Engagement Models</>}
          description={
            <>
              Select a model that fits your project requirements, budget,
              timeline.
            </>
          }
          headingClassName='text-white lg:hidden block'
          descriptionClassName='text-white lg:!text-subtitle2Light !text-paragraph1ExtraLight lg:hidden block mb-10'
        />
        <div className='bg-primary text-white p-5 lg:w-[400px] lg:block flex gap-[30px]'>
          <Image
            src='/assets/Technologies/pages/flexible_model.png'
            alt='flexible_model'
            width={360}
            height={267}
            className='lg:w-[360px] w-[272px] object-cover'
          />

          <div>
            <Typography className='text-h6 font-light lg:mt-[30px] mt-2.5'>
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
            <Typography className='text-paragraph2Light lg:pt-[38px] pt-5 flex gap-2.5 items-baseline'>
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
            headingClassName='text-white lg:block hidden'
            descriptionClassName='text-white lg:block hidden'
          />

          <div className='2xl:gap-[50px] md:gap-[30px] gap-5 lg:mt-[50px] mt-[30px] relative flex lg:flex-row flex-col'>
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
  </>
);

export default FlexibleModels;
