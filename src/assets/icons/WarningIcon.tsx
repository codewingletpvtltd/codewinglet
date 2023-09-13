import { FC, SVGProps } from 'react';
import { COLORS } from '@codewinglet/constants';

const WarningIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24' {...props}>
    <path
      d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z'
      fill={COLORS.warn}
    ></path>
  </svg>
);
export default WarningIcon;
