import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const DownArrow: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='12'
    height='9'
    viewBox='0 0 12 9'
    fill='none'
    {...props}
  >
    <g clipPath='url(#clip0_1822_1151)'>
      <path
        d='M5.99962 7.75908C5.79992 7.75908 5.60024 7.67774 5.44799 7.51542L0.656809 2.40478C0.352027 2.07968 0.352027 1.55258 0.656809 1.22761C0.961467 0.902645 1.45552 0.902645 1.76033 1.22761L5.99962 5.74979L10.2389 1.22777C10.5437 0.902802 11.0377 0.902802 11.3424 1.22777C11.6473 1.55274 11.6473 2.07983 11.3424 2.40493L6.55126 7.51558C6.39893 7.67793 6.19925 7.75908 5.99962 7.75908Z'
        fill={COLORS.white}
      />
    </g>
    <defs>
      <clipPath id='clip0_1822_1151'>
        <rect
          width='11.1429'
          height='7.42857'
          fill={COLORS.white}
          transform='translate(0.428223 0.657227)'
        />
      </clipPath>
    </defs>
  </svg>
);

export default DownArrow;
