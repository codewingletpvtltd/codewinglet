'use client';
import { FC, memo } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftArrow, RightArrow } from '@codewinglet/assets';
import { SliderProps } from './types';
import { defaultSettings } from './config';

const Slider: FC<SliderProps> = ({
  children,
  settings,
  sliderRef,
  onPrevClick,
  onNextClick,
}) => {
  const _settings = defaultSettings(settings);

  return (
    <div>
      <div className='flex flex-row items-center justify-end gap-[17px]'>
        <LeftArrow onClick={onPrevClick} />
        <RightArrow onClick={onNextClick} />
      </div>
      <SlickSlider ref={sliderRef} {..._settings}>
        {children}
      </SlickSlider>
    </div>
  );
};

export default memo(Slider);
