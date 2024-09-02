/* eslint-disable import/order */
// 'use client';

import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { techName } from './utils';
import { getStrapiMediaFullURL } from '@codewinglet/helper';

interface HeroSectionProps {
  heroData: any;
}

const HeroSection = ({ heroData }: HeroSectionProps) => (
  <>
    <div
      className='bg-black lg:pt-[328px] md:pt-60 pt-[176px] relative scroll-mt-40'
      id='overview'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px] md:pb-20 pb-10'>
        <div className='lg:mt-[65px] relative lg:w-[612px]'>
          <SectionHeader
            title={heroData?.title}
            description={heroData?.description}
            headingClassName='text-white'
            descriptionClassName='text-white pt-6'
          />
          <Button
            className='text-white underline lg:mt-[60px] mt-8 py-0'
            variant='link'
          >
            <Link
              href={heroData?.link?.link}
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              {heroData?.link?.title}
              <Arrow />
            </Link>
          </Button>
        </div>
        <div className='lg:w-[748px] lg:mt-0 mt-10'>
          <Image
            src={getStrapiMediaFullURL(
              heroData?.technologyImage?.image.data.attributes.url
            )}
            alt={
              heroData?.technologyImage?.image.data.attributes.alternativeText
            }
            width={748}
            height={541}
          />
        </div>
      </div>
      <div className='container w-full lg:py-[50px] md:py-[46px] py-9 lg:px-[15px] sm:px-10 px-5 overflow-hidden relative'>
        <div className='bg-primary w-fit lg:py-10 md:py-6 py-3 lg:px-9 md:px-[30px] px-3 border-t-[3px] border-white absolute bottom-0 left-0 z-[2]'>
          <Image
            src={getStrapiMediaFullURL(
              heroData?.technologyIcon.image.data.attributes.url
            )}
            alt={heroData?.technologyIcon.image.data.attributes.alternativeText}
            width={94}
            height={94}
            className='mx-auto lg:w-[94] lg:h-[94] md:w-16 w-10 md:h-16 h-10'
          />
          <Typography className='lg:text-h6 md:text-tagLight text-tagExtraLight text-white mt-4'>
            {heroData?.technologyIcon.title}
          </Typography>
        </div>
        <div className='flex shrink-0 marquee lg:py-[30px] md:py-3 py-1.5 border-y border-primary'>
          {Array(13)
            .fill(heroData?.technologyIcon.title)
            .map((tech, index) => (
              <div key={index} className='flex shrink-0 w-auto'>
                <Typography className='text-white lg:text-h2 md:text-subtitle1 text-tagExtraLight technology-hero font-semibold'>
                  {tech}
                </Typography>
                <Image
                  alt={'star-img'}
                  src={'/assets/Technologies/pages/star.svg'}
                  width={34}
                  height={34}
                  className='md:mx-[50px] mx-3 md:w-[34px] w-2'
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  </>
);
export default HeroSection;
