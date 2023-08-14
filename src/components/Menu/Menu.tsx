import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import {
  MenuItemIconProps,
  MenuItemProps,
  MenuItemTextProps,
  MenuListProps,
  MenuProps,
} from './types';
import { MenuContext } from './context/MenuContext';
import { getAnchorPosition } from './utils';
import { MenuItem, MenuItemIcon, MenuItemText, MenuList } from './components';

const Menu: React.FC<MenuProps> & {
  List: React.FC<MenuListProps>;
  Item: React.FC<MenuItemProps>;
  ItemIcon: React.FC<MenuItemIconProps>;
  ItemText: React.FC<MenuItemTextProps>;
} = ({ children, className = '', anchorEle, open, onClose }) => {
  const { _anchorPosition, menuContainerPosition } =
    getAnchorPosition(anchorEle);

  return (
    <MenuContext.Provider value={{ open, onClose }}>
      <div
        role='presentation'
        className={getClassNames(
          'inset-x-0 pt-[15px] absolute w-full',
          open ? 'visible' : 'invisible',
          className
        )}
      >
        <div
          className={getClassNames(
            'absolute block content-[""] h-[20px] w-[20px] bg-white translate-x-[-45%] rotate-[45deg] transition-opacity z-[100] top-[5px]',
            'transition-opacity'
          )}
          style={{ ..._anchorPosition }}
        />
        <div
          id='menu-container'
          className={getClassNames(
            'absolute bg-white rounded-[10px] py-[47px] px-[39px] gap-x-[30px] grid grid-flow-col z-10 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] shadow-none  min-w-[272px]',
            'transform-none transition-opacity'
          )}
          style={{ ...menuContainerPosition }}
        >
          {children}
        </div>
      </div>
    </MenuContext.Provider>
  );
};

Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.ItemIcon = MenuItemIcon;
Menu.ItemText = MenuItemText;

export default Menu;
