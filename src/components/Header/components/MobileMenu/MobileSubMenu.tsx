import { FC } from 'react';
import { MobileSubMenuProps } from '../../types';
import MobileListItem from './MobileListItem';
const MobileSubMenu: FC<MobileSubMenuProps> = ({ parentMenu, onBack }) => (
  <div className='flex flex-col mx-[20px] md:mx-[38px] gap-[10px]'>
    <button onClick={() => onBack()}>Back</button>
    <div>{parentMenu.label}</div>
    <ul className='pointer-events-auto'>
      {parentMenu.children.map((item: any) => (
        <MobileListItem
          icon={item.icon}
          label={item.label}
          isHeader
          key={item.label}
        />
      ))}
    </ul>
  </div>
);

export default MobileSubMenu;
