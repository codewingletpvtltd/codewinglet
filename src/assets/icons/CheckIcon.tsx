import { FC, SVGProps } from 'react';

const CheckIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='30'
    viewBox='0 0 30 30'
    fill='none'
    {...props}
  >
    <path
      d='M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z'
      fill='#26AD5C'
    />
    <path
      d='M11.25 15L13.75 17.5L18.75 12.5'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default CheckIcon;
