import { WhoUsed } from '../types';

export interface HeroSectionProps {
  title: string;
  description: string;
  bannerImageUrl: string | null;
  logos: WhoUsed;
  technologyName: string;
}
