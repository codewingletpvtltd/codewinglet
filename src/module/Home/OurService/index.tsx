'use client';
import { SectionHeader, ServiceCard, Slider } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils';
import { BgWave } from '@codewinglet/assets';
import { services } from './utils';

const OurService = () => (
  <div className='relative pt-[53px] pb-[69px]'>
    <BgWave className='z-[-1] absolute top-0 bottom-0 h-[100%] w-[100%]' />
    <div className='container'>
      <div className='max-w-screen-2xl'>
        <SectionHeader
          title='Our Services'
          description='Optimized Custom Software Solutions to Empower Your Niche and Strategic Business Growth'
          highlight={[0]}
        />
        <Slider settings={{ initialSlide: 1 }}>
          {services.map((service, index) => {
            const icon = (
              <div
                className={getClassNames(
                  'h-[48px] w-[48px] lg:h-[58px] lg:w-[58px] flex items-center justify-center rounded-[50%]',
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
                className='py-[27px] px-[23px] !w-[calc(100%-24px)] !h-[calc(100%-30px)] !my-[30px] !mx-[12px] !flex self-center'
                buttonText='Read More'
              >
                {service.content}
              </ServiceCard>
            );
          })}
        </Slider>
      </div>
    </div>
  </div>
);

export default OurService;
