'use client';
import { FC, memo, useRef } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderProps } from './types';
import { defaultSettings } from './config';
import { _arrowPosition } from './constants';
import { Arrows } from './Arrows';

const Slider: FC<SliderProps> = ({
  children,
  settings,
  arrowPosition = _arrowPosition,
  className = '',
  hideArrow = false,
}) => {
  const _settings = defaultSettings(settings);
  const ref = useRef<SlickSlider>();

  return (
    <div>
      {!hideArrow && arrowPosition.horizontal !== 'bottom' && (
        <Arrows sliderRef={ref} arrowPosition={arrowPosition} />
      )}
      <SlickSlider ref={ref} {..._settings} className={className}>
        {children}
      </SlickSlider>
      {!hideArrow && arrowPosition.horizontal === 'bottom' && (
        <Arrows sliderRef={ref} arrowPosition={arrowPosition} />
      )}
    </div>
  );
};

export default memo(Slider);
