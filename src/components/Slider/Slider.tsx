'use client';
import { FC, memo, useRef } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';
import { SliderProps } from './types';
import { defaultSettings } from './config';

const Slider: FC<SliderProps> = ({ children, settings }) => {
  const sliderRef = useRef<SlickSlider>(null);
  const _settings = defaultSettings(settings);

  return (
    <div>
      <div className='flex flex-row items-center justify-end gap-[17px]'>
        <Image
          src={LeftArrow}
          alt='leftArrow'
          onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
        />
        <Image
          src={RightArrow}
          alt='rightArrow'
          onClick={() => sliderRef.current && sliderRef.current.slickNext()}
        />
      </div>
      <SlickSlider ref={sliderRef} {..._settings}>
        {children}
      </SlickSlider>
    </div>
  );
};

export default memo(Slider);
