import { Button, TypeAnimation, Typography } from '@codewinglet/components';
import {
  ArrowRightSVG,
  IllustrationSVG,
  LeftLineMediumSVG,
  LeftLineSVG,
  RectangleSVG,
  RightLineSVG,
  StarsSVG,
} from '@codewinglet/assets';
import Technologies from './components/Technologies';

const sequence = [
  'EdTech',
  'E-Commerce',
  'Healthcare',
  'Real Estate',
  'CRM',
  // 'Smart Assets Management',
];

const HeroSection = () => (
  <div className='relative bg-aliceBlue z-0'>
    <div className='container relative'>
      <div className='my-[50px] mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto px-[20px] sm:p-0 flex items-center max-sm:flex-col md:gap-[35px] lg:gap-[75px] xl:gap-[140px] lg:w-full relative flex-col md:flex-row'>
        <div className='relative lg:self-end'>
          <div className='max-w-[680px] capitalize'>
            <Typography
              variant='h3'
              className='inline !text-[22px] lg:!text-[28px] xl:!text-[35px] 2xl:!text-[40px]'
            >
              Your premiere Web, Mobile <br /> And Software development <br />{' '}
              squad in{' '}
            </Typography>

            <TypeAnimation
              sequence={sequence}
              className='inline !text-[22px] lg:!text-[28px] xl:!text-[35px] 2xl:!text-[40px]'
            />
          </div>

          <Typography
            variant='body1'
            className='text-darkGray mt-[30px] mb-[29px]  !text-[14px] lg:!text-[16px] lg:w-[413px] xl:!text-[18px] xl:w-[473px] 2xl:!text-[20px] 2xl:w-[548px]'
          >
            have a concept for project? connect with code winglet right away to
            secure a technologically advanced and economically efficient
            development solution!
          </Typography>
          <Button>Consult Code Winglet</Button>
        </div>
        <div className='relative h-[257px] w-[259px] md:min-w-[300px] md:h-[auto] mt-[105px] md:mt-[51px] lg:mt-[71px] xl:mt-[83px] 2xl:mt-[80px] flex justify-center lg:w-[357px] lg:h-[359px] xl:w-[424px] xl:h-[426px]'>
          <IllustrationSVG />
          <ArrowRightSVG className='absolute -z-50 hidden md:block top-[40px] left-[-75px] 2xl:w-[94px] 2xl:h-[66px]' />
        </div>
      </div>
      <Technologies />
    </div>
    <StarsSVG className='absolute -z-50 top-[320px] left-[310px] md:top-[270px] lg:top-[360px] xl:top-[451px] xl:left-[550px] 2xl:top-[480px] 2xl:left-[700px] 2xl:w-[71px] 2xl:h-[71px] xl:h-[53px] xl:w-[53px]' />
    <LeftLineSVG className='absolute -z-50 top-[80px] sm:top-0 left-0 lg:hidden' />
    <RectangleSVG className='absolute -z-50 top-[400px] left-[44px] md:right-[100px] md:left-[unset] md:top-[300px] lg:right-[64px] lg:top-[375px] 2xl:right-[210px] 2xl:h-[24px] 2xl:w-[24px]' />
    <RightLineSVG className='absolute hidden -z-50 right-0 top-[-90px] h-[calc(100%+80px)] 2xl:right-[88px] lg:block' />
    <LeftLineMediumSVG className='absolute -z-50 hidden lg:block top-[-69px] h-[calc(100%+80px)] left-[-64px] xl:left-[8px]' />
  </div>
);

export default HeroSection;
