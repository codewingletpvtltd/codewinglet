import { ChevronDown } from 'lucide-react';
import { FC } from 'react';
import { MenuTriggerProps } from '../../types';

const MenuTrigger: FC<MenuTriggerProps> = ({ label, showIcon, ...rest }) => (
  <a {...rest} className='flex flex-row items-center'>
    {label}{' '}
    {showIcon && (
      <ChevronDown className='transition duration-200 group-hover:rotate-[180deg]' />
    )}
  </a>
);

export default MenuTrigger;
