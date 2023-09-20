'use client';
import { memo } from 'react';
import Image from 'next/image';
import { SectionHeader, ServiceCard, Slider } from '@codewinglet/components';
import { BackgroundDonutShadow, BgWave, StarIcon } from '@codewinglet/assets';
import useScreenSize from '@codewinglet/hooks/useScreenSize';
import { getClassNames } from '@codewinglet/utils/cn';
import { md } from '../../../constants/mediaQueryConst';
import { services } from './utils';

const OurService = () => {
  const isLarge = useScreenSize(md);
  return (
    <div
      className={getClassNames(
        'relative pt-[54px] pb-[70px] p-[20px] md:px-[38px]',
        !isLarge ? 'bg-aliceBlue z-30' : ''
      )}
    >
      {isLarge && (
        <BgWave className='z-[-1] absolute top-0 bottom-0 left-0 h-[100%] w-[100%] ' />
      )}
      <StarIcon className='absolute hidden md:block right-12 top-[69px] lg:w-[54px] lg:h-[53px] xl:w-[69px] xl:h-[69px] 2xl:w-[92px] 2xl:h-[91px] animate-spin' />
      <div className='max-w-screen-xl mx-auto'>
        <SectionHeader
          title={
            <>
              <strong className='font-[800]'>Our</strong> Services
            </>
          }
          description='Optimized customized software solutions to empower your niche and strategic business growth'
          descriptionTextWrap
        />
        <Slider
          settings={{ initialSlide: 1 }}
          arrowPosition={
            isLarge
              ? { horizontal: 'top', vertical: 'right' }
              : { horizontal: 'bottom', vertical: 'center' }
          }
        >
          {services.map((service, index) => {
            const icon = (
              <Image
                src={service.icon}
                alt={service.title}
                loading='eager'
                className='h-[48px] min-w-[48px] md:h-[58px] md:min-w-[58px]'
              />
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
      <BackgroundDonutShadow className='absolute hidden bottom-[36px] left-[94px] w-[75px] h-[75px] xl:block xl:left-[8px] 2xl:left-[37px] 2xl:w-[101px] 2xl:h-[101px]' />
    </div>
  );
};

export default memo(OurService);
