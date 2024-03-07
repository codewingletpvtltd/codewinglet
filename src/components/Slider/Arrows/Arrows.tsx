import { FC } from 'react';
import { LeftArrow, RightArrow } from '@codewinglet/assets';
import { getClassNames } from '@codewinglet/utils';
import { _arrowPosition, verticalPosition } from '../constants';
import { ArrowProps } from '../types';

const Arrows: FC<ArrowProps> = ({
  sliderRef,
  arrowPosition = _arrowPosition,
  activeIndex,
}) => (
  <>
    <div
      className={getClassNames(
        'xl:flex flex-row items-center gap-[17px] lg:absolute lg:bottom-[-2rem] lg:left-[50%] xl:left-auto hidden xl:right-0 xl:bottom-[3rem]',
        arrowPosition.vertical
          ? verticalPosition[arrowPosition.vertical]
          : 'justify-end md:flex hidden'
      )}
    >
      <div className='relative cursor-pointe hover:bg-white w-[40px] h-[40px] hover:rounded-full flex items-center justify-center group transition-all duration-300'>
        <LeftArrow
          onClick={() => sliderRef?.current?.slickPrev()}
          className='lg:h-[20px] lg:w-auto cursor-pointer fill-white group-hover:fill-black'
        />
      </div>
      <div className='relative cursor-pointe hover:bg-white w-[40px] h-[40px] hover:rounded-full flex items-center justify-center group transition-all duration-300'>
        <RightArrow
          onClick={() => sliderRef?.current?.slickNext()}
          className='lg:h-[20px] lg:w-auto cursor-pointer fill-white group-hover:fill-black'
        />
      </div>
    </div>

    <div className='z-[-1] flex gap-2 xl:hidden [&>*:nth-child(n)]:transition-all [&>*:nth-child(n)]:duration-1000 absolute lg:left-2/4 md:left-[80%] sm:left-2/4 left-2/4 md:top-[81%] md:bottom-[-40px] bottom-[-20px] translate-x-[-50%] translate-y-[-50%]'>
      <div
        className={getClassNames(
          'h-1 w-5 ',
          activeIndex === 0 ? 'w-10 bg-white' : 'bg-[#313131]'
        )}
        onClick={() => sliderRef?.current?.slickGoTo(0)}
      ></div>
      <div
        className={getClassNames(
          'h-1 w-5',
          activeIndex === 1 ? 'w-10 bg-white' : 'bg-[#313131]'
        )}
        onClick={() => sliderRef?.current?.slickGoTo(1)}
      ></div>
      <div
        className={getClassNames(
          'h-1 w-5 ',
          activeIndex === 2 ? 'w-10 bg-white' : 'bg-[#313131]'
        )}
        onClick={() => sliderRef?.current?.slickGoTo(2)}
      ></div>
    </div>
  </>
);

export default Arrows;
