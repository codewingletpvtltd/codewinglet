import { FC, SVGProps } from 'react';

const WebAppIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width='30'
    height='30'
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M22.5 10V7.5C22.5 6.83696 22.2366 6.20107 21.7678 5.73223C21.2989 5.26339 20.663 5 20 5H5C4.33696 5 3.70107 5.26339 3.23223 5.73223C2.76339 6.20107 2.5 6.83696 2.5 7.5V16.25C2.5 16.913 2.76339 17.5489 3.23223 18.0178C3.70107 18.4866 4.33696 18.75 5 18.75H15'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.5 23.7508V18.8008V22.7383'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.75 23.75H15'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M25 15H22.5C21.1193 15 20 16.1193 20 17.5V25C20 26.3807 21.1193 27.5 22.5 27.5H25C26.3807 27.5 27.5 26.3807 27.5 25V17.5C27.5 16.1193 26.3807 15 25 15Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default WebAppIcon;
