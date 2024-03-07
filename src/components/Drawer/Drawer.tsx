import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import { DrawerProps } from './types';

const Drawer: React.FC<DrawerProps> = ({
  showMenu,
  onMenu,
  children,
  className,
  disableBackdrop,
}) => (
  <>
    <div
      role='presentation'
      className={getClassNames(
        'bg-white fixed top-[0px] right-0 b-0 animate-enterFromTop overflow-y-auto h-[100vh] transition-ease-in-out duration-700 w-full',
        showMenu ? 'translate-x-0 w-full ' : 'translate-x-full ',
        className as string
      )}
    >
      {children}
    </div>
    {showMenu && !disableBackdrop && (
      <div
        className='z-0 w-full h-full fixed top-0 bg-[#000000e6] '
        onClick={onMenu}
      ></div>
    )}
  </>
);

export default Drawer;
