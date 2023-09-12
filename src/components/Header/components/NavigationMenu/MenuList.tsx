import React, { FC } from 'react';
import { MenuListProps } from '../../types';

const MenuList: FC<MenuListProps> = ({ children }) => (
  <ul className='flex items-center justify-between lg:gap-[15px] xl:gap-[30px]'>
    {children}
  </ul>
);

export default React.memo(MenuList);
