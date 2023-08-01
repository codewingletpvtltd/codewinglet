import { FC } from 'react';
import Typography from '../Typography';
import { MenuItemTextProps } from './types';

const MenuItemText: FC<MenuItemTextProps> = ({ children, className }) => (
  <Typography
    variant='body2'
    className={`font-bold capitalize primary text-darkGray ${className}`}
  >
    {children}
  </Typography>
);

export default MenuItemText;
