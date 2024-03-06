import { FC } from 'react';
import Image from 'next/image';
import { MobileSubMenuProps } from '../../types';
import MobileListItem from './MobileListItem';
const MobileSubMenu: FC<MobileSubMenuProps> = ({ parentMenu, onBack }) => (
  <div className='flex flex-col mx-[30px] md:mx-[38px] gap-[10px]'>
    <div className='flex gap-3 md:h-[90px] md:items-center h-[78px] items-center '>
      <Image
        src='/assets/icons/LeftArrow.svg'
        alt='arrow'
        width={22}
        height={22}
        onClick={() => onBack()}
      />
      <div className='text-subtitle1'>{parentMenu.label}</div>
    </div>
    <ul className='pointer-events-auto'>
      {parentMenu.children.map((item: any) => (
        <MobileListItem
          icon={item.icon}
          label={item.label}
          key={item.label}
          hasMenu={!!item.menu}
          menu={item.menu}
        />
      ))}
    </ul>
  </div>
);

export default MobileSubMenu;
