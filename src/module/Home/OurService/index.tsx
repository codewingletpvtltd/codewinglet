'use client';
import { SectionHeader, ServiceCard, Slider } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils';
import { BgWave, ServiceCircleIcon, StarIcon } from '@codewinglet/assets';
import useScreenSize from '@codewinglet/hooks/useScreenSize';
import { lg } from '../../../constants/mediaQueryConst';
import { services } from './utils';

const OurService = () => {
  const isLarge = useScreenSize(lg);
  return (
    <div className='relative pt-[54px] pb-[70px] pl-[19px] pr-[15px] '>
      <BgWave className='z-[-1] absolute top-0 bottom-0 left-0 h-[100%] w-[100%] ' />
      <StarIcon className='absolute hidden md:block right-12 top-[69px] lg:w-[54px] lg:h-[53px] xl:w-[69px] xl:h-[69px] 2xl:w-[92px] 2xl:h-[91px] animate-spin' />
      <div className='lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <SectionHeader
          title='Our Services'
          description='Optimized Custom Software Solutions to Empower Your Niche and Strategic Business Growth'
          highlight={[0]}
          className='mx-[12px]'
        />
        <Slider
          settings={{ initialSlide: 1 }}
          iconsPosition={isLarge ? 'topRight' : 'bottomCenter'}
        >
          {services.map((service, index) => {
            const icon = (
              <div
                className={getClassNames(
                  'h-[48px] min-w-[48px] md:h-[58px] md:min-w-[58px] flex items-center justify-center rounded-[50%]',
                  service.iconBgColor
                )}
              >
                {service.icon}
              </div>
            );
            return (
              <ServiceCard
                key={`service-${index}`}
                title={service.title}
                icon={icon}
                className='py-[27px] px-[23px] !w-[calc(100%-24px)] !h-[calc(100%-30px)] !flex self-center !my-[30px] !mx-[12px] bg-white'
                buttonText='Read More'
              >
                {service.content}
              </ServiceCard>
            );
          })}
        </Slider>
      </div>
      <ServiceCircleIcon className='absolute hidden bottom-[36px] left-[94px] w-[75px] h-[75px] xl:block xl:left-[8px] 2xl:left-[37px] 2xl:w-[101px] 2xl:h-[101px]' />
    </div>
  );
};

export default OurService;
