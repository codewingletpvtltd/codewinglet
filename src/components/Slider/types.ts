import SlickSlider, { Settings } from 'react-slick';

export interface SliderProps {
  children: React.ReactNode;
  settings?: Settings;
  sliderRef?: SlickSlider;
  onNextClick?: () => void;
  onPrevClick?: () => void;
}
