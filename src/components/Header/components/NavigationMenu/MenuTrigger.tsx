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
        variant='subtitle1'
        className='font-400 text-silver after:transition-all after:duration-500 after:ease-in-out hover:text-white hover:after:content hover:after:absolute after:w-0 hover:after:w-[65px] hover:after:h-[2px] hover:after:bg-white after:top-auto after:bottom-[-11px] after:left-1/2 after:translate-y-[-50%] after:translate-x-[-50%]'
      >
        {label}
      </Typography>
    </span>
  ) : (
    <Link href={href} className='flex flex-row items-center'>
      <Typography
        variant='subtitle1'
        className='font-400 text-silver hover:text-white'
      >
        {label}
      </Typography>
      {showIcon && (
        <MenuDownArrow className='transition duration-200 group-hover:rotate-[180deg] ml-[3px]' />
      )}
    </Link>
  );

export default memo(MenuTrigger);
