import { FC, SVGProps } from 'react';

const CoreIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='30'
    viewBox='0 0 30 30'
    fill='none'
    {...props}
  >
    <path
      d='M27.5 7.5H2.5'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M27.5 22.5H2.5'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M7.5 2.5V27.5'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M22.5 2.5V27.5'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export default CoreIcon;
