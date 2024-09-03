/* eslint-disable import/order */
import { Accordion } from '@codewinglet/components/Accordion';
import Image from 'next/image';
import { FC } from 'react';
import { MobileSubMenuProps } from '../../types';
import MobileListItem from './MobileListItem';
const MobileSubMenu: FC<MobileSubMenuProps> = ({ parentMenu, onBack }) => (
  <div className='flex flex-col mx-[30px] md:mx-10 gap-2.5'>
    <div className='flex gap-3 md:h-[90px] md:items-center h-[78px] items-center '>
      <Image
        src='/assets/icons/LeftArrow.svg'
        alt='arrow'
        width={22}
        height={22}
        className='cursor-pointer md:w-[22px] md:h-[22px] w-4 h-4'
        onClick={() => onBack()}
      />
      <div
        className='cursor-pointer md:text-h5 text-subtitle1'
        onClick={() => onBack()}
      >
        {parentMenu.label}
      </div>
    </div>
    <div className='pointer-events-auto'>
      <Accordion type='single' defaultValue='0' collapsible>
        {parentMenu.children.map((item: any) => (
          <MobileListItem
            icon={item.icon}
            label={item.label}
            key={item.label}
            hasMenu={!!item.menu}
            menu={item.menu}
          />
        ))}
      </Accordion>
    </div>
  </div>
);

export default MobileSubMenu;
