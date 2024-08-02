/* eslint-disable import/order */
import { Typography } from '@codewinglet/components';
import { FC } from 'react';
import { CardProps } from '../../types';

const Card: FC<CardProps> = ({ index, title, desc }) => (
  <div className='text-white before:absolute before:content before:bg-white before:w-9 before:h-[3px] before:-top-1'>
    <div className='relative'>
      <Typography variant='h2' className='text-h2 text-white'>
        {index}.
      </Typography>
    </div>
    <Typography variant='body2' className='text-subtitle2 pb-4 pt-5'>
      {title}
    </Typography>
    <Typography className='text-secondary text-paragraph2Light'>
      {desc}
    </Typography>
  </div>
);

export default Card;
