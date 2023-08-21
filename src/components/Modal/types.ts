export interface ModalProps {
  children?: React.ReactNode;
  title: string;
  onClose: () => void;
  open: boolean;
}
