export type Info = {
  title: string;
  value: string;
};
export interface AccordionProps {
  title: string;
  info: Info[];
  children: React.ReactNode;
  expanded?: boolean;
  onChange?: () => void;
  contentClassName?: string;
  onApplyNow?: () => void;
}

export interface SummaryInfoProps {
  title: string;
  value: string;
}

export interface AccordionContextProps {
  title: string;
  info?: Info[];
  expanded?: boolean;
  onChange?: () => void;
  onApplyNow?: () => void;
}
