'use client';

import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';

const OurVision = () => (
  <>
    <div className='bg-white lg:py-20 md:py-[60px] py-10 relative'>
      <div className='container w-full 2xl:min-w-[1516px] lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Our vision & mission</>}
          description={
            <>
              We empower clients with reliable, high-quality tech solutions
              through innovation!
            </>
          }
        />
        <div>
          <div className='bg-headerBoxBorder w-[1px] 2xl:h-[690px] h-[590px] absolute top-56 left-1/2 lg:block hidden'></div>
        </div>
        <div className='flex lg:flex-row flex-col lg:gap-[134px] gap-3 items-center lg:my-[60px] my-[34px]'>
          <div className='2xl:w-[696px] xl:w-[568px] w-full flex lg:justify-end lg:order-1 order-2'>
            <div className='lg:w-auto lg:text-right'>
              <Typography className='text-primary md:text-subtitle2 text-paragraph2 relative lg:mb-0 mb-2'>
                <span className='bg-black w-[3px] h-5 absolute 2xl:-right-[79px] -right-[66px] top-1 lg:block hidden'></span>
                <Image
                  src='/assets/AboutUs/Arrow.svg'
                  alt='Arrow'
                  width={27}
                  height={8}
                  className='absolute 2xl:-right-[78px] -right-[66px] top-2.5 rotate-180 lg:block hidden'
                />
                OUR VISION
              </Typography>
              <Typography className='text-secondary md:text-subtitle2Light text-tagLight'>
                Our vision is to pioneer innovative technological solutions that
                empower businesses and individuals to thrive in the digital era.
                We aspire to be a global leader in IT, driving positive change
                through cutting-edge advancements and unwavering commitment to
                excellence.
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
          <div className='2xl:w-auto lg:w-[568px] w-full'>
            <Typography className='text-primary md:text-subtitle2 text-paragraph2 relative lg:mb-0 mb-2'>
              <span className='bg-black w-[3px] h-5 absolute 2xl:-left-[78px] -left-[68px] top-1 lg:block hidden'></span>
              <Image
                src='/assets/AboutUs/Arrow.svg'
                alt='Arrow'
                width={27}
                height={8}
                className='absolute 2xl:-left-[78px] -left-[68px] top-2.5 lg:block hidden'
              />
              OUR MISSION
            </Typography>
            <Typography className='text-secondary md:text-subtitle2Light text-tagLight'>
              At Codewinglet, we deliver tailored IT services and solutions,
              leveraging the latest technologies to meet our clients' unique
              needs. With a focus on innovation and collaboration, we
              consistently exceed expectations. Our integrity, expertise, and
              dedication make us the trusted partner for navigating the digital
              landscape and driving growth.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default OurVision;
