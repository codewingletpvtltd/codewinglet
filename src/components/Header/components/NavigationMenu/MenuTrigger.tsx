import { FC, memo } from 'react';
import Link from 'next/link';
import { MenuDownArrow } from '@codewinglet/assets';
import { MenuTriggerProps } from '../../types';
import Typography from '../../../Typography';

const MenuTrigger: FC<MenuTriggerProps> = ({
  label,
  showIcon,
  href,
  hasChild = false,
}) =>
  hasChild ? (
    <span className='flex flex-row items-center cursor-pointer'>
      <Typography
        variant='subtitle2'
        className='font-500 text-primary uppercase'
      >
        {label}
      </Typography>
      {showIcon && (
        <MenuDownArrow className='transition duration-200 group-hover:rotate-[180deg] ml-[3px]' />
      )}
    </span>
  ) : (
    <Link href={href} className='flex flex-row items-center'>
      <Typography
        variant='subtitle2'
        className='font-500 text-primary uppercase'
      >
        {label}
      </Typography>
      {showIcon && (
        <MenuDownArrow className='transition duration-200 group-hover:rotate-[180deg] ml-[3px]' />
      )}
    </Link>
  );

export default memo(MenuTrigger);
