import { ReactNode } from 'react';

export interface AccordionSummaryProps {
  children: ReactNode;
  expandedIcon?: ReactNode;
  closedIcon?: ReactNode;
  iconPosition?: string;
  id: string | null;
}
