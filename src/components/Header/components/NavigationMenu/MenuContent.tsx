import { FC, memo } from 'react';
import { getClassNames } from '@codewinglet/utils';
import { MenuContentProps } from '../../types';

const MenuContent: FC<MenuContentProps> = ({
  wrapperClassName,
  children,
  className = '',
}) => (
  <div
    className={getClassNames(
      'absolute hidden group-hover:animate-enterFromTop',
      wrapperClassName
    )}
  >
    <ul
      className={getClassNames(
        'bg-white w-max h-max p-10 gap-[15px] rounded-10 shadow-lg grid grid-flow-col top-[100%] mt-[34px] z-10',
        className
      )}
    >
      {children}
    </ul>
  </div>
);

export default memo(MenuContent);
