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
  hasMenu = false,
  labelClassName = '',
  href,
  ...props
}) => (
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
            {icon && (
              <span className='flex items-center justify-center w-[52px] h-[52px] bg-bg rounded-md'>
                <Image src={icon} alt='Menu Icon' width={28} height={28} />
              </span>
            )}
            <div>
              <Typography
                className={getClassNames(
                  'capitalize ml-[16px]  text-primary text-paragraph2 ',
                  labelClassName
                )}
              >
                {label}
              </Typography>
              {description && (
                <Typography
                  className={getClassNames(
                    'font-bold capitalize ml-[16px] text-[18px] font-400 text-primary 2xl:text-subtitle1 xl:text-[14px]',
                    labelClassName
                  )}
                >
                  {description}
                </Typography>
              )}
            </div>
          </span>
        ) : (
          <Link
            href={href as unknown as Url}
            className='flex flex-row items-start cursor-pointer'
            aria-label='menu-item'
            {...props}
          >
            {icon && (
              <Image src={icon} alt='Menu Icon' width={52} height={52} />
            )}

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
              {description && (
                <Typography
                  variant='subtitle2'
                  className={getClassNames(
                    'font-bold capitalize text-dropdownText whitespace-nowrap ml-2',
                    labelClassName
                  )}
                >
                  {description}
                </Typography>
              )}
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
            {icon && (
              <Image src={icon} alt='Menu Icon' width={52} height={52} />
            )}
            <div>
              <Typography
                variant='subtitle1'
                className={getClassNames(
                  'text-paragraph2 capitalize text-primary mb-5',
                  labelClassName
                )}
              >
                {label}
              </Typography>
              {description && (
                <Typography
                  className={getClassNames(
                    'font-bold capitalize ml-[16px] text-[14px] font-300 text-dropdownText w-[92%]',
                    labelClassName
                  )}
                >
                  {description}
                </Typography>
              )}
            </div>
          </span>
        ) : (
          <Link
            href={href as unknown as Url}
            className='flex flex-row items-start cursor-pointer border-l border-dropBorderLeft border-headerBoxBorder'
            aria-label='menu-item'
            {...props}
          >
            {icon && (
              <Image src={icon} alt='Menu Icon' width={28} height={28} />
            )}

            <div>
              <Typography
                className={getClassNames(
                  'text-tag text-primary whitespace-nowrap ml-5  mb-5 group-last:mb-0',
                  labelClassName
                )}
              >
                {label}
              </Typography>
              {description && (
                <Typography
                  variant='subtitle2'
                  className={getClassNames(
                    'font-bold capitalize text-dropdownText whitespace-nowrap ml-2',
                    labelClassName
                  )}
                >
                  {description}
                </Typography>
              )}
            </div>
          </Link>
        )}
      </li>
    )}
  </>
);

export default ListItem;
