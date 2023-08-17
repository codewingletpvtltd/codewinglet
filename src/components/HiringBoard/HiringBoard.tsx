import { FC } from 'react';
import Image from 'next/image';
import HiringImg from 'assets/hiring.svg';
import HiringBoardBg from 'assets/hiringBoard.svg';
import { HiringBoardProps } from './types';

const HiringBoard: FC<HiringBoardProps> = ({ children, onClick }) => (
  <div className='relative z-[-2]'>
    <Image
      src={HiringImg}
      alt='Hiring Image'
      className=' w-[107px] h-[53px] relative z-[-2]'
    />
    {/* content-[""] w-[10px] h-[10px] top-[83px] left-[78px] z-[5] rounded-[50%] bg-primary border-[2px] */}
    <div className='relative h-[75.6px] bg-primary'>
      {/* animate-swing */}
      {/* <div className='contents-[""] h-[6px] w-[6px] bg-primary absolute rounded-full border-[2px] left-[44px] top-[-11px]'></div> */}
      <div className='h-[6px] w-[6px] ml-[17px] bg-primary rounded-full border-[2px]'></div>
      <div className='inline-block h-[16px] w-[2px] bg-primary'></div>
      <div className='inline-block h-[16px] w-[2px] bg-primary'></div>
      <div className='relative w-[98px] h-auto bg-black'>
        <Image
          src={HiringBoardBg}
          alt='Hiring Board'
          className='w-[98px] h-[auto]'
        />
        <button
          className='absolute p-[9px] text-[11px] uppercase top-[30%] left-[0] rotate-[-15deg] flex items-center justify-center text-white'
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </div>
  </div>
);

export default HiringBoard;
