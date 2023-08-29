import { FC } from 'react';
import { MenuListProps } from '../../types';

const MenuList: FC<MenuListProps> = ({ children }) => (
  <ul className='relative flex items-center justify-between'>{children}</ul>
);

export default MenuList;
