export interface ContentProps {
  service: ServiceType;
}

export type ServiceType = {
  img: string;
  title: string;
  subService: {
    label: string;
    icon: string;
  }[];
};
