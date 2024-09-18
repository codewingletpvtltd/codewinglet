/* eslint-disable import/order */
import { Typography } from '@codewinglet/components';
import { FC } from 'react';
import { CardProps } from '../../types';

const Card: FC<CardProps> = ({ index, title, desc }) => (
  <div className='lg:border-t-0 border-t border-secondary text-white lg:before:absolute before:content before:bg-white before:w-9 before:h-[3px] before:-top-1 lg:w-auto sm:w-6/12 w-full'>
    <div className='relative lg:before:relative before:absolute before:content before:bg-white before:w-9 before:h-[3px] before:-top-1'>
      <Typography className='lg:text-h2 text-h4 text-white lg:pt-0 pt-[30px]'>
        {index}.
      </Typography>
    </div>
    <Typography className='lg:text-subtitle2 text-paragraph1 pb-4 pt-5'>
      {title}
    </Typography>
    <Typography className='text-secondary text-paragraph2Light lg:pb-0 pb-10'>
      {desc}
    </Typography>
  </div>
);

export default Card;
