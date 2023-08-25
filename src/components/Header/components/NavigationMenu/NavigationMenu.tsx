'use client';

import { getClassNames } from '@codewinglet/utils';
import { navMenu } from '../../constants';
import useNavigation from './useNavigation';
import MenuList from './MenuList';
import MenuItems from './MenuItems';
import MenuContent from './MenuContent';
import ListItem from './ListItem';
import MenuTrigger from './MenuTrigger';
import MenuIndicator from './MenuIndicator';

const NavigationMenu = () => {
  const { onMouseEnter, onMouseLeave, left, gridRows } = useNavigation();
  return (
    <nav className='w-[50%]'>
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
              href={item.path}
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
                          isHeader
                        />

                        {menu.menu.map((val, idx) => (
                          <ListItem
                            key={`menu-item-${index}-${menuIdx}-${idx}`}
                            icon={val.icon}
                            label={val.label}
                            href={val.path}
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
                      href={val.path}
                    />
                  ))}
                </MenuContent>
              )
            ) : null}
          </MenuItems>
        ))}
      </MenuList>
    </nav>
  );
};

export default NavigationMenu;
