import { Settings } from 'react-slick';

export interface SliderProps {
  children: React.ReactNode;
  settings?: Settings;
  iconsPosition?: 'bottomCenter' | 'topRight';
}
