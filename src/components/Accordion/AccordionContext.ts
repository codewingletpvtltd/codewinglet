import { createContext } from 'react';
import { contextType } from './types';

const defaultContext: contextType = {
  activePanelId: null,
  clickHandler: () => {},
  expandIconsHidden: false,
};

const AccordionContext = createContext(defaultContext);

export default AccordionContext;
