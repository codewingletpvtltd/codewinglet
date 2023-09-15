import {
  LeftLineMediumSVG,
  RectangleSVG,
  RightLineSVG,
  StarsSVG,
} from '@codewinglet/assets';
import { Breadcrumb, Typography } from '@codewinglet/components';

const HeroSection = () => (
  <div className='overflow-hidden relative -z-10 pt-[50px]'>
    <LeftLineMediumSVG className='absolute top-0 left-[-30px]' />
    <StarsSVG className='absolute left-[20px] top-[195px] lg:top-[250px] lg:left-[70px] xl:left-[120px] 2xl:left-[300px] 2xl:top-[200px]' />
    <RectangleSVG className='absolute right-[36px] top-[140px] lg:top-[170px] lg:right-[70px] xl:right-[120px] 2xl:right-[300px]' />
    <RightLineSVG className='absolute -z-1 right-0 -z-1 top-[-500px] md:top-[-100px] xl:top-[-50px]' />
    <div className='h-[291px] md:h-[362px] xl:h-[366px] 2xl:[420px] bg-aliceBlue z-[1000]'>
      <div className='flex flex-col items-center pt-[43px] md:pt-[77px] lg:pt-[89px] 2xl:pt-[100px]'>
        <Typography
          variant='h3'
          className='text-[22px] md:text-[28px] xl:[35px] font-[800] mb-[10px] xl:mb-[23px] text-center'
        >
          Contact Us
        </Typography>
        <Breadcrumb breadcrumbs={['home', 'Contact us']} />
      </div>
    </div>
  </div>
);

export default HeroSection;
