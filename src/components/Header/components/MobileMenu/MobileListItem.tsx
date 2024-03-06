import { FC } from 'react';
import Image from 'next/image';
import { getClassNames } from '@codewinglet/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@codewinglet/components/Accordion';
import Typography from '../../../Typography';
import { ListItemProps } from '../../types';
import ListItem from '../NavigationMenu/ListItem';

const MobileListItem: FC<ListItemProps> = ({
  icon,
  label,
  description,
  hasMenu = false,
  labelClassName = '',
  href,
  menu,
  ...props
}) => (
  <>
    {!hasMenu && (
      <li>
        <span
          className={`flex flex-row mb-[30px] items-${
            description ? 'start' : 'center'
          } cursor-pointer`}
          aria-label='menu-item'
          {...props}
        >
          {icon && <Image src={icon} alt='Menu Icon' width={22} height={22} />}
          <div>
            <Typography
              className={getClassNames(
                ' capitalize  ml-[16px] text-[18px] text-paragraph2 text-primary',
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
      <Accordion type='single' defaultValue='0' collapsible>
        <AccordionItem value={label} key={label}>
          <AccordionTrigger
            className='[&[data-state=open]>svg]:rotate-180 text-paragraph2 font-medium'
            icon={<></>}
          >
            <div className='text-paragraph2'>{label}</div>
            <Image
              src={'/assets/icons/DownArrowThin.svg'}
              alt='MenuDownArrow'
              width={18}
              height={18}
              className='transition duration-200 group-hover:rotate-[180deg]'
            />
          </AccordionTrigger>
          <AccordionContent>
            {menu ? (
              <ul className='grid grid-cols-1 list-none md:gap-[10px] gap-0'>
                {menu.map((menuItem: any, menuIndex: number) => (
                  <li
                    key={`mobile-menu-item-${label}-${menuIndex}`}
                    className='group'
                  >
                    <ul className='list-none grid grid-flow-row gap-[16px] mb-[30px] group-last:mb-0'>
                      <ListItem
                        key={`mobile-menu-item-${label}`}
                        icon={menuItem.icon}
                        label={menuItem.label}
                        labelClassName='!whitespace-normal text-paragraph2Light font-medium'
                        isHeader
                      />
                    </ul>
                  </li>
                ))}
              </ul>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )}
  </>
);

export default MobileListItem;
