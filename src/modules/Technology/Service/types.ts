import { DevelopmentService } from '../types';

export interface CardProps {
  icon?: string;
  title: string;
  desc?: string;
}

export interface ServiceProps {
  services: DevelopmentService[];
  technologyName: string;
}
