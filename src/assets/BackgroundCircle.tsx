import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const Arrow: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='105'
    height='73'
    viewBox='0 0 105 73'
    fill='none'
    {...props}
  >
    <g opacity='0.1'>
      <path
        d='M94.6941 27.313C107.318 39.9371 107.318 60.2759 94.6941 72.9L48.6396 27.313C61.4975 14.689 82.07 14.689 94.6941 27.313Z'
        fill={COLORS.primary}
      />
      <path
        d='M11.4681 48.5869C-1.15602 35.9629 -1.15602 15.6241 11.4681 3L57.5226 48.5869C44.8985 61.211 24.0921 61.211 11.4681 48.5869Z'
        stroke={COLORS.primary}
        strokeWidth='3'
        strokeMiterlimit='10'
      />
    </g>
  </svg>
);

export default Arrow;
