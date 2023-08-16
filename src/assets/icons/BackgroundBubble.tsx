import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const BackgroundBubble: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={17}
    viewBox='0 0 17 17'
    fill='none'
    {...props}
  >
    <circle cx='8.95878' cy='8.05198' r='8.04124' fill={COLORS.sky} />
  </svg>
);

export default BackgroundBubble;
