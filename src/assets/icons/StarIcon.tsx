import { FC, SVGProps } from 'react';

const StarIcon: FC<SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <svg
    width='71'
    height='71'
    viewBox='0 0 71 71'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <g id='Group'>
      <path
        id='Vector'
        d='M27.9277 0.592407C24.0717 21.5383 20.9457 24.6641 0 28.5201C20.9458 32.3762 24.0717 35.502 27.9277 56.4479C31.7838 35.502 34.9096 32.3762 55.8555 28.5201C34.9096 24.6641 31.7836 21.5383 27.9277 0.592407Z'
        fill='#0278BE'
      />
      <path
        id='Vector_2'
        d='M57.5 44.0001C55.636 54.1251 54.1249 55.6361 44 57.5001C54.125 59.3641 55.636 60.8751 57.5 71.0001C59.364 60.8751 60.875 59.3641 71 57.5001C60.875 55.6361 59.3639 54.1251 57.5 44.0001Z'
        fill='#02457C'
      />
    </g>
  </svg>
);

export default StarIcon;
