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
      'font-secondary bg-black tracking-tight px-5 py-3 rounded-full group overflow-hidden will-change-transform transition-transform duration-300 uppercase flex items-center',
      className
    )}
    {...rest}
  >
    <span className='text-white relative flex'>
      <strong className='group-hover:-translate-y-[200%] transition-transform'>
        {children}
      </strong>
      <strong className='absolute block translate-y-[200%] group-hover:translate-y-0 transition-transform text-sky'>
        {children}
      </strong>
    </span>
    {link && (
      <span className='flex-shrink-0 ml-4 text-white group-hover:text-sky'>
        <span className='w-4 h-4 flex flex-col overflow-hidden'>
          <svg
            focusable='false'
            aria-hidden='true'
            viewBox='0 0 30 30'
            className='w-4 h-4 transition-transform duration-300 translate-x-0 translate-y-0 opacity-100 inline-block flex-shrink-0 group-hover:translate-x-full group-hover:-translate-y-full group-hover:opacity-0 fill-current'
          >
            <path d='M29.9995 29L29.9995 0.999451L29.9995 -0.000549316H28.9995H0.999527L0.999528 1.99945L26.5864 1.99945L0.292969 28.2928L1.70718 29.7071L27.9995 3.41471L27.9995 29H29.9995Z'></path>
          </svg>
          <svg
            focusable='false'
            aria-hidden='true'
            viewBox='0 0 30 30'
            className='w-4 h-4 transition-transform duration-300 opacity-0 -translate-x-full translate-y-0 inline-block flex-shrink-0 group-hover:translate-x-0 group-hover:-translate-y-full group-hover:opacity-100 fill-current'
          >
            <path d='M29.9995 29L29.9995 0.999451L29.9995 -0.000549316H28.9995H0.999527L0.999528 1.99945L26.5864 1.99945L0.292969 28.2928L1.70718 29.7071L27.9995 3.41471L27.9995 29H29.9995Z'></path>
          </svg>
        </span>
      </span>
    )}
  </button>
);

export default memo(Button);
