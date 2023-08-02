import { ReactNode } from 'react';

export interface AccordionProps {
  children: ReactNode;
  className?: string;
}
export interface contextType {
  activePanelId: string | null;
  clickHandler: (id: string | null) => void;
}
