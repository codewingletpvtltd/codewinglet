import React from 'react';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button className='group relative transition-all text-primary  justify-center items-center duration-[0.2s] flex ease-[ease] px-[13px] border-[none] before:content-[""] before:absolute before:block lg:h-9 lg:before:w-9 lg:before:h-9 xs:before:w-8  xs:before:h-8 before:transition-all before:duration-[0.3s] before:ease-[ease] before:rounded-[50px] before:left-0 before:top-0 before:bg-lightBlue before:opacity-20 hover:before:w-full active:scale-95 sm:before:h-[31px] sm:before:w-[31px] '>
    <Typography
      variant='body2'
      className='relative tracking-wider lg:text-[16px] xs:text-[14px]'
    >
      {text}
    </Typography>
    <Image
      src='buttonAero.svg'
      alt='Aero Image'
      width={16}
      height={16}
      className='relative  fill-none stroke-2 translate-x-[-5px] transition-all duration-[0.3s] ease-[ease] ml-2.5 top-0 stroke-linecap:round stroke-linejoin: round group-hover:translate-x-0'
    />
  </button>
);

export default Button;
