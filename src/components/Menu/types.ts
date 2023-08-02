import React from 'react';

export interface MenuProps {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  onClose?: () => void;
  anchorEle?: HTMLElement | null | undefined;
}

export type MenuContextProps = {
  open?: boolean;
  onClose?: () => void;
};

export interface MenuComposition {
  List?: React.ElementType;
  Item?: React.ElementType;
  ItemIcon?: React.ElementType;
  ItemText?: React.ElementType;
}
