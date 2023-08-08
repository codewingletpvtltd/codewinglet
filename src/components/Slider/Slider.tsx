'use client';
import { FC, memo, useRef } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftArrow, RightArrow } from '@codewinglet/assets';
import { SliderProps } from './types';
import { defaultSettings } from './config';

const Slider: FC<SliderProps> = ({ children, settings }) => {
  const _settings = defaultSettings(settings);
  const sliderRef = useRef<SlickSlider>(null);

  return (
    <div>
      <div className='flex flex-row items-center justify-end gap-[17px]'>
        <LeftArrow onClick={() => sliderRef.current?.slickPrev()} />
        <RightArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
      <SlickSlider ref={sliderRef} {..._settings}>
        {children}
      </SlickSlider>
    </div>
  );
};

export default memo(Slider);
