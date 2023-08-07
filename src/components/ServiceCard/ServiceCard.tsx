import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  children,
  buttonText = 'Button',
  onClick,
  ...rest
}) => (
  <div
    className={'flex flex-col gap-4 p-[24px] rounded-10 bg-white shadow-l'}
    {...rest}
  >
    <div className='flex gap-3'>
      {icon}
      <Typography
        variant='body2'
        className='flex font-[800] justify-center items-center flex-wrap text-[18px] md:text-[20px]'
      >
        {title}
      </Typography>
    </div>

    <Typography
      variant='body2'
      className='text-left text-lightBlack line-clamp-5 md:text-subtitle2'
    >
      {children}
    </Typography>

    <div>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  </div>
);

export default React.memo(ServiceCard);
