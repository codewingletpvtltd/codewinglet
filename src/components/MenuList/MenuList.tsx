import { FC } from 'react';
import { MenuListProps } from './types';

const MenuItems: FC<MenuListProps> = ({ children, className = '', key }) => (
  <ul className={`grid grid-flow-row gap-[15px] ${className}`} key={key}>
    {children}
  </ul>
);

export default MenuItems;
