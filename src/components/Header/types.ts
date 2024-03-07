import { Dispatch, MouseEvent, SetStateAction } from 'react';

export interface HeaderProps {
  isScroll?: boolean;
}
export interface MenuListProps {
  children: React.ReactNode;
}

export interface MenuItemsProps {
  onMouseEnter: (e: MouseEvent<HTMLLIElement>) => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
  id?: any;
}

export interface MenuContentProps {
  wrapperClassName: string;
  children: React.ReactNode;
  className?: any;
}

export interface ListItemProps {
  icon?: string;
  label: string;
  description?: string;
  isHeader?: boolean;
  labelClassName?: string;
  onClick?: () => void;
  href?: string;
  hasMenu?: boolean;
  menu?: any;
}

export interface MenuTriggerProps {
  label: string;
  showIcon?: boolean;
  href: string;
  hasChild?: boolean | false;
}

export type ChildItemType = {
  label: string;
  icon?: string;
  description?: string;
  path?: string;
  menu?: {
    label: string;
    icon?: string;
    path?: string;
  }[];
}[];

export interface MobileMenuProps {
  onMenu: () => void;
  subMenuIndex: number;
  setSubMenuIndex: Dispatch<SetStateAction<number>>;
}
export interface SubMenuContentProps {
  childItems: ChildItemType;
  index: number;
}

export interface MobileSubMenuProps {
  parentMenu: any; // change the type later
  onBack: () => void;
}
