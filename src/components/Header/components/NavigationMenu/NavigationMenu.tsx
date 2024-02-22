'use client';

import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import Button from '../../../Button';
import { navMenu } from '../../constants';
import MenuList from './MenuList';
import useNavigation from './useNavigation';
import MenuItems from './MenuItems';
import MenuTrigger from './MenuTrigger';
import MenuIndicator from './MenuIndicator';
import MenuContent from './MenuContent';
// import ListItem from './ListItem';
import {
  ServicesContent,
  IndustryContent,
  TechnologyContent,
  CompanyContent,
} from './SubMenu';

const NavigationMenu = () => {
  const { onMouseEnter, onMouseLeave, gridRows, onNavigate, anchorEle } =
    useNavigation();
  return (
    <nav className='flex-row items-center gap-[15px] xl:gap-[32px] hidden xl:flex'>
      {/* TODO_1.0: In the first release this menu is not working so commented this in 1.0*/}

      <MenuList>
        {navMenu.map((item, index) => (
          <MenuItems
            key={`menu-${index}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            id={`menu-${index}`}
          >
            <MenuTrigger
              label={item.label}
              showIcon={!!item.children}
              href={item.path || '/not-found'}
              hasChild={
                item.children && item.children.length > 0 ? true : false
              }
            />
            {item.children && <MenuIndicator />}
            {item.children ? (
              // item.category ? (
              <MenuContent
                wrapperClassName={getClassNames(
                  item.left,
                  anchorEle?.id === `menu-${index}`
                    ? 'group-hover:block'
                    : 'hidden'
                )}
              >
                {item.label === 'Services' && (
                  <ServicesContent childItems={item.children} index={index} />
                )}
                {item.label === 'Technology' && <TechnologyContent />}
                {item.label === 'Industries' && (
                  <IndustryContent childItems={item.children} index={index} />
                )}
                {item.label === 'Company' && (
                  <CompanyContent childItems={item.children} index={index} />
                )}
                {/* {item.children.map((menu, menuIdx) => (
                    <li key={`menu-header-${index}-${menuIdx}`}>
                      <ul className='grid grid-flow-row gap-[15px]'>
                        <ListItem
                          icon={menu.icon}
                          label={menu.label}
                          isHeader
                        />

                        {menu.menu &&
                          menu.menu.map((val, idx) => (
                            <ListItem
                              key={`menu-item-${index}-${menuIdx}-${idx}`}
                              icon={val.icon}
                              label={val.label}
                              onClick={onMouseLeave}
                              href={val.path ? val.path : '/not-found'}
                            />
                          ))}
                      </ul>
                    </li>
                  ))}
                </MenuContent>
              ) : (
                <MenuContent
                  wrapperClassName={getClassNames(
                    item.left,
                    anchorEle?.id === `menu-${index}`
                      ? 'group-hover:block'
                      : 'hidden'
                  )}
                  className={getClassNames(gridRows(item.children.length))}
                >
                  {item.children.map((val, index) => (
                    <ListItem
                      key={`menu-item-${index}`}
                      icon={val.icon}
                      label={val.label}
                      onClick={onMouseLeave}
                      href={val.path ? val.path : '/not-found'}
                    />
                  ))} */}
              </MenuContent>
            ) : // )
            null}
          </MenuItems>
        ))}
      </MenuList>
      <Button onClick={onNavigate('contact-us')}>Contact Us</Button>
    </nav>
  );
};

export default React.memo(NavigationMenu);
