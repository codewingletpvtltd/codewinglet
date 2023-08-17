import React from 'react';
import { useMenuContext } from '../context/MenuContext';
import { MenuItemProps } from '../types';

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className,
  ...rest
}) => {
  const menuContext = useMenuContext();

  if (!menuContext) return null;
  return (
    <li
      className={`flex flex-row items-center hover:cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </li>
  );
};

export default MenuItem;
