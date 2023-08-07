import React from 'react';

export interface MenuProps {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  onClose?: () => void;
  anchorEle?: HTMLElement | null;
}

export type MenuContextProps = {
  open?: boolean;
  onClose?: () => void;
};

export interface MenuListProps {
  children: React.ReactNode;
  className?: string;
}

export interface MenuItemProps {
  children: React.ReactNode;
  className?: string;
}

export interface MenuItemIconProps {
  children: React.ReactNode;
}

export interface MenuItemTextProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
