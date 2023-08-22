import React from 'react';
import { Arrow } from '@codewinglet/assets';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../Typography';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  startIcon,
  variant = 'primary',
  className = '',
  ...rest
}) =>
  variant === 'primary' ? (
    <button
      className={getClassNames(
        'group relative text-primary flex justify-center items-center px-[15px] py-[5px] before:absolute before:h-[33px] before:w-[33px] before:rounded-[50%] before:opacity-[0.15] before:bg-primary before:left-0 before:transition-all before:duration-[0.3s] before:ease-linear before:hover:w-full before:hover:rounded-[50px]',
        className
      )}
      {...rest}
    >
      {startIcon}
      <Typography
        variant='body2'
        className='relative tracking-wider lg:text-[16px] xs:text-[14px]'
      >
        {children}
      </Typography>
      <Arrow
        width={16}
        height={16}
        className='relative fill-none stroke-2 translate-x-[-5px] transition-all duration-[0.3s] ease-[ease] ml-2.5 top-0 stroke-linecap:round stroke-linejoin: round group-hover:translate-x-0'
      />
    </button>
  ) : (
    <button
      className={getClassNames(
        'bg-black py-2 px-5 rounded-full flex gap-4',
        className
      )}
      {...rest}
    >
      {startIcon}
      {children}
    </button>
  );

export default Button;
