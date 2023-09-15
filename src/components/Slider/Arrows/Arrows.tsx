import { FC, memo } from 'react';
import { BackgroundBubble, LeftArrow, RightArrow } from '@codewinglet/assets';
import { getClassNames } from '@codewinglet/utils/cn';
import { _arrowPosition, svgPosition, verticalPosition } from '../constants';
import { ArrowProps } from '../types';

const Arrows: FC<ArrowProps> = ({
  sliderRef,
  arrowPosition = _arrowPosition,
}) => (
  <div
    className={getClassNames(
      'flex flex-row items-center gap-[17px] relative',
      arrowPosition.vertical
        ? verticalPosition[arrowPosition.vertical]
        : 'justify-end'
    )}
  >
    <LeftArrow
      onClick={() => sliderRef?.current?.slickPrev()}
      className='lg:h-[30px] lg:w-auto cursor-pointer'
    />
    <div className='relative cursor-pointer'>
      <RightArrow
        onClick={() => sliderRef?.current?.slickNext()}
        className='lg:h-[30px] lg:w-auto'
      />
      <BackgroundBubble
        className={getClassNames(
          'absolute bottom-[2px] z-[-1] lg:h-[24px] lg:w-[24px]',
          arrowPosition.vertical ? svgPosition[arrowPosition.vertical] : ''
        )}
      />
    </div>
  </div>
);

export default memo(Arrows);
