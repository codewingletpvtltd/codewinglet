import { ReactNode } from 'react';

export interface AccordionSummaryProps {
  children: ReactNode;
  expandedIcon?: ReactNode;
  closedIcon?: ReactNode;
  className?: string;
  iconPosition?: string;
  id: string | null;
}
