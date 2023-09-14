import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const PlusIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='19'
    height='20'
    viewBox='0 0 19 20'
    fill='none'
    {...props}
  >
    <path
      d='M17.7045 8.16433H11.2272V1.68706C11.2272 0.971966 10.6469 0.391602 9.93177 0.391602H9.06819C8.3531 0.391602 7.77273 0.971966 7.77273 1.68706V8.16433H1.29546C0.580364 8.16433 0 8.7447 0 9.45979V10.3234C0 11.0385 0.580364 11.6188 1.29546 11.6188H7.77273V18.0961C7.77273 18.8112 8.3531 19.3916 9.06819 19.3916H9.93177C10.6469 19.3916 11.2272 18.8112 11.2272 18.0961V11.6188H17.7045C18.4196 11.6188 19 11.0385 19 10.3234V9.45979C19 8.7447 18.4196 8.16433 17.7045 8.16433Z'
      fill={COLORS.primary}
    />
  </svg>
);
export default PlusIcon;
