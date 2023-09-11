import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const BackgroundSemiCircle: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='84'
    height='84'
    viewBox='0 0 84 84'
    fill='none'
    {...props}
  >
    <g opacity='0.1'>
      <path
        d='M15.5587 68.2826C-2.51956 50.2043 -2.51956 21.0783 15.5587 3L81.5109 68.2826C63.4326 86.3609 33.637 86.3609 15.5587 68.2826Z'
        stroke={COLORS.primary}
        strokeWidth='3'
        strokeMiterlimit='10'
      />
    </g>
  </svg>
);

export default BackgroundSemiCircle;
