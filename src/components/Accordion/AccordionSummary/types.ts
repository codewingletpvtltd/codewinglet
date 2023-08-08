import { ReactNode } from 'react';

export interface AccordionSummaryProps {
  children: ReactNode;
  expandedIcon?: ReactNode;
  closedIcon?: ReactNode;
  iconPosition?: string;
  className?: string;
  id: string | null;
}
