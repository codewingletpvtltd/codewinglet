import { MouseEvent } from 'react';
export interface MenuListProps {
  children: React.ReactNode;
}

export interface MenuItemsProps {
  onMouseEnter: (e: MouseEvent<HTMLLIElement>) => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}

export interface MenuContentProps {
  left: string;
  children: React.ReactNode;
  className?: string;
}

export interface ListItemProps {
  icon?: string;
  label: string;
  isHeader?: boolean;
  labelClassName?: string;
  onClick?: () => void;
}

export interface MenuTriggerProps {
  label: string;
  showIcon?: boolean;
  href: string;
}

export type ChildItemType = {
  label: string;
  icon?: string;
  path?: string;
  menu?: {
    label: string;
    icon?: string;
    path?: string;
  }[];
}[];

export interface MobileMenuProps {
  onMenu: () => void;
}
