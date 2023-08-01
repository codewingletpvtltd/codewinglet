import { FC } from 'react';
import { MenuItemProps } from './types';

const MenuItem: FC<MenuItemProps> = ({ children, key, className }) => (
  <li
    key={key}
    className={`flex flex-row items-center hover:cursor-pointer ${className}`}
  >
    {children}
  </li>
);

export default MenuItem;
