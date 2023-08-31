'use client';
import { Accordion } from '@codewinglet/components';
import { MenuDownArrow } from '@codewinglet/assets';
import { navMenu } from '../../constants';
import ListItem from '../NavigationMenu/ListItem';
import useMobileMenu from './useMobileMenu';

const MobileMenu = () => {
  const { expanded, onMenuExpand } = useMobileMenu();
  return (
    <>
      <div className='fixed bg-[rgba(0,0,0,0.5)] top-[80px] bottom-0 right-0 left-0 inset-0 -z-10 bg-white' />
      <div
        role='presentation'
        className='bg-white fixed top-[80px] left-0 right-0 b-0 border-t border-t-lightBlack pt-[10px] animate-enterFromTop overflow-y-auto max-h-[500px]'
      >
        <div className='flex flex-col mx-[20px] md:mx-[38px] gap-[10px]'>
          {navMenu.map((item, index) => (
            <Accordion
              title={item.label}
              key={`mobile-nav-${index}`}
              variant='secondary'
              titleClassName='text-[14px] font-500 uppercase'
              rightIcon={
                item.children ? (
                  <MenuDownArrow onClick={onMenuExpand(index)} />
                ) : (
                  <></>
                )
              }
              headerClassName='!flex flex-row items-center justify-between pb-[10px] border-b border-b-lightGray w-full'
              expanded={index === expanded}
            >
              {item.children ? (
                item.category ? (
                  <ul className='grid grid-cols-2 list-none border-b border-b-lightGray pb-[20px] gap-[10px]'>
                    {item.children.map((menuItem, menuIndex) => (
                      <li key={`mobile-menu-item-${index}-${menuIndex}`}>
                        <ul className='list-none grid grid-flow-row gap-[16px] mb-[30px]'>
                          <ListItem
                            key={`mobile-menu-item-${index}`}
                            icon={menuItem.icon}
                            label={menuItem.label}
                            labelClassName='!whitespace-normal'
                            isHeader
                          />
                          {menuItem.menu?.map((val, idx) => (
                            <ListItem
                              key={`mobile-menu-item-${index}-${menuIndex}-${idx}`}
                              icon={val.icon}
                              label={val.label}
                              href={val.path}
                              labelClassName='!whitespace-normal'
                            />
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className='grid grid-flow-row grid-cols-2 list-none border-b border-b-lightGray pb-[20px] gap-[10px]'>
                    {item.children.map((val, index) => (
                      <ListItem
                        key={`mobile-menu-item-${index}`}
                        icon={val.icon}
                        label={val.label}
                        href={val.path}
                        labelClassName='!whitespace-normal'
                      />
                    ))}
                  </ul>
                )
              ) : null}
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
