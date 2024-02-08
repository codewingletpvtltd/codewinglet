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
      'flex flex-row items-center gap-[17px] absolute right-0 bottom-[3rem]',
      arrowPosition.vertical
        ? verticalPosition[arrowPosition.vertical]
        : 'justify-end'
    )}
  >
    <LeftArrow
      onClick={() => sliderRef?.current?.slickPrev()}
      className='lg:h-[30px] lg:w-auto cursor-pointer fill-white'
    />
    <div className='relative cursor-pointe'>
      <RightArrow
        onClick={() => sliderRef?.current?.slickNext()}
        className='lg:h-[30px] lg:w-auto cursor-pointer !hover:fill-black fill-white'
      />
    </div>
  </div>
);

export default memo(Arrows);
