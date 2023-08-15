'use client';
import { FC, memo, useRef } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftArrow, RightArrow } from '@codewinglet/assets';
import { SliderProps } from './types';
import { defaultSettings } from './config';

const Slider: FC<SliderProps> = ({
  children,
  settings,
  iconsPosition = 'topRight',
}) => {
  const _settings = defaultSettings(settings);
  const sliderRef = useRef<SlickSlider>(null);
  const icons = (styles: string) => (
    <div
      className={`flex flex-row items-center justify-end gap-[17px] ${styles}`}
    >
      <LeftArrow
        className='cursor-pointer'
        onClick={() => sliderRef.current?.slickPrev()}
      />
      <RightArrow
        className='cursor-pointer'
        onClick={() => sliderRef.current?.slickNext()}
      />
    </div>
  );

  return (
    <>
      {iconsPosition === 'topRight' && icons('justify-end')}
      <SlickSlider ref={sliderRef} {..._settings}>
        {children}
      </SlickSlider>
      {iconsPosition === 'bottomCenter' && icons('justify-center')}
    </>
  );
};

export default memo(Slider);
