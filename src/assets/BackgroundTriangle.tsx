import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const BackgroundTriangle: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='81'
    height='72'
    viewBox='0 0 81 72'
    fill='none'
    {...props}
  >
    <g opacity='0.1'>
      <path
        d='M2 15.5778L79.4223 2L30.4556 70.4667L2 15.5778Z'
        stroke={COLORS.black}
        strokeWidth='3'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M79.4219 2C77.9775 2.57778 29.1553 31.4667 29.1553 31.4667L30.4552 70.3222L79.4219 2Z'
        stroke={COLORS.black}
        strokeWidth='3'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 15.5778L29.1556 31.6111L79.4223 2L2 15.5778Z'
        stroke={COLORS.black}
        strokeWidth='3'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);

export default BackgroundTriangle;
