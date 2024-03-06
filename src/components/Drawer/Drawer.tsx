import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import { DrawerProps } from './types';

const Drawer: React.FC<DrawerProps> = ({
  showMenu,
  children,
  className,
  disableBackdrop,
}) => (
  <>
    <div
      role='presentation'
      className={getClassNames(
        'bg-white fixed top-[0px] right-0 b-0 animate-enterFromTop overflow-y-auto h-[100vh] transition-all duration-500',
        showMenu ? 'w-full' : 'w-0',
        className as string
      )}
    >
      {children}
    </div>
    {showMenu && !disableBackdrop && (
      <div className='z-0 w-full h-full fixed top-0 bg-[#000000c4]'></div>
    )}
  </>
);

export default Drawer;
