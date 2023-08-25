import { FC } from 'react';
import { getClassNames } from '@codewinglet/utils';
import { MenuContentProps } from '../../types';

const MenuContent: FC<MenuContentProps> = ({
  left,
  children,
  className = '',
}) => (
  <div
    className='absolute animate-exitToTop hidden group-hover:block group-hover:animate-enterFromTop'
    style={{
      left: left,
    }}
  >
    <ul
      className={getClassNames(
        'bg-white w-max h-max p-10 gap-[15px] rounded-10 shadow-lg grid grid-flow-col top-[100%] mt-[10px] z-10',
        className
      )}
    >
      {children}
    </ul>
  </div>
);

export default MenuContent;
