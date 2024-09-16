import { FC } from 'react';

import { getClassNames } from '@codewinglet/utils';

import { MenuIconProps } from './types';

const MenuIcon: FC<MenuIconProps> = ({ isOpen, onClick, className = '' }) => (
  <div
    className={getClassNames(
      'relative w-[20px] h-[20px] my-[50px] cursor-pointer transition-transform rotate-0 duration-500 ease-in-out block xl:hidden',
      '[&>span]:block [&>span]:absolute [&>span]:h-[2px] [&>span]:w-[22px] [&>span]:bg-black [&>span]:opacity-100 [&>span]:left-0 [&>span]:rounded-[4px] [&>span]:transition-transform [&>span]:rotate-0 [&>span]:duration-300 [&>span]:ease-in-out',
      '[&>span:nth-child(1)]:top-0 [&>span:nth-child(2)]:top-[8px] [&>span:nth-child(3)]:top-[8px] [&>span:nth-child(4)]:top-[16px]',
      isOpen
        ? '[&>span:nth-child(1)]:top-[8px] [&>span:nth-child(1)]:w-0 [&>span:nth-child(1)]:left-[50%] [&>span:nth-child(2)]:rotate-45 [&>span:nth-child(3)]:-rotate-45 [&>span:nth-child(4)]:top-[8px] [&>span:nth-child(4)]:w-0 [&>span:nth-child(4)]:left-[50%]'
        : '',
      className
    )}
    onClick={onClick}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default MenuIcon;
