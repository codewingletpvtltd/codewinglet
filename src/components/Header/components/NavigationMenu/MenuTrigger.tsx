import { FC } from 'react';
import { MenuDownArrow } from '@codewinglet/assets';
import { MenuTriggerProps } from '../../types';
import Typography from '../../../Typography';

const MenuTrigger: FC<MenuTriggerProps> = ({ label, showIcon, ...rest }) => (
  <a {...rest} className='flex flex-row items-center'>
    <Typography variant='subtitle2' className='font-500 text-black uppercase'>
      {label}
    </Typography>
    {showIcon && (
      <MenuDownArrow className='transition duration-200 group-hover:rotate-[180deg] ml-[3px]' />
    )}
  </a>
);

export default MenuTrigger;
