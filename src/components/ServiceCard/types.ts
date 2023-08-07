import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
}
