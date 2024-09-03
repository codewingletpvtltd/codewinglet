/* eslint-disable import/order */
'use client';

import { SectionHeader, Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Image from 'next/image';

const OurVision = () => (
  <>
    <div className='bg-white lg:py-20 md:py-[60px] py-10 relative'>
      <div className='container w-full 2xl:min-w-[1516px] lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <Reveal>
          <SectionHeader
            title={<>Our vison & mission</>}
            description={
              <>
                We empower clients with reliable, high-quality tech solutions
                through innovation!
              </>
            }
          />
        </Reveal>
        <div>
          <span></span>
          <div className='bg-headerBoxBorder w-[1px] 2xl:h-[1141px] h-[960px] absolute top-56 left-1/2 lg:block hidden'></div>
        </div>
        <div className='lg:flex gap-[134px] items-center lg:mt-[98px] mt-8'>
          <Image
            src='/assets/AboutUs/idea.png'
            alt='idea'
            width={686}
            height={309}
            className='2xl:w-[686px] lg:w-[568px] w-full lg:mb-0 mb-3'
          />
          <div className='2xl:w-[472px] lg:w-[568px] w-full'>
            <Typography className='text-primary md:text-subtitle2 text-paragraph2 relative lg:mb-0 mb-2'>
              <span className='bg-black w-[3px] h-5 absolute 2xl:-left-[78px] -left-[68px] top-1 lg:block hidden'></span>
              <Image
                src='/assets/AboutUs/vArrow.svg'
                alt='vArrow'
                width={27}
                height={8}
                className='absolute 2xl:-left-[78px] -left-[68px] top-2.5 lg:block hidden'
              />
              INNOVATION IDEA
            </Typography>
            <Typography className='text-secondary md:text-subtitle2Light text-tagLight'>
              To help entrepreneurs and creative thinkers translate their ideas
              into reality using the power of emotional intelligence by giving
              world-class facilities to our staff.
            </Typography>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:gap-[134px] gap-3 items-center lg:my-[60px] my-[34px]'>
          <div className='2xl:w-[696px] xl:w-[568px] w-full flex lg:justify-end lg:order-1 order-2'>
            <div className='lg:w-[472px] lg:text-right'>
              <Typography className='text-primary md:text-subtitle2 text-paragraph2 relative lg:mb-0 mb-2'>
                <span className='bg-black w-[3px] h-5 absolute 2xl:-right-[79px] -right-[66px] top-1 lg:block hidden'></span>
                <Image
                  src='/assets/AboutUs/vArrow.svg'
                  alt='vArrow'
                  width={27}
                  height={8}
                  className='absolute 2xl:-right-[78px] -right-[66px] top-2.5 rotate-180 lg:block hidden'
                />
                OUR VISION
              </Typography>
              <Typography className='text-secondary md:text-subtitle2Light text-tagLight'>
                To help our customers accomplish their objectives by providing
                reliable and high-quality solutions through technology and
                creativity.
              </Typography>
            </div>
          </div>
          <Image
            src='/assets/AboutUs/vision.png'
            alt='vision'
            width={686}
            height={309}
            className='lg:order-2 order-1 2xl:w-[686px] xl:w-[568px] w-full'
          />
        </div>
        <div className='lg:flex gap-[134px] items-center lg:mb-[50px]'>
          <Image
            src='/assets/AboutUs/mission.png'
            alt='mission'
            width={686}
            height={309}
            className='2xl:w-[686px] lg:w-[568px] w-full lg:mb-0 mb-3'
          />
          <div className='2xl:w-[472px] lg:w-[568px] w-full'>
            <Typography className='text-primary md:text-subtitle2 text-paragraph2 relative lg:mb-0 mb-2'>
              <span className='bg-black w-[3px] h-5 absolute 2xl:-left-[78px] -left-[68px] top-1 lg:block hidden'></span>
              <Image
                src='/assets/AboutUs/vArrow.svg'
                alt='vArrow'
                width={27}
                height={8}
                className='absolute 2xl:-left-[78px] -left-[68px] top-2.5 lg:block hidden'
              />
              OUR MISSION
            </Typography>
            <Typography className='text-secondary md:text-subtitle2Light text-tagLight'>
              To help entrepreneurs and creative thinkers translate their ideas
              into reality using the power of emotional intelligence by giving
              world-class facilities to our staff.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default OurVision;
