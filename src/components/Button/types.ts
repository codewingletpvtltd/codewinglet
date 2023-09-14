import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'contained';
  startIcon?: React.ReactNode;
  className?: string;
  labelClassName?: string;
}
