import React from 'react';
import { useMenuContext } from '../../context/MenuContext';
import { MenuListProps } from '../../types';

const MenuList: React.FC<MenuListProps> = ({ children, className = '' }) => {
  const menuContext = useMenuContext();

  if (!menuContext) return null;
  return (
    <ul className={`grid grid-flow-row gap-[15px] ${className}`}>{children}</ul>
  );
};

export default MenuList;
