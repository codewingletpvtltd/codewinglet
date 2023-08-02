import React from 'react';
import { MenuContextProps } from '../types';

export const MenuContext = React.createContext<MenuContextProps | null>(null);

export function useMenuContext() {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error(
      'Menu components cannot be rendered outside the MenuProvider'
    );
  }
  return context;
}
