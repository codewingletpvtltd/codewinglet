import { memo } from 'react';

const MenuIndicator = () => (
  <div className='absolute h-[20px] w-[20px] bg-white transform rotate-[45deg] left-9 shadow-lg -z-10 hidden group-hover:block group-hover:animate-enterFromTop' />
);

export default memo(MenuIndicator);
