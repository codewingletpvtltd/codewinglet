import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Typography from '../../../Typography';
import { MenuTriggerProps } from '../../types';

const MenuTrigger: FC<MenuTriggerProps> = ({
  label,
  showIcon,
  href,
  hasChild = false,
}) =>
  hasChild ? (
    <span className='flex flex-row items-center cursor-pointer'>
      <Typography className='relative text-paragraph2Light  after:transition-all after:duration-500 after:ease-in-out text-white  hover:after:content hover:after:absolute after:w-0 hover:after:w-[calc(100%)] hover:after:h-[2px] hover:after:bg-white after:bottom-[-11px] after:left-0'>
        {label}
      </Typography>
    </span>
  ) : (
    <Link href={href} className='flex flex-row items-center'>
      <Typography className='relative text-paragraph2Light  after:transition-all after:duration-500 after:ease-in-out text-white  hover:after:content hover:after:absolute after:w-0 hover:after:w-[calc(100%)] hover:after:h-[2px] hover:after:bg-white after:bottom-[-11px] after:left-0'>
        {label}
      </Typography>
      {showIcon && (
        <Image
          src={'/assets/icons/MenuDownArrow.svg'}
          alt='MenuDownArrow'
          width={50}
          height={50}
          className='transition duration-200 group-hover:rotate-[180deg] ml-[3px]'
        />
      )}
    </Link>
  );

export default MenuTrigger;
