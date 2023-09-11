import { StaticImageData } from 'next/image';

export interface BlogCardProps {
  image?: StaticImageData;
  desc?: string;
  title: string;
  date?: Date;
}
