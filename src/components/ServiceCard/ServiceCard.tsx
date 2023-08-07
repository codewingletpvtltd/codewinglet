import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../Typography';
import Button from '../Button';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  content,
  buttonText = 'Button',
  onClick,
  ...rest
}) => (
  <div
    className={getClassNames(
      `flex flex-col gap-4
      p-[24px] 
      rounded-[10px]
      bg-white 
      shadow-md`
    )}
    onClick={onClick}
    {...rest}
  >
    <div className='flex gap-3'>
      {icon}
      <Typography
        variant='body2'
        className={getClassNames(
          `flex font-[800] 
            justify-center items-center 
            flex-wrap text-[18px] md:text-[20px]`
        )}
      >
        {title}
      </Typography>
    </div>

    <Typography
      variant='body2'
      className={getClassNames(
        `text-left text-lightBlack 
          line-clamp-5 
          md:text-subtitle2`
      )}
    >
      {content}
    </Typography>

    <div>
      <Button>{buttonText}</Button>
    </div>
  </div>
);

export default React.memo(ServiceCard);
