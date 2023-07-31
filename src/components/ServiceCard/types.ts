export interface ServiceCardProps {
  cardIcon: React.ReactNode;
  cardClass?: string;
  cardTitle: string;
  cardContent: string;
  cardIconClass?: string;
  cardTitleClass?: string;
  cardContentClass?: string;
  onClick?: () => void;
}
