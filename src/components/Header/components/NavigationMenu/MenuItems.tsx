import { FC } from 'react';
import { MenuItemsProps } from '../../types';

const MenuItems: FC<MenuItemsProps> = ({
  onMouseEnter,
  onMouseLeave,
  children,
  ...props
}) => (
  <li
    className='list-none relative float-left group'
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    {...props}
  >
    {children}
  </li>
);

export default MenuItems;
