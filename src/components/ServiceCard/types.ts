import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  buttonText?: string;
  onClick?: () => void;
}
