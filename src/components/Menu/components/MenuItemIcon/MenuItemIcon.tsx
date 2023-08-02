import React from 'react';
import { useMenuContext } from '../../context/MenuContext';
import { MenuItemIconProps } from './types';

const MenuItemIcon: React.FC<MenuItemIconProps> = ({ children }) => {
  const menuContext = useMenuContext();

  if (!menuContext) return null;
  return <>{children ? children : <div className='h-[36px]' />}</>;
};

export default MenuItemIcon;
