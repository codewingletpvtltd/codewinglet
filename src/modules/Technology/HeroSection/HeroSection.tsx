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
import { getStrapiMediaFullURL } from '@codewinglet/helper';
import { getSliderSettings } from './config';
import { HeroSectionProps } from './types';

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  bannerImage,
  logos,
  technologyName,
}) => (
  <>
    <div className='bg-aliceBlue pt-[50px] pb-[120px] relative mt-[80px] z-0 overflow-hidden'>
      <LeftLineMediumSVG className='absolute left-[-133px] -z-[1] xl:left-0' />
      <RectangleSVG className='absolute right-[50px] top-5 lg:h-[24px] lg:w-[24px]' />
      <StarsSVG className='absolute h-[30px] w-[30px] left-[-5px] top-[40%] md:left-[50%] md:top-[60%] 2xl:top-[50px] 2xl:left-[100px] lg:h-[50px] lg:w-[50px]' />
      <div className='max-w-screen-xl mx-[20px] md:mx-[38px] xl:mx-auto'>
        <div className='flex flex-col gap-[18px] md:gap-[30px] lg:gap-[50px] xl:gap-[120px] mb-10 items-center md:flex-row'>
          <div className='md:col-span-4 lg:col-span-5 lg:w-[70%]'>
            <Typography
              variant='h3'
              className='inline !text-[22px] lg:!text-[28px] xl:!text-[35px] 2xl:!text-[40px] text-primary'
            >
              {title}
            </Typography>
            <Typography
              variant='subtitle2'
              className='md:text-[16px] lg:text-[18px] mb-[22px] xl:mb-[43px] mt-[5px] xl:mt-[24px]'
            >
              {description}
            </Typography>
            <Button link>
              {' '}
              <Link
                href='https://calendly.com/slapani'
                rel='noopener noreferrer'
                target='_blank'
              >
                Consult Codewinglet
              </Link>
            </Button>
          </div>
          <div className='w-[294px] place-self-center md:min-w-[300px] lg:min-w-[400px] xl:min-w-[450px] 2xl:h-[500px] 2xl:w-[500px]'>
            {bannerImage && (
              <Image
                src={getStrapiMediaFullURL(bannerImage.data?.attributes.url)}
                alt='Techonolgy Image'
                loading='lazy'
                width={700}
                height={475}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            )}
          </div>
        </div>
      </div>
      <RightLineSVG className='absolute top-[-100px] z-[-1] right-[-175px] xl:right-0' />
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
      {logos.data && (
        <Slider
          hideArrow
          settings={getSliderSettings(logos.data.length)}
          className='mt-[20px] [&>.slick-list>.slick-track]:flex [&>.slick-list>.slick-track]:items-center'
        >
          {logos.data.map((tech) => (
            <div
              key={`technology-ero-section-slider-${tech.id}`}
              className='!flex items-center justify-center w-[118px] lg:w-[130px]'
            >
              <Image
                src={getStrapiMediaFullURL(tech.attributes.url)}
                alt='Technology Logo'
                height={60}
                width={167}
                className='h-auto w-auto'
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  </>
);

export default HeroSection;
