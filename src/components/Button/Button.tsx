import React, { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  link,
  disabled,
  className,
  ...rest
}) => (
  <button
    className={twMerge(
      'relative bg-transparent text-white text-base cursor-pointer h-[50px] block mx-auto border border-[#5b5b5b]',
      className
    )}
    {...rest}
  >
    {children}
  </button>
);

export default memo(Button);
