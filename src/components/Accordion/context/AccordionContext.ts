'use client';

import React from 'react';
import { AccordionContextProps } from '../types';

export const AccordionContext =
  React.createContext<AccordionContextProps | null>(null);

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  // if (!context) {
  //   throw new Error(
  //     'Menu components cannot be rendered outside the MenuProvider'
  //   );
  // }
  return context;
};
