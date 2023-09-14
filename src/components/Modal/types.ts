export interface ModalProps {
  children: React.ReactNode;
  title?: string;
  onClose?: () => void;
  onApply?: () => void;
  open: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}
