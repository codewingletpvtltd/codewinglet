'use client';
import { FC } from 'react';
import Image from 'next/image';
import { Typography } from '@codewinglet/components';

type AboutUsCardProps = {
  image: string;
  title: string;
  description: string;
};

const AboutUsCard: FC<AboutUsCardProps> = ({ image, title, description }) => (
  <div className='2xl:w-[414px] xl:w-[425px] lg:w-[269px] md:w-[342px] w-full bg-primary px-[15px] pt-[15px] pb-5 2xl:mb-[50px] xl:mb-10 md:mt-0 sm:mt-5'>
    <div className='w-full overflow-hidden'>
      <Image
        className='w-full object-cover object-center transition-transform duration-500 hover:scale-110'
        src={image}
        alt='building'
        width={1000}
        height={1000}
      />
    </div>
    <div className='flex justify-between items-baseline mt-3'>
      <Typography className='text-white xl:text-subtitle1 md:text-paragraph2 text-paragraph2 !leading-normal'>
        {title}
      </Typography>
    </div>
    <Typography className='text-white lg:mt-1.5 group-first:mt-0 sm:mt-2.5 mt-3 xl:text-paragraph2Light lg:text-subtitle2 text-tagLight'>
      {description}
    </Typography>
  </div>
);

export default AboutUsCard;
