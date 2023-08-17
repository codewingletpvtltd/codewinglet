import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const BackgroundDonut: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={82}
    height={82}
    viewBox='0 0 82 82'
    fill='none'
    {...props}
  >
    <g opacity='0.1'>
      <path
        d='M41.1828 79.3656C20.07 79.3656 3 62.2956 3 41.1828C3 20.07 20.07 3 41.1828 3C62.2956 3 79.3656 20.07 79.3656 41.1828C79.3656 62.2956 62.2956 79.3656 41.1828 79.3656ZM41.1828 20.9684C29.9526 20.9684 20.9684 29.9526 20.9684 41.1828C20.9684 52.413 29.9526 61.3972 41.1828 61.3972C52.413 61.3972 61.3972 52.413 61.3972 41.1828C61.3972 29.9526 52.413 20.9684 41.1828 20.9684Z'
        stroke={COLORS.primary}
        strokeWidth='5'
        strokeMiterlimit='10'
      />
    </g>
  </svg>
);

export default BackgroundDonut;
