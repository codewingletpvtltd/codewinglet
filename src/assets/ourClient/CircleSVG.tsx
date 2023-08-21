import { COLORS } from '@codewinglet/constants';

const CircleSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={107}
    height={107}
    viewBox='0 0 107 107'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g opacity={0.1}>
      <mask
        id='mask0_1105_2215'
        style={{
          maskType: 'luminance',
        }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={107}
        height={107}
      >
        <path
          d='M91.1585 91.1585C70.3393 111.978 36.5328 111.978 15.6144 91.1585C-5.20481 70.3393 -5.20481 36.5328 15.6144 15.6144C36.4337 -5.20481 70.2401 -5.20481 91.1585 15.6144C111.978 36.5328 111.978 70.3393 91.1585 91.1585Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_1105_2215)'>
        <path
          d='M96.282 -80.6829L-154.784 170.738L-153.942 171.579L97.1238 -79.8423L96.282 -80.6829Z'
          fill={COLORS.primary}
        />
        <path
          d='M104.349 -72.7L-146.468 179.005L-145.625 179.845L105.191 -71.8602L104.349 -72.7Z'
          fill={COLORS.primary}
        />
        <path
          d='M112.57 -64.4227L-138.531 186.963L-137.689 187.803L113.412 -63.5819L112.57 -64.4227Z'
          fill={COLORS.primary}
        />
        <path
          d='M120.72 -56.2615L-130.381 195.124L-129.54 195.964L121.561 -55.4208L120.72 -56.2615Z'
          fill={COLORS.primary}
        />
        <path
          d='M128.901 -48.1499L-122.342 203.093L-121.501 203.934L129.742 -47.3087L128.901 -48.1499Z'
          fill={COLORS.primary}
        />
        <path
          d='M136.913 -40.1076L-114.046 211.42L-113.204 212.26L137.755 -39.2673L136.913 -40.1076Z'
          fill={COLORS.primary}
        />
        <path
          d='M145.1 -31.8461L-106.143 219.397L-105.302 220.238L145.941 -31.0049L145.1 -31.8461Z'
          fill={COLORS.primary}
        />
        <path
          d='M153.247 -23.6834L-97.9957 227.56L-97.1545 228.401L154.089 -22.8422L153.247 -23.6834Z'
          fill={COLORS.primary}
        />
        <path
          d='M161.25 -15.6718L-89.851 235.714L-89.0093 236.554L162.092 -14.831L161.25 -15.6718Z'
          fill={COLORS.primary}
        />
        <path
          d='M169.273 -7.72304L-81.6509 243.84L-80.8086 244.68L170.115 -6.88288L169.273 -7.72304Z'
          fill={COLORS.primary}
        />
        <path
          d='M-72.8188 252.657L-73.6119 251.863L177.607 0.644646L178.4 1.43775L-72.8188 252.657Z'
          fill={COLORS.primary}
        />
        <path
          d='M185.848 8.82499L-65.6797 259.784L-64.8394 260.626L186.688 9.66717L185.848 8.82499Z'
          fill={COLORS.primary}
        />
      </g>
    </g>
  </svg>
);

export default CircleSVG;
