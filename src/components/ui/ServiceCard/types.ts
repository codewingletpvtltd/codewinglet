import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
  buttonText?: string;
  onClick?: () => void;
}
