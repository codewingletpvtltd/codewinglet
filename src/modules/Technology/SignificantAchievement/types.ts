import { Achievements } from '../types';

export interface CardProps {
  icon?: string;
  title: string;
  desc?: string;
  slideIndex?: string;
}

export interface SignificantAchievementProps {
  achievements: Achievements[];
  technologyName: string;
}
