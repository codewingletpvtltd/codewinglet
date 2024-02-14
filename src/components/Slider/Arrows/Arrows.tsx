import { FC, memo } from 'react';
import { LeftArrow, RightArrow } from '@codewinglet/assets';
import { getClassNames } from '@codewinglet/utils';
import { _arrowPosition, verticalPosition } from '../constants';
import { ArrowProps } from '../types';

const Arrows: FC<ArrowProps> = ({
  sliderRef,
  arrowPosition = _arrowPosition,
}) => (
  <div
    className={getClassNames(
      'lg:flex flex-row items-center gap-[17px] lg:absolute lg:bottom-[-2rem] lg:left-[50%] xl:left-auto hidden xl:right-0 xl:bottom-[3rem]',
      arrowPosition.vertical
        ? verticalPosition[arrowPosition.vertical]
        : 'justify-end'
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
);

export default memo(Arrows);
