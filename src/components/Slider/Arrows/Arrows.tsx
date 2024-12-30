import { FC } from 'react';

import { Arrow } from '@codewinglet/assets';
import { getClassNames } from '@codewinglet/utils';

import { _arrowPosition, verticalPosition } from '../constants';
import { ArrowProps } from '../types';

const Arrows: FC<ArrowProps> = ({
  sliderRef,
  arrowPosition = _arrowPosition,
}) => (
  <>
    <div
      className={getClassNames(
        'flex flex-row items-center gap-[18px] md:absolute bottom-32 left-auto justify-center right-0 xl:bottom-4 z-10 md:mt-0 mt-4',
        arrowPosition.vertical
          ? verticalPosition[arrowPosition.vertical]
          : 'justify-end md:flex hidden'
      )}
    >
      <div className='cursor-pointer'>
        <Arrow
          className='text-white rotate-180 w-6 h-6'
          onClick={() => sliderRef?.current?.slickPrev()}
        />
      </div>
      <div className='cursor-pointer'>
        <Arrow
          className='text-white w-6 h-6'
          onClick={() => sliderRef?.current?.slickNext()}
        />
      </div>
    </div>
  </>
);

export default Arrows;
