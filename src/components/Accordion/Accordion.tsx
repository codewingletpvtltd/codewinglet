'use client';

import React, { useState } from 'react';
import { AccordionProps } from './types';
import AccordionContext from './AccordionContext';

// Main Accordion component

const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  expandIconsHidden = false,
}) => {
  const [activePanelId, setActivePanelId] = useState<string | null>('panel1');

  const clickHandler = (id: string | null) => {
    setActivePanelId(activePanelId === id ? null : id);
  };

  return (
    <AccordionContext.Provider
      value={{ activePanelId, clickHandler, expandIconsHidden }}
    >
      <div className={className} aria-label='accordion-root'>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};
export default Accordion;
