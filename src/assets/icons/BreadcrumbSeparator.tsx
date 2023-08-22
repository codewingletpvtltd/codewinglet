import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const BreadcrumbSeparator: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='6'
    height='7'
    viewBox='0 0 6 7'
    fill='none'
    {...props}
  >
    <path
      d='M6 3.5L-3.26266e-07 6.9641L-2.34249e-08 0.0358982L6 3.5Z'
      fill={COLORS.lightBlack}
    />
  </svg>
);

export default BreadcrumbSeparator;
