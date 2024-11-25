'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

import { ModelCardProps, ModelPoint, modelData } from './modelData';

const ModelPoints: React.FC<{ points: ModelPoint[] }> = ({ points }) => (
  <>
    <div className='flex flex-col md:gap-5 gap-3 pt-[15px]'>
      {points.map((point, pointIndex) => (
        <div key={pointIndex}>
          <div className='relative md:pl-11 pl-8'>
            <div className='text-success absolute left-0 md:-top-0.5 top-[1px]'>
              <CheckIcon className='w-5 h-5' />
            </div>
            <Typography className='lg:text-paragraph2 md:text-paragraph1Light text-tagLight text-primary'>
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
    <div className='bg-black flex gap-[26px] items-center md:p-[25px] p-3 transition-all duration-300'>
      <div className='bg-white md:w-[68px] md:h-[68px] w-10 h-10 flex items-center justify-center rounded-full text-primary transition-all duration-300'>
        <Image
          src={icon}
          alt={icon}
          className='md:w-[30px] w-4 md:h-[30px] h-4'
          width={30}
          height={30}
        />
      </div>
      <Typography className='2xl:text-h6 lg:text-subtitle2 md:text-subtitle2 text-paragraph2 text-white'>
        {title}
      </Typography>
    </div>
    <div className='md:px-2.5 md:pb-[15px]'>
      <Typography className='lg:text-paragraph2Light md:text-paragraph2Light text-tagExtraLight text-secondary py-[15px] border-headerBoxBorder border-dashed border-b'>
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
          descriptionClassName='text-white lg:!text-subtitle2Light md:!text-paragraph1ExtraLight !text-tagLight lg:hidden block md:mb-10 mb-5'
        />
        <div className='bg-primary text-white p-5 lg:w-[400px] lg:block md:flex block gap-[30px]'>
          <Image
            src='/assets/Technologies/pages/flexible_model.png'
            alt='flexible_model'
            width={360}
            height={267}
            className='lg:w-[360px] md:w-[272px] object-cover'
          />

          <div>
            <Typography className='md:text-h6 text-paragraph2 font-light lg:mt-[30px] mt-2.5 md:text-left text-center'>
              Hire Expert Developers
            </Typography>
            <Typography className='md:text-[23px] text-paragraph2 font-light md:text-left text-center'>
              With <span className='font-semibold'>15-Day Risk-Free Trial</span>
            </Typography>
            <Image
              src='/assets/Technologies/pages/developerCurve.png'
              alt='developerCurve'
              width={264}
              height={19}
              className='md:ml-[58px] sm:ml-4 md:w-[264px] w-[181px] m-auto'
            />
            <Typography className='md:text-paragraph2Light text-tagExtraLight lg:pt-[38px] pt-5 flex gap-2.5 items-baseline'>
              <Arrow className='flex-shrink-0' />
              We’re offering a risk-free 15-day trial to help you assess our
              expertise and workflow.
            </Typography>
            <Typography className='md:text-paragraph2Light text-tagExtraLight pt-[15px] flex gap-2.5 items-baseline'>
              <Arrow className='flex-shrink-0' />
              Experience our capabilities without any financial commitment.
            </Typography>

            <Button
              className='md:w-[331px] w-full lg:mt-[60px] mt-8 py-0 text-primary hover:text-white hover:border-white border'
              variant='secondary'
            >
              <Link
                href='/contact-us'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3'
              >
                Hire our Experts <Arrow />
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
