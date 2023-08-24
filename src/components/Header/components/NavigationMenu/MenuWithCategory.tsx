import { FC } from 'react';
import Menu from '../../../Menu';
import { ChildrenType, MenuType, MenuWithCategoryProps } from '../../types';
import LinkItem from './LinkItem';

const MenuWithCategory: FC<MenuWithCategoryProps> = ({
  open,
  anchorEle,
  items,
  index,
  onClick,
}) => (
  <Menu open={open} anchorEle={anchorEle} menuClassName='grid grid-flow-col'>
    {items.children &&
      items.children.map((item: ChildrenType, idx: number) => (
        <Menu.List
          className={'grid grid-rows-8 gap-y-[8px]'}
          key={`menu-item-${idx}-${index}`}
        >
          <LinkItem
            key={`menu-item-${idx}-${index}`}
            isHeader
            icon={item.icon}
            label={item.name}
          />
          {item.menu &&
            item.menu.map((menuItem: MenuType, menuIndex: number) => (
              <LinkItem
                key={`menu-item-${idx}-${index}-${menuIndex}`}
                icon={menuItem.icon}
                label={menuItem.label}
                onClick={onClick}
              />
            ))}
        </Menu.List>
      ))}
  </Menu>
);

export default MenuWithCategory;
