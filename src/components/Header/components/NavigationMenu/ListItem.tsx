import { Url } from 'url';
import { FC, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../../../Typography';
import { ListItemProps } from '../../types';

export const ListItem: FC<ListItemProps> = ({
  icon,
  label,
  isHeader = false,
  labelClassName = '',
  href,
  ...props
}) => (
  <li>
    {isHeader ? (
      <span
        className='flex flex-row items-center cursor-pointer border-b border-aqua pb-[15px]'
        aria-label='menu-item'
        {...props}
      >
        {icon && (
          <Image src={icon} alt='Menu Icon' className='h-[27px] w-[27px]' />
        )}
        <Typography
          variant='subtitle1'
          className={getClassNames(
            'font-bold capitalize whitespace-nowrap ml-2 text-[18px] font-800 text-primary',
            labelClassName
          )}
        >
          {label}
        </Typography>
      </span>
    ) : (
      <Link
        href={href as unknown as Url}
        className='flex flex-row items-center cursor-pointer'
        aria-label='menu-item'
        {...props}
      >
        {icon && (
          <Image
            src={icon}
            alt='Menu Icon'
            className='h-[36px] w-[36px] rounded-full'
          />
        )}
        <Typography
          variant='subtitle1'
          className={getClassNames(
            'font-bold capitalize text-lightBlack whitespace-nowrap ml-2',
            labelClassName
          )}
        >
          {label}
        </Typography>
      </Link>
    )}
  </li>
);

export default memo(ListItem);
