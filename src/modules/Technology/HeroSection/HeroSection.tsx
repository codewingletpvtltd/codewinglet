import Image from 'next/image';
import {
  LeftLineMediumSVG,
  RectangleSVG,
  RightLineSVG,
  StarsSVG,
  tech,
} from '@codewinglet/assets';
import {
  Button,
  SectionHeader,
  Slider,
  Typography,
} from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils/cn';
import { techList } from './constants';
import { sliderSettings } from './config';

const HeroSection = () => (
  <>
    <div className='bg-aliceBlue px-[20px] pt-[50px] pb-[120px] relative mt-[80px] -z-10 overflow-hidden'>
      <LeftLineMediumSVG className='absolute left-[-10px] -z-40' />
      <RectangleSVG className='absolute right-[50px] top-5 lg:h-[24px] lg:w-[24px]' />
      <StarsSVG className='absolute top-[40%] md:left-[50%] md:top-[60%] 2xl:top-[50px] 2xl:left-[100px] lg:h-[70px] lg:w-[70px]' />
      <div className='max-w-screen-xl md:mx-[38px] xl:mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-7 gap-[18px] md:gap-[30px] mb-10'>
          <div className='md:col-span-4 lg:col-span-5 lg:w-[70%]'>
            <Typography
              variant='body1'
              className='text-[22px] font-900 md:text-[28px] lg:text-[35px] xl:text-[40px]'
            >
              ReactJs Development Company
            </Typography>
            <Typography
              variant='subtitle2'
              className='md:text-[16px] lg:text-[18px] mb-[22px] mt-[5px]'
            >
              Revolutionize your business's digital transformation with our
              top-tier ReactJS development services, creating cutting-edge and
              high-performing web applications that set your brand apart from
              the competition!
            </Typography>
            <Button>Consult Code Winglet</Button>
          </div>
          <Image
            src={tech}
            alt='Techonolgy Image'
            className='h-[100%] md:w-[100%] md:col-span-3 lg:col-span-2'
          />
        </div>
      </div>
      <RightLineSVG className='absolute right-0 top-[-100px] -z-40' />
    </div>
    <div className='max-w-screen-xl mx-[20px] md:mx-[38px] xl:mx-auto bg-white rounded-10 shadow-lg py-[33px] px-[32px] mt-[-100px] z-10'>
      <SectionHeader
        title={
          <>
            <strong className='font-800'>Who Used</strong> ReactJs?
          </>
        }
        showDescription={false}
        headingClassName='text-center'
      />
      <Slider hideArrow settings={sliderSettings} className='mt-[20px]'>
        {techList.map((tech, index) => (
          <div
            key={`technology-hero-section-slider-${index}`}
            className={getClassNames('pt-[27px] px-[23px] !flex')}
          >
            <Image
              src={tech}
              alt='Technology Logo'
              className='flex self-center'
            />
          </div>
        ))}
      </Slider>
    </div>
  </>
);

export default HeroSection;
