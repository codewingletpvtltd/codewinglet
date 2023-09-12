import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const BackgroundDonutShadow: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='60'
    height='60'
    viewBox='0 0 60 60'
    fill='none'
    {...props}
  >
    <path
      opacity='0.1'
      d='M34.8805 60C48.7533 60 59.9993 48.7539 59.9993 34.8811C59.9993 21.0084 48.7533 9.76233 34.8805 9.76233C21.0078 9.76233 9.76172 21.0084 9.76172 34.8811C9.76172 48.7539 21.0078 60 34.8805 60Z'
      fill={COLORS.primary}
    />
    <path
      d='M26.1188 51.2376C39.9915 51.2376 51.2376 39.9916 51.2376 26.1188C51.2376 12.2461 39.9915 1 26.1188 1C12.2461 1 1 12.2461 1 26.1188C1 39.9916 12.2461 51.2376 26.1188 51.2376Z'
      stroke={COLORS.black}
      strokeWidth='2'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M26.1189 38.3861C32.8939 38.3861 38.3862 32.8938 38.3862 26.1188C38.3862 19.3437 32.8939 13.8514 26.1189 13.8514C19.3438 13.8514 13.8516 19.3437 13.8516 26.1188C13.8516 32.8938 19.3438 38.3861 26.1189 38.3861Z'
      stroke={COLORS.black}
      strokeWidth='2'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default BackgroundDonutShadow;
