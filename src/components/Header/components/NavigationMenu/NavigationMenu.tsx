'use client';

import React from 'react';
import { getClassNames } from '@codewinglet/utils/cn';
import Button from '../../../Button';
import { navMenu } from '../../constants';
import useNavigation from './useNavigation';
import MenuList from './MenuList';
import MenuItems from './MenuItems';
import MenuContent from './MenuContent';
import ListItem from './ListItem';
import MenuTrigger from './MenuTrigger';
import MenuIndicator from './MenuIndicator';

const NavigationMenu = () => {
  const { onMouseEnter, onMouseLeave, left, gridRows, onNavigate } =
    useNavigation();
  return (
    <nav className='flex flex-row items-center gap-[15px] xl:gap-[32px]'>
      <MenuList>
        {navMenu.map((item, index) => (
          <MenuItems
            key={`menu-${index}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <MenuTrigger
              label={item.label}
              showIcon={!!item.children}
              href={item.path || ''}
            />
            {item.children && <MenuIndicator />}
            {item.children ? (
              item.category ? (
                <MenuContent left={left}>
                  {item.children.map((menu, menuIdx) => (
                    <li key={`menu-header-${index}-${menuIdx}`}>
                      <ul className='grid grid-flow-row gap-[15px]'>
                        <ListItem
                          icon={menu.icon}
                          label={menu.label}
                          onClick={onNavigate(menu.path || '')}
                          isHeader
                        />

                        {menu.menu &&
                          menu.menu.map((val, idx) => (
                            <ListItem
                              key={`menu-item-${index}-${menuIdx}-${idx}`}
                              icon={val.icon}
                              label={val.label}
                              onClick={onNavigate(val.path || '')}
                            />
                          ))}
                      </ul>
                    </li>
                  ))}
                </MenuContent>
              ) : (
                <MenuContent
                  left={left}
                  className={getClassNames(gridRows(item.children.length))}
                >
                  {item.children.map((val, index) => (
                    <ListItem
                      key={`menu-item-${index}`}
                      icon={val.icon}
                      label={val.label}
                      onClick={onNavigate(val.path || '')}
                    />
                  ))}
                </MenuContent>
              )
            ) : null}
          </MenuItems>
        ))}
      </MenuList>
      <Button labelClassName='text-[14px]' onClick={onNavigate('contact-us')}>
        Contact Us
      </Button>
    </nav>
  );
};

export default React.memo(NavigationMenu);
