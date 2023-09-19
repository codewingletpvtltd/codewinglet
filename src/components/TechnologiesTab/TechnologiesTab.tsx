'use client';
import Image from 'next/image';
import { animated } from '@react-spring/web';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';
import Typography from '../Typography/Typography';
import { tabs } from './constant';
import useAnimation from './useAnimation';

const TechnologiesTab = () => {
  const AnimatedImage = animated(Image);
  const AnimatedTypography = animated(Typography);
  const { fadeLeftRef, fadeLeftSprings } = useAnimation(10 * 1000);

  return (
    <Tabs
      defaultValue='Frontend'
      className='md:border-[1px] border-lightBlack/30 lg:p-[28px] rounded-10 py-[24px]'
    >
      <TabsList className='w-full'>
        {tabs.map(({ label, icon }, index) => (
          <TabsTrigger
            value={label}
            key={index}
            className='w-full flex flex-row justify-center items-center px-[25px] md:p-auto'
          >
            <animated.div ref={fadeLeftRef} style={{ ...fadeLeftSprings }}>
              {icon}
            </animated.div>
            <animated.div ref={fadeLeftRef} style={{ ...fadeLeftSprings }}>
              {label}
            </animated.div>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(({ label, subTitle, tabContent }, index) => (
        <TabsContent value={label} key={index} className='md:mt-0'>
          <div className='mb-[22px] mt-[28px] md:mb-[28px] md:mt-0 text-black'>
            <AnimatedTypography
              variant='body1'
              className='md:text-[22px] xl:text-[25px] font-600'
            >
              {label}
            </AnimatedTypography>
            <AnimatedTypography
              variant='subtitle2'
              className='font-500 mt-[3px] xl:text-[16px]'
            >
              {subTitle}
            </AnimatedTypography>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px]'>
            {tabContent?.map(({ label, icon }, index) => (
              <div key={index} className='flex items-center gap-[15px]'>
                <AnimatedImage
                  src={icon}
                  className='h-[32px] w-[32px] lg:h-[36px] lg:w-[36px]'
                  alt={label}
                />
                <AnimatedTypography
                  variant='subtitle1'
                  className='font-500 text-black lg:text-[18px]'
                >
                  {label}
                </AnimatedTypography>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TechnologiesTab;
