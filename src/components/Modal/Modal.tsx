import Image from 'next/image';
import { FC } from 'react';

import { getClassNames } from '@codewinglet/utils';

import Button from '../Button';
import Typography from '../Typography';
import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({
  open,
  children,
  title,
  onClose,
  onApply,
  showFooter = true,
  showHeader = true,
}) => (
  <div
    role='presentation'
    className={getClassNames(
      'inset-0 fixed w-full top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] z-[100]',
      open ? 'visible' : 'invisible'
    )}
  >
    <div
      className={getClassNames(
        'md:min-w-[780px] bg-white absolute transition-opacity duration-500 ease-in-out',
        open ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div className='bg-gray-800 h-1.5' />

      <div className='grid grid-flow-row gap-[30px] pt-5 px-9 pb-10 bg-white'>
        {showHeader && (
          <div className='flex justify-start items-center'>
            <Typography
              variant='h3'
              className='text-[35px] font-extrabold self-center text-center w-[95%]'
            >
              {title}
            </Typography>
            <Image
              src={'/assets/icons/Close.svg'}
              alt='Close'
              className='cursor-pointer'
              onClick={onClose}
              width={20}
              height={20}
            />
          </div>
        )}
        {children}
        {showFooter && (
          <div className='flex items-center justify-center'>
            <Button onClick={onApply}>Apply Now</Button>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Modal;
