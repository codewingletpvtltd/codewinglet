import { FC, SVGProps } from 'react';

const DownArrows: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='12'
    height='8'
    viewBox='0 0 14 8'
    fill='none'
    {...props}
  >
    <path
      d='M13.8019 1.26421L7.76545 7.67821C7.66718 7.78267 7.54857 7.86591 7.41692 7.92281C7.28527 7.97971 7.14337 8.00906 6.99995 8.00906C6.85653 8.00906 6.71463 7.97971 6.58298 7.92281C6.45133 7.86591 6.33272 7.78267 6.23445 7.67821L0.197948 1.26421C-0.255552 0.782211 0.0859479 -0.00878906 0.747948 -0.00878906H13.2519C13.9139 -0.00878906 14.2554 0.782211 13.8019 1.26421Z'
      fill='white'
    />
  </svg>
);

export default DownArrows;
