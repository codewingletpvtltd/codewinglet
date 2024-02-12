import Image from 'next/image';
import WhyChooseUsImg from '@codewinglet/assets/whyChooseUs.svg';
import { SectionHeader, Typography } from '@codewinglet/components';
import { HighlightArrow } from '@codewinglet/assets';
import { points } from './constants';

const WhyChooseUs = () => (
  <div className='my-[50px] mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto xl:my-[150px] relative'>
    <div className='grid grid-flow-row gap-[30px] md:grid-flow-col md:gap-[17px] relative'>
      <Image
        src={WhyChooseUsImg}
        alt='Why Choose Us'
        className='md:w-[468px] lg:w-[543px] xl:w-[614px]'
      />
      <div>
        <SectionHeader
          title={
            <>
              <strong className='font-800'>Why</strong> Choose Us?
            </>
          }
          description='Empowering brands with client-focused and customer-centric web application solutions, driving tangible business results in the dynamic digital landscape.'
        />
        <div className='flex flex-col mt-[30px] gap-[15px] lg:gap-[18px]'>
          {points.map((point, index) => (
            <div key={`point-${index}`} className='flex flex-row items-center'>
              <span>
                <HighlightArrow className='w-[11px] h-[14px] md:w-[13px] md:h-[23px]' />
              </span>
              <Typography
                variant='subtitle2'
                className='md:text-[18px] text-lightBlack ml-2'
              >
                {point}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default WhyChooseUs;
