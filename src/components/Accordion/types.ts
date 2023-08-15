import { ReactNode } from 'react';

export interface AccordionProps {
  children: ReactNode;
  expandIconsHidden?: boolean;
}
export interface contextType {
  activePanelId: string | null;
  expandIconsHidden: boolean;
  clickHandler: (id: string | null) => void;
}
