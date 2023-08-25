import { FC } from 'react';
import { MenuItemsProps } from '../../types';

const MenuItems: FC<MenuItemsProps> = ({
  onMouseEnter,
  onMouseLeave,
  children,
}) => (
  <li
    className='list-none relative float-left group'
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </li>
);

export default MenuItems;
