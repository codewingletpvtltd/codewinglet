import { FC, memo } from 'react';
import Image from 'next/image';
import HiringImg from 'assets/hiring.svg';
import HiringBoardBg from 'assets/hiringBoard.svg';
import { getClassNames } from '@codewinglet/utils';
import { HiringBoardProps } from './types';

const HiringBoard: FC<HiringBoardProps> = ({
  children,
  onClick,
  className = '',
}) => (
  <div>
    <Image
      src={HiringImg}
      alt='Hiring Image'
      className='ml-[1.9rem]'
      width={500}
      height={500}
    />
    <div className='content-[""] absolute w-[10px] h-[10px] top-[83px] left-[78px] z-[5] rounded-[50%] bg-primary border-[2px]' />
    <figure
      className={getClassNames(
        'absolute top-[4.8rem] left-[20px] animate-swing transform origin-[center_-16px] float-left',
        'after:content-[""] after:absolute after:w-[44px] after:h-[44px] after:border-t-[2px] after:border-t-black after:border-l-[2px] after:border-l-black after:top-[18px] after:left-[45.5px] after:z-0 after:rotate-[35deg]',
        className
      )}
    >
      <Image src={HiringBoardBg} alt='Hiring Board' height={150} width={150} />
      <button
        className='absolute top-[30%] left-[0] p-2 rotate-[-15deg] flex items-center justify-center text-white'
        onClick={onClick}
      >
        {children}
      </button>
    </figure>
  </div>
);

export default memo(HiringBoard);
