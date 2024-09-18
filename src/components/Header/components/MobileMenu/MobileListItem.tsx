/* eslint-disable import/order */
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@codewinglet/components/Accordion';
import { getClassNames } from '@codewinglet/utils';
import Image from 'next/image';
import { FC } from 'react';
import Typography from '../../../Typography';
import { ListItemProps } from '../../types';
import ListItem from '../NavigationMenu/ListItem';

const MobileListItem: FC<ListItemProps> = ({
  icon,
  label,
  description,
  hasMenu = false,
  labelClassName = '',
  menu,
  ...props
}) => (
  <>
    {!hasMenu && (
      <li className='list-none'>
        <span
          className={`flex flex-row mb-[45px] items-${
            description ? 'start' : 'center'
          } cursor-pointer`}
          aria-label='menu-item'
          {...props}
        >
          {icon && (
            <Image
              src={icon}
              alt='Menu Icon'
              width={22}
              height={22}
              className='md:h-7 md:w-7'
            />
          )}
          <div>
            <Typography
              className={getClassNames(
                'capitalize md:ml-[15px] ml-3 md:text-subtitle2 text-paragraph2 text-primary',
                labelClassName
              )}
            >
              {label}
            </Typography>
          </div>
        </span>
      </li>
    )}

    {hasMenu && (
      <AccordionItem value={label} key={label}>
        <AccordionTrigger
          className='[&[data-state=open]>img]:rotate-180 text-paragraph2'
          icon={
            <Image
              src={'/assets/icons/DownArrowThin.svg'}
              alt='MenuDownArrow'
              width={18}
              height={18}
              className='md:w-5 md:h-5 w-[18px] h-[18px] transition duration-500 group-hover:rotate-[180deg]'
            />
          }
        >
          <div className='md:text-subtitle2 text-paragraph1'>{label}</div>
        </AccordionTrigger>
        <AccordionContent>
          {menu ? (
            <ul className='grid grid-cols-1 list-none md:gap-2.5 gap-0'>
              {menu.map((menuItem: any, menuIndex: number) => (
                <li
                  key={`mobile-menu-item-${label}-${menuIndex}`}
                  className='group'
                >
                  <ul className='list-none grid grid-flow-row gap-4 mb-[30px] group-last:mb-0'>
                    <ListItem
                      key={`mobile-menu-item-${label}`}
                      icon={menuItem.icon}
                      label={menuItem.label}
                      labelClassName='md:text-subtitle2Light text-paragraph2Light'
                      isHeader
                    />
                  </ul>
                </li>
              ))}
            </ul>
          ) : null}
        </AccordionContent>
      </AccordionItem>
    )}
  </>
);

export default MobileListItem;
