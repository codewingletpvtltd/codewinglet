export interface BenefitCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

export const benefitData: BenefitCardProps[] = [
  {
    iconSrc: '/assets/Technologies/pages/data.svg',
    iconAlt: 'data',
    title: 'Two-Way Data Binding',
    description:
      'Ensures seamless alignment between the model & UI for easier data management.',
  },
  {
    iconSrc: '/assets/Technologies/pages/support.svg',
    iconAlt: 'support',
    title: 'Cross-Platform Support',
    description:
      'Enables apps to run across platforms with consistent user experiences.',
  },
  {
    iconSrc: '/assets/Technologies/pages/code.svg',
    iconAlt: 'code',
    title: 'Reusability of Code',
    description:
      'Accelerates development by reusing components & modules, saving time & costs.',
  },
  {
    iconSrc: '/assets/Technologies/pages/testing.svg',
    iconAlt: 'testing',
    title: 'Extensive Testing Support',
    description:
      'Testing tools enhance code quality and reliability, boosting client confidence.',
  },
  {
    iconSrc: '/assets/Technologies/pages/typeScript.svg',
    iconAlt: 'typeScript',
    title: 'TypeScript Integration',
    description:
      'Offers strong typing and advanced features that improve code quality.',
  },
  {
    iconSrc: '/assets/Technologies/pages/term.svg',
    iconAlt: 'term',
    title: 'Google’s Extended Support',
    description:
      'Ensures regular updates and improvements to keep the framework secure.',
  },
];
