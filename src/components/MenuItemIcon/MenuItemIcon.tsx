import { FC } from 'react';
import { MenuItemIconProps } from './types';

const MenuItemIcon: FC<MenuItemIconProps> = ({ children }) => {
  return <>{children ? children : <div className='h-[36px]' />}</>;
};

export default MenuItemIcon;
