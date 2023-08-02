import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import { MenuComposition, MenuProps } from './types';
import { MenuContext } from './context/MenuContext';
import { getAnchorPosition } from './utils';

const Menu: React.FC<MenuProps> & MenuComposition = ({
  children,
  className = '',
  anchorEle,
  open,
  onClose,
}) => {
  const { top, _anchorPosition, menuPosition } = getAnchorPosition(anchorEle);

  return (
    <MenuContext.Provider value={{ open, onClose }}>
      <div
        role='presentation'
        className={getClassNames(
          'fixed z-[1300] inset-0',
          open ? 'visible' : 'invisible'
        )}
        onClick={onClose}
      >
        <div
          aria-hidden='true'
          className='fixed flex align-center items-center justify-center ring-0 bg-t -z-1'
          style={{ opacity: open ? 1 : 0 }}
        />
        <div
          className={getClassNames(
            'absolute block content-[""] h-[20px] w-[20px] bg-white translate-x-[-45%] rotate-[45deg] mt-[30px] transition-opacity z-[100]'
          )}
          style={{ top, ..._anchorPosition }}
        />
        <div
          id={'menu-container'}
          className={getClassNames(
            'absolute bg-white rounded-10 py-[47px] px-[39px] gap-x-[30px] grid grid-flow-col z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] shadow-none mt-[40px] min-w-[272px] max-w-[calc(100%-40px)]',
            'transform-none transition-opacity',
            className
          )}
          style={{ opacity: open ? 1 : 0, top, ...menuPosition }}
        >
          {children}
        </div>
      </div>
    </MenuContext.Provider>
  );
};
export default Menu;
