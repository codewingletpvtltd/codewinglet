import {
  APIIcon,
  CustomIcon,
  EcommerceIcon,
  InteractiveIcon,
  MaintenanceIcon,
  SinglePageIcon,
  WebAppIcon,
} from '@codewinglet/assets/index';

export interface ServiceCardProps {
  icon: React.ReactElement | React.ReactNode;
  iconAlt?: string;
  title: string;
  description: string;
}

export const servicesData: ServiceCardProps[] = [
  {
    icon: <CustomIcon />,
    title: 'Custom Angular Development',
    description:
      'We provide tailored Angular solutions that meet your specific business needs while ensuring scalability and optimal performance.',
  },
  {
    icon: <WebAppIcon />,
    title: 'Angular Web Application Development',
    description:
      'Our Angular web applications are built to handle complex workflows, ensuring speed, scalability, and efficiency, no matter the project size.',
  },
  {
    icon: <SinglePageIcon />,
    iconAlt: 'SinglePage',
    title: 'Single Page Application (SPA) Development',
    description:
      'We develop seamless Single Page Applications (SPAs) that enhance user interaction by reducing page reloads and offering smooth navigation.',
  },
  {
    icon: <InteractiveIcon />,
    iconAlt: 'Interactive',
    title: 'Interactive UI/UX Development',
    description:
      'Our team of Angular developers and UX designers collaborate to create interactive UI/UX designs that captivate users and make navigation intuitive.',
  },
  {
    icon: <EcommerceIcon />,
    iconAlt: 'eCommerce',
    title: 'eCommerce Solutions with Angular',
    description:
      'We build scalable eCommerce platforms with Angular, offering secure payment gateways, user-friendly shopping carts, and personalized product features.',
  },
  {
    icon: <APIIcon />,
    iconAlt: 'API',
    title: 'Angular API Development',
    description:
      'Our team develops secure and efficient APIs that integrate Angular applications with third-party services, mobile apps, and legacy systems.',
  },
  {
    icon: <MaintenanceIcon />,
    iconAlt: 'Maintenance',
    title: 'Maintenance and Support',
    description:
      'We offer continuous support to ensure your Angular applications stay optimized, secure, and up-to-date with regular updates and feature enhancements.',
  },
];
