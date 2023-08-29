import { AnchorHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';
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

export interface ListItemProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  icon?: string;
  label: string;
  isHeader?: boolean;
}

export interface MenuTriggerProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  label: string;
  showIcon?: boolean;
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
