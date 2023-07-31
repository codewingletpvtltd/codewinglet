import { FC } from 'react';
import { MenuProps } from './types';

const Menu: FC<MenuProps> = ({ children, className, open, onClose }) => {
  // "after:relative after:content-[''] after:h-[20px] after:w-[20px] after:bg-white after:top-[9px] after:left-[45%] after:rotate-[45deg] after:shadow-[1px_1px_25px_0_rgba(0,0,0,0.08)]"
  // "before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-white before:top-[-12px] before:left-[45%] before:rotate-[45deg] before:shadow-[1px_1px_25px_0_rgba(0,0,0,0.08)] before:z-0"
  const _button = document.getElementById('menu-button')?.clientWidth;
  console.log(_button);
  return open ? (
    <div className='absolute'>
      <div className="relative content-[''] h-[20px] w-[20px] bg-white top-[11px] left-[45%] rotate-[45deg] shadow-[1px_1px_25px_0_rgba(0,0,0,0.08)]" />
      <div
        className={`relative bg-white rounded-10 shadow-[1px_1px_25px_0_rgba(0,0,0,0.08)] py-[47px] px-[39px] gap-x-[30px] grid grid-flow-col z-10 ${className}`}
      >
        {children}
      </div>
    </div>
  ) : (
    <div />
  );
};

export default Menu;
