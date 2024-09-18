export interface BlogCardProps {
  image?: string;
  desc?: string;
  title: string;
  date?: string; // Changed from Date to string
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}
