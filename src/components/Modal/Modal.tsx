import { FC } from 'react';
import { Close } from '@codewinglet/assets';
import { getClassNames } from '@codewinglet/utils/cn';
import Typography from '../Typography';
import Button from '../Button';
import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({ open, children, title, onClose, onApply }) => (
  <div
    role='presentation'
    className={getClassNames(
      'inset-0 fixed w-full top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] z-[100]',
      open ? 'visible' : 'invisible'
    )}
  >
    <div className='md:min-w-[780px] bg-white absolute'>
      <div className='bg-primary h-[6px]' />

      <div className='grid grid-flow-row gap-[30px] pt-[20px] px-[36px] pb-[40px] bg-white'>
        <div className='flex justify-start items-center'>
          <Typography
            variant='h3'
            className='text-[35px] font-[800] self-center text-center w-[95%]'
          >
            {title}
          </Typography>
          <Close className='cursor-pointer' onClick={onClose} />
        </div>
        {children}
        <Button onClick={onApply}>Apply Now</Button>
      </div>
    </div>
  </div>
);

export default Modal;
