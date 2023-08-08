import { FC, SVGProps } from 'react';

const LocationMarkLogo: FC<SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='27'
    viewBox='0 0 24 27'
    fill='none'
    {...rest}
  >
    <g clipPath='url(#clip0_1105_2429)'>
      <path
        d='M12 3C7.038 3 3 7.066 3 12.065C3 19.168 11.154 26.502 11.501 26.81C11.6382 26.9328 11.8157 27.0007 11.9998 27.0009C12.1839 27.0011 12.3616 26.9335 12.499 26.811C12.846 26.502 21 19.168 21 12.065C21 7.066 16.962 3 12 3ZM12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_1105_2429'>
        <rect width='24' height='27' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
export default LocationMarkLogo;
