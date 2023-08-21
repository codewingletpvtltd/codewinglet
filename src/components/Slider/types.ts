import { Settings } from 'react-slick';

export type ArrowPosition = {
  horizontal?: 'top' | 'bottom';
  vertical?: 'left' | 'center' | 'right';
};
export interface SliderProps {
  children: React.ReactNode;
  settings?: Settings;
  iconsPosition?: 'bottomCenter' | 'topRight';
}
