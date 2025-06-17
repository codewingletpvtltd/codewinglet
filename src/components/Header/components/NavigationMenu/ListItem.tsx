import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Url } from 'url';

import Typography from '@codewinglet/components/Typography';
import { getClassNames } from '@codewinglet/utils';

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
              <span className='flex items-center justify-center w-[52px] h-[52px] bg-gray-50 rounded-md'>
                <Image src={icon} alt='Menu Icon' width={28} height={28} />
              </span>
            )}
            <div>
              <Typography
                className={getClassNames(
                  'capitalize ml-4 text-gray-800 text-paragraph2 ',
                  labelClassName
                )}
              >
                {label}
              </Typography>
              {description && (
                <Typography
                  className={getClassNames(
                    'font-bold capitalize ml-4 text-paragraph1 font-400 text-gray-800 2xl:text-subtitle1 xl:text-tagLight',
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
                  'font-bold capitalize text-gray-800 whitespace-nowrap ml-2 font-400',
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
                className={getClassNames(
                  'text-paragraph2 capitalize text-gray-800 mb-4',
                  labelClassName
                )}
              >
                {label}
              </Typography>
              {description && (
                <Typography
                  className={getClassNames(
                    'font-bold capitalize ml-4 text-tagLight font-300 text-dropdownText w-[92%]',
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
            className='flex flex-row items-start cursor-pointer border-l border-dropBorderLeft border-gray-100'
            aria-label='menu-item'
            {...props}
          >
            {icon && (
              <Image src={icon} alt='Menu Icon' width={28} height={28} />
            )}

            <div>
              <Typography
                className={getClassNames(
                  'text-tag text-gray-800 whitespace-nowrap ml-5 mb-[17px] group-last:mb-0',
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
