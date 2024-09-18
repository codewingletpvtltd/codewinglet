import React from 'react';

import { getClassNames } from '@codewinglet/utils';

import Typography from '../Typography';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  children,
  className = '',
  ...rest
}) => (
  <div
    className={getClassNames(
      'flex flex-col gap-4 p-6 rounded-10 bg-white shadow-lg',
      className
    )}
    {...rest}
  >
    <div className='flex gap-3'>
      {icon}
      <Typography
        variant='body2'
        className='flex font-[800] justify-center items-center flex-wrap text-[18px] md:text-[18px]'
      >
        {title}
      </Typography>
    </div>

    <Typography
      variant='body2'
      className='text-left text-lightBlack line-clamp-3 xl:line-clamp-5 text-subtitle2 leading-5 md:text-body2 md:font-400 md:leading-[30px]'
    >
      {children}
    </Typography>

    {/* TODO_1.1: This code is commented because in the first release we need to disabled */}
    {/* <div>
      <Button onClick={onClick}>{buttonText}</Button>
    </div> */}
  </div>
);

export default ServiceCard;
