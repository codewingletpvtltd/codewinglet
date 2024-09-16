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
        'bg-white fixed top-[0px] right-0 b-0 overflow-y-auto h-[100vh] transition-ease-in-out duration-500 w-full overflow-hidden',
        showMenu
          ? 'translate-x-0 w-full cubic-bezier-0.59,-0.01,0.42,0.98'
          : 'translate-x-full cubic-bezier-0.59,-0.01,0.42,0.98',
        className as string
      )}
    >
      {children}
    </div>
    {showMenu && !disableBackdrop && (
      <div
        className='left-0 z-0 w-full h-full fixed top-0 bg-[#000000e6]'
        onClick={onMenu}
      ></div>
    )}
  </>
);

export default Drawer;
