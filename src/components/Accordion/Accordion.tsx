import React, { useState } from 'react';
import { AccordionProps } from './types';
import AccordionContext from './AccordionContext';

// Main Accordion component
const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  const [activePanelId, setActivePanelId] = useState<string | null>(null);

  const clickHandler = (id: string | null) => {
    setActivePanelId(activePanelId === id ? null : id);
  };

  return (
    <AccordionContext.Provider value={{ activePanelId, clickHandler }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};
export default Accordion;
