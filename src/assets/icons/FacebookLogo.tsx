import { FC, SVGProps } from 'react';

const FacebookLogo: FC<SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <svg
    width='12'
    height='18'
    viewBox='0 0 12 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <g id='Frame'>
      <path
        id='Vector'
        d='M9.25155 9.88741L9.65448 7.27587H7.13518V5.58116C7.13518 4.86669 7.48711 4.17026 8.61542 4.17026H9.76074V1.94682C9.76074 1.94682 8.7214 1.77039 7.72767 1.77039C5.65295 1.77039 4.29682 3.0212 4.29682 5.28551V7.27587H1.9906V9.88741H4.29682V16.2006H7.13518V9.88741H9.25155Z'
        fill='white'
      />
    </g>
  </svg>
);
export default FacebookLogo;
