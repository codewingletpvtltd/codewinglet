import { FC, SVGProps } from 'react';

const LeftArrow: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill=''
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clip-path='url(#clip0_1211_3054)'>
      <path
        d='M5.29475 9.99995C5.29475 9.64151 5.43161 9.28311 5.70476 9.00983L14.3044 0.410283C14.8514 -0.136761 15.7384 -0.136761 16.2852 0.410283C16.832 0.957105 16.832 1.84387 16.2852 2.39095L8.67576 9.99995L16.2849 17.609C16.8318 18.156 16.8318 19.0427 16.2849 19.5895C15.7381 20.1368 14.8512 20.1368 14.3041 19.5895L5.70449 10.9901C5.4313 10.7166 5.29475 10.3583 5.29475 9.99995Z'
        fill=''
      />
    </g>
    <defs>
      <clipPath id='clip0_1211_3054'>
        <rect
          width='20'
          height='20'
          fill=''
          transform='matrix(0 1 -1 0 20 0)'
        />
      </clipPath>
    </defs>
  </svg>
);

export default LeftArrow;
