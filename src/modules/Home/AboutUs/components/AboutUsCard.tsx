import Image from 'next/image';
import { FC } from 'react';
import { Typography } from '@codewinglet/components';

type AboutUsCardProps = {
  image: string;
  title: string;
  description: string;
};

const AboutUsCard: FC<AboutUsCardProps> = ({ image, title, description }) => (
  <div className='2xl:w-[414px] xl:w-[425px] lg:w-[269px] md:w-[342px] w-full bg-primary px-[15px] pt-[15px] pb-5 2xl:mb-[50px] xl:mb-10 last:mb-0'>
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
      <Typography className='text-white xl:text-subtitle1 lg:text-[20px] sm:text-[20px] text-[16px] !leading-normal'>
        {title}
      </Typography>
    </div>
    <Typography className='text-white lg:mt-1.5 group-first:mt-0 sm:mt-4 mt-3 xl:text-paragraph2Light lg:text-subtitle2 md:text-subtitle1 sm:text-body2 text-[13px]'>
      {description}
    </Typography>
  </div>
);

export default AboutUsCard;
