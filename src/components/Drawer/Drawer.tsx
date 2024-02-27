import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import { DrawerProps } from './types';

const Drawer: React.FC<DrawerProps> = ({ showMenu, children, className }) => (
  //const { expanded, onMenuExpand, onNavigate } = useMobileMenu(onMenu);
  <>
    {/* <div className='fixed bg-[rgba(0,0,0,0.5)] top-[80px] bottom-0 right-0 left-0 inset-0 -z-10 bg-white' /> */}
    <div
      role='presentation'
      className={getClassNames(
        'bg-white fixed top-[80px] right-0 b-0 pt-[10px] animate-enterFromTop overflow-y-auto h-[100vh] pb-[100px] transition-all duration-500',
        showMenu ? 'w-full' : 'w-0',
        className as string
      )}
    >
      {children}
    </div>
  </>
);

export default Drawer;
