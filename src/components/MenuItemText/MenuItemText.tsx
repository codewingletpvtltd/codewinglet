import { FC } from 'react';
import { MenuItemTextProps } from './types';
import Typography from '../Typography';

const MenuItemText: FC<MenuItemTextProps> = ({ children, className }) => {
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
