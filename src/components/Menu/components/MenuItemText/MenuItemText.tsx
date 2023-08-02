import React from 'react';
import Typography from '../../../Typography';
import { useMenuContext } from '../../context/MenuContext';
import { MenuItemTextProps } from './types';

const MenuItemText: React.FC<MenuItemTextProps> = ({ children, className }) => {
  const menuContext = useMenuContext();

  if (!menuContext) return null;
  return (
    <Typography
      variant='body2'
      className={`font-bold capitalize primary text-darkGray ${className}`}
    >
      {children}
    </Typography>
  );
};

export default MenuItemText;
