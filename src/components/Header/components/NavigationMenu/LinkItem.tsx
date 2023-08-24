import Image from 'next/image';
import { FC } from 'react';
import Menu from '@codewinglet/components/Menu';
import { getClassNames } from '@codewinglet/utils';
import { LinkItemProps } from '../../types';

const LinkItem: FC<LinkItemProps> = ({ icon, label, onClick, isHeader }) => (
  <Menu.Item className={isHeader ? 'border-b border-b-aqua pb-[15px]' : ''}>
    <Menu.ItemIcon>
      {icon && (
        <Image
          src={icon}
          alt='Menu Icon'
          className='h-[36px] w-[36px] rounded-full'
        />
      )}
    </Menu.ItemIcon>
    <Menu.ItemText
      className={getClassNames(
        'ml-2',
        isHeader ? 'text-black text-[18px] font-800' : ''
      )}
      onClick={onClick}
    >
      {label}
    </Menu.ItemText>
  </Menu.Item>
);

export default LinkItem;
