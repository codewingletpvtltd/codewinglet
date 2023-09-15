'use client';

import React from 'react';
import Button from '../../../Button';
import useNavigation from './useNavigation';

const NavigationMenu = () => {
  const { onMouseEnter, onMouseLeave, gridRows, onNavigate, anchorEle } =
    useNavigation();
  return (
    <nav className='flex flex-row items-center gap-[15px] xl:gap-[32px]'>
      {/* TODO_1.0: In the first release this menu is not working so commented this in 1.0*/}

      {/* <MenuList>
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
              item.category ? (
                <MenuContent
                  wrapperClassName={getClassNames(
                    item.left,
                    anchorEle?.id === `menu-${index}`
                      ? 'group-hover:block'
                      : 'hidden'
                  )}
                >
                  {item.children.map((menu, menuIdx) => (
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
                  ))}
                </MenuContent>
              )
            ) : null}
          </MenuItems>
        ))}
      </MenuList> */}
      <Button labelClassName='text-[14px]' onClick={onNavigate('contact-us')}>
        Contact Us
      </Button>
    </nav>
  );
};

export default React.memo(NavigationMenu);
