import Image from 'next/image';
import Link from 'next/link';
import {
  LeftLineMediumSVG,
  RectangleSVG,
  RightLineSVG,
  StarsSVG,
} from '@codewinglet/assets';
import {
  Button,
  SectionHeader,
  Slider,
  Typography,
} from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils';
import { getStrapiMediaFullURL } from '@codewinglet/helper';
import { sliderSettings } from './config';
import { HeroSectionProps } from './types';

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  bannerImageUrl,
  logos,
  technologyName,
}) => (
  <>
    <div className='bg-aliceBlue px-[20px] pt-[50px] pb-[120px] relative mt-[80px] z-0 overflow-hidden'>
      <LeftLineMediumSVG className='absolute left-[-10px] x-100' />
      <RectangleSVG className='absolute right-[50px] top-5 lg:h-[24px] lg:w-[24px]' />
      <StarsSVG className='absolute top-[40%] md:left-[50%] md:top-[60%] 2xl:top-[50px] 2xl:left-[100px] lg:h-[70px] lg:w-[70px]' />
      <div className='max-w-screen-xl md:mx-[38px] xl:mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-7 gap-[18px] md:gap-[30px] mb-10 items-center'>
          <div className='md:col-span-4 lg:col-span-5 lg:w-[70%]'>
            <Typography
              variant='h3'
              className='inline !text-[22px] lg:!text-[28px] xl:!text-[35px] 2xl:!text-[40px] text-black'
            >
              {title}
            </Typography>
            <Typography
              variant='subtitle2'
              className='md:text-[16px] lg:text-[18px] mb-[22px] mt-[5px]'
            >
              {description}
            </Typography>
            <Button>
              {' '}
              <Link
                href='https://calendly.com/slapani'
                rel='noopener noreferrer'
                target='_blank'
              >
                Consult Code Winglet
              </Link>
            </Button>
          </div>
          <div className='h-[294px] w-[294px] place-self-center md:place-self-start md:h-[350px] md:w-[350px] 2xl:h-[500px] 2xl:w-[500px]'>
            <Image
              src={bannerImageUrl as string}
              alt='Techonolgy Image'
              loading='lazy'
              sizes='50vw'
              width={700}
              height={475}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
      <RightLineSVG className='absolute right-0 top-[-100px] z-100' />
    </div>
    <div className='max-w-screen-xl mx-[20px] md:mx-[38px] xl:mx-auto bg-white rounded-10 shadow-lg py-[33px] px-[32px] relative bottom-[100px] z-5'>
      <SectionHeader
        title={
          <>
            <strong className='font-800'>Who Used</strong> {technologyName}?
          </>
        }
        showDescription={false}
        headingClassName='text-center'
      />
      <Slider hideArrow settings={sliderSettings} className='mt-[20px]'>
        {logos.data.map((tech) => (
          <div
            key={`technology-ero-section-slider-${tech.id}`}
            className={getClassNames('pt-[27px] px-[23px] !flex')}
          >
            <Image
              src={getStrapiMediaFullURL(tech.attributes.url)}
              alt='Technology Logo'
              height={38}
              width={140}
              className='flex self-center'
            />
          </div>
        ))}
      </Slider>
    </div>
  </>
);

export default HeroSection;
