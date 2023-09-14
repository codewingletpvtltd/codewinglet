import Image from 'next/image';
import { FC } from 'react';
import { Typography } from '@codewinglet/components';
import { CardProps } from '../../types';

const Card: FC<CardProps> = ({ index, icon, title, desc }) => (
  <div className='rounded-10 bg-white shadow-lg flex flex-col items-center justify-center px-[17px] py-[35px] gap-[8px]'>
    <div className='relative'>
      {icon && <Image src={icon} alt='card image' className='absolute top-5' />}
      <Typography
        variant='h2'
        className='text-darkBlue text-[45px] font-700 lg:text-[50px] opacity-20 -z-10 text-center'
      >
        {index}
      </Typography>
    </div>
    <Typography variant='body2' className='font-800 lg:text-[20px] text-center'>
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      className='leading-[20px] md:text-[16px] md:leading-[25px] lg:text-[18px] lg:leading-[30px] text-center'
    >
      {desc}
    </Typography>
  </div>
);

export default Card;
