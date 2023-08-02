import { ReactNode } from 'react';

export interface AccordionProps {
  children: ReactNode;
  className?: string;
  expandIconsHidden?: boolean;
}
export interface contextType {
  activePanelId: string | null;
  expandIconsHidden: boolean;
  clickHandler: (id: string | null) => void;
}
