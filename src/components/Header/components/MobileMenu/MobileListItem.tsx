import { Url } from 'url';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../../../Typography';
import { ListItemProps } from '../../types';

const MobileListItem: FC<ListItemProps> = ({
  icon,
  label,
  description,
  isHeader = false,
  hasMenu = false,
  labelClassName = '',
  href,
  ...props
}) => {
  console.log(icon, label, description, href);
  return (
    <>
      {!hasMenu && (
        <li>
          {isHeader ? (
            <span
              className={`flex flex-row items-${
                description ? 'start' : 'center'
              } cursor-pointer`}
              aria-label='menu-item'
              {...props}
            >
              {icon && <Image src={icon} alt='Menu Icon' />}
              <div>
                <Typography
                  variant='subtitle1'
                  className={getClassNames(
                    'font-bold capitalize  ml-[16px] text-[18px] font-400 text-primary',
                    labelClassName
                  )}
                >
                  {label}
                </Typography>
              </div>
            </span>
          ) : (
            <Link
              href={href as unknown as Url}
              className='flex flex-row items-start cursor-pointer'
              aria-label='menu-item'
              {...props}
            >
              {icon && <Image src={icon} alt='Menu Icon' className='' />}

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
              </div>
            </Link>
          )}
        </li>
      )}

      {hasMenu && (
        <li className='group'>
          {isHeader ? (
            <span
              className={`flex flex-row items-${
                description ? 'start' : 'center'
              } cursor-pointer`}
              aria-label='menu-item'
              {...props}
            >
              {icon && <Image src={icon} alt='Menu Icon' />}
              <div>
                <Typography
                  variant='subtitle1'
                  className={getClassNames(
                    'font-bold capitalize text-[18px] font-500 text-primary mb-5',
                    labelClassName
                  )}
                >
                  {label}
                </Typography>
              </div>
            </span>
          ) : (
            <Link
              href={href as unknown as Url}
              className='flex flex-row items-start cursor-pointer border-l border-dropBorderLeft'
              aria-label='menu-item'
              {...props}
            >
              {icon && <Image src={icon} alt='Menu Icon' className='' />}

              <div>
                <Typography
                  className={getClassNames(
                    'font-bold text-primary hover:text-dropdownText whitespace-nowrap ml-5 font-400 mb-5 group-last:mb-0 text-[14px]',
                    labelClassName
                  )}
                >
                  {label}
                </Typography>
              </div>
            </Link>
          )}
        </li>
      )}
    </>
  );
};

export default MobileListItem;
