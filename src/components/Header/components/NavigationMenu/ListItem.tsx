import Image from 'next/image';
import { FC } from 'react';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../../../Typography';
import { ListItemProps } from '../../types';

export const ListItem: FC<ListItemProps> = ({
  icon,
  label,
  isHeader = false,
  ...props
}) => (
  <li>
    <a
      className={getClassNames(
        'flex flex-row items-center',
        isHeader ? 'border-b border-aqua pb-[15px]' : ''
      )}
      {...props}
    >
      {icon && (
        <Image
          src={icon}
          alt='Menu Icon'
          className={getClassNames(
            isHeader ? 'h-[27px] w-[27px]' : 'h-[36px] w-[36px] rounded-full'
          )}
        />
      )}
      <Typography
        variant='subtitle1'
        className={getClassNames(
          'font-bold capitalize text-lightBlack whitespace-nowrap ml-2',
          isHeader ? 'text-[18px] font-800 text-black' : ''
        )}
      >
        {label}
      </Typography>
    </a>
  </li>
);

export default ListItem;
