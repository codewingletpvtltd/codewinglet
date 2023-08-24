'use client';

import React from 'react';
import { navMenu } from '../../constants';
import Menu from '../../../Menu';
import MenuWithCategory from './MenuWithCategory';
import LinkItem from './LinkItem';

const NavigationMenu = () => {
  const [anchorEle, setAnchorEle] = React.useState<null | HTMLElement>(null);

  return (
    <div className='p-3 w-[100%] mt-[10px] flex justify-end items-center gap-3'>
      {navMenu.map((items, index) => {
        const open = anchorEle?.id === `menu-${items.label}-${index}`;
        return (
          <div
            key={`menu-${items.label}-${index}`}
            onMouseLeave={() => setAnchorEle(null)}
          >
            <button
              id={`menu-${items.label}-${index}`}
              className='mx-50 bg-secondary text-white px-5'
              onMouseEnter={(e) => setAnchorEle(e.currentTarget)}
            >
              {items.label}
            </button>
            {items.children && items.category ? (
              <MenuWithCategory
                open={open}
                anchorEle={anchorEle}
                items={items}
                index={index}
                onClick={() => setAnchorEle(null)}
              />
            ) : (
              <Menu open={open} anchorEle={anchorEle}>
                <Menu.List className='grid grid-flow-col grid-rows-5'>
                  {items.children?.map((item, idx) => (
                    <LinkItem
                      key={`Menu-item-${index}-${idx}`}
                      icon={item.icon}
                      label={item.label}
                      onClick={() => setAnchorEle(null)}
                    />
                  ))}
                </Menu.List>
              </Menu>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavigationMenu;
