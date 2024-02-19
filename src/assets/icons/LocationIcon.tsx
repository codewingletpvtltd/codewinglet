import { FC, SVGProps } from 'react';

const LocationIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width='18'
    height='19'
    viewBox='0 0 18 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9.00016 10.0731C10.2925 10.0731 11.3402 9.02541 11.3402 7.73307C11.3402 6.44072 10.2925 5.39307 9.00016 5.39307C7.70781 5.39307 6.66016 6.44072 6.66016 7.73307C6.66016 9.02541 7.70781 10.0731 9.00016 10.0731Z'
      stroke='white'
    />
    <path
      d='M2.71478 6.36799C4.19228 -0.12701 13.8148 -0.11951 15.2848 6.37549C16.1473 10.1855 13.7773 13.4105 11.6998 15.4055C10.1923 16.8605 7.80728 16.8605 6.29228 15.4055C4.22228 13.4105 1.85228 10.178 2.71478 6.36799Z'
      stroke='white'
    />
  </svg>
);
export default LocationIcon;
