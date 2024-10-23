export interface ServiceCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

export const servicesData: ServiceCardProps[] = [
  {
    iconSrc: '/assets/Technologies/pages/Custom.svg',
    iconAlt: 'Custom',
    title: 'Custom Angular Development',
    description:
      'We provide tailored Angular solutions that meet your specific business needs while ensuring scalability and optimal performance.',
  },
  {
    iconSrc: '/assets/Technologies/pages/WebApp.svg',
    iconAlt: 'WebApp',
    title: 'Angular Web Application Development',
    description:
      'Our Angular web applications are built to handle complex workflows, ensuring speed, scalability, and efficiency, no matter the project size.',
  },
  {
    iconSrc: '/assets/Technologies/pages/SinglePage.svg',
    iconAlt: 'SinglePage',
    title: 'Single Page Application (SPA) Development',
    description:
      'We develop seamless Single Page Applications (SPAs) that enhance user interaction by reducing page reloads and offering smooth navigation.',
  },
  {
    iconSrc: '/assets/Technologies/pages/Interactive.svg',
    iconAlt: 'Interactive',
    title: 'Interactive UI/UX Development',
    description:
      'Our team of Angular developers and UX designers collaborate to create interactive UI/UX designs that captivate users and make navigation intuitive.',
  },
  {
    iconSrc: '/assets/Technologies/pages/eCommerce.svg',
    iconAlt: 'eCommerce',
    title: 'eCommerce Solutions with Angular',
    description:
      'We build scalable eCommerce platforms with Angular, offering secure payment gateways, user-friendly shopping carts, and personalized product features.',
  },
  {
    iconSrc: '/assets/Technologies/pages/API.svg',
    iconAlt: 'API',
    title: 'Angular API Development',
    description:
      'Our team develops secure and efficient APIs that integrate Angular applications with third-party services, mobile apps, and legacy systems.',
  },
  {
    iconSrc: '/assets/Technologies/pages/Maintenance.svg',
    iconAlt: 'Maintenance',
    title: 'Maintenance and Support',
    description:
      'We offer continuous support to ensure your Angular applications stay optimized, secure, and up-to-date with regular updates and feature enhancements.',
  },
];
