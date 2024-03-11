export interface ContentProps {
  service: ServiceType;
}

export type ServiceType = {
  img: string;
  title: string;
  description: string;
  path: string;
  subService: {
    label: string;
    path: string;
  }[];
};
