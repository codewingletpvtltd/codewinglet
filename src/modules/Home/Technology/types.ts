export interface ContentProps {
  service: ServiceType;
}

export type ServiceType = {
  img: string;
  title: string;
  description: string;
  mainTitle: string;
  path: string;
  subService: {
    label: string;
    icon: string;
  }[];
};
