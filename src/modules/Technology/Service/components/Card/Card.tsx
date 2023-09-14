import Image from 'next/image';
import { FC } from 'react';
import { Typography } from '@codewinglet/components';
import { CardProps } from '../../types';

const Card: FC<CardProps> = ({ icon, title, desc }) => (
  <div className='flex flex-col relative md:p-[30px]'>
    <div className='flex flex-row items-center'>
      {icon && (
        <Image
          src={icon}
          alt='service card icon'
          className='h-[48px] w-[48px] md:h-[58px] md:w-[58px]'
        />
      )}
      <Typography
        variant='body2'
        className='md:text-[20px] ml-[15px] leading-800 '
      >
        {title}
      </Typography>
    </div>
    <Typography
      variant='subtitle2'
      className='md:text-[18px] text-lightBlack mt-[22px]'
    >
      {desc}
    </Typography>
  </div>
);

export default Card;
