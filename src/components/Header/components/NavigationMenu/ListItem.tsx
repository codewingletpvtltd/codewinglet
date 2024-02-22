import { Url } from 'url';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../../../Typography';
import { ListItemProps } from '../../types';

export const ListItem: FC<ListItemProps> = ({
  icon,
  label,
  description,
  isHeader = false,
  labelClassName = '',
  href,
  ...props
}) => {
  console.log(
    icon,
    label,
    description,

    href
  );
  return (
    <>
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
            <Typography
              variant='subtitle1'
              className={getClassNames(
                'font-bold capitalize whitespace-nowrap ml-2 text-[18px] font-800 text-primary',
                labelClassName
              )}
            >
              {description}
            </Typography>
          </span>
        ) : (
          <Link
            href={href as unknown as Url}
            className='flex flex-row items-start cursor-pointer'
            aria-label='menu-item'
            {...props}
          >
            <div>
              {icon && <Image src={icon} alt='Menu Icon' className='' />}
            </div>
            <div>
              <Typography
                variant='subtitle1'
                className={getClassNames(
                  'font-bold capitalize text-primary whitespace-nowrap ml-2 font-400',
                  labelClassName
                )}
              >
                {label}
              </Typography>
              <Typography
                variant='subtitle2'
                className={getClassNames(
                  'font-bold capitalize text-dropdownText whitespace-nowrap ml-2',
                  labelClassName
                )}
              >
                {description}
              </Typography>
            </div>
          </Link>
        )}
      </li>
    </>
  );
};

export default ListItem;
