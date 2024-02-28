import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Typography } from '@codewinglet/components';

type AboutUsCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

const AboutUsCard: FC<AboutUsCardProps> = ({ image, title, description }) => (
  <div className='w-full bg-primary p-[18px] mb-10'>
    <div className='w-full overflow-hidden'>
      <Image
        className='w-full object-cover object-center transition-transform duration-500 hover:scale-110'
        src={image}
        alt='building'
      />
    </div>
    <div className='flex justify-between items-baseline mt-[10px]'>
      <Typography className='text-white leading-[1.2] font-300 xl:text-body1 lg:text-[20px] sm:text-[20px] text-[16px]'>
        {title}
      </Typography>
    </div>
    <Typography className='text-white lg:mt-2.5 group-first:mt-0 sm:mt-4 mt-3 xl:text-body2 lg:text-subtitle2 md:text-subtitle1 sm:text-body2 text-[13px] font-300'>
      {description}
    </Typography>
  </div>
);

export default AboutUsCard;
