import { FC } from 'react';
import Image from 'next/image';
import { Typography } from '@codewinglet/components';
import { CardProps } from '../../types';

const Card: FC<CardProps> = ({ icon, title, desc, slideIndex }) => (
  <>
    <div className='flex flex-row items-center justify-between'>
      {icon && <Image src={icon} alt='Achivement Icon' />}
      <Typography
        variant='h2'
        className='text-white [text-shadow:2px_2px_0_#506B82,-1px_-1px_0_#506B82,1px_-1px_0_#506B82,-1px_1px_0_#506B82,1px_1px_0_#506B82] text-[45px] font-700 lg:text-[50px]'
      >
        {slideIndex}
      </Typography>
    </div>
    <Typography variant='body2' className='font-800 md:text-[20px]'>
      {title}
    </Typography>
    <Typography variant='subtitle2' className='md:text-[18px] text-lightBlack'>
      {desc}
    </Typography>
  </>
);

export default Card;
