export interface ModelPoint {
  heading: string;
}

export interface ModelCardProps {
  icon: string;
  title: string;
  description: string;
  points: ModelPoint[];
}

export const modelData: ModelCardProps[] = [
  {
    icon: '/assets/Technologies/pages/hourly.svg',
    title: 'Hourly-Based Model',
    description:
      'Ideal for short-term or urgent projects with flexible needs. Pay only for hours worked, with transparent progress.',
    points: [
      {
        heading: 'Flexible and cost-effective',
      },
      {
        heading: 'Pay-as-you-go model',
      },
      {
        heading: 'Full transparency with time tracking',
      },
      {
        heading: 'Adjust team size as needed',
      },
      {
        heading: 'Monthly billing cycle',
      },
      {
        heading: 'Perfect for small-scale projects or ongoing support',
      },
    ],
  },
  {
    icon: '/assets/Technologies/pages/monthly.svg',
    title: 'Monthly-Based Model',
    description:
      'Perfect for long-term projects needing continuous development and support, with full-time dedicated resources.',
    points: [
      {
        heading: 'Dedicated developer/team at a fixed monthly rate',
      },
      {
        heading: '100% focus on your project',
      },
      {
        heading: 'Consistent progress and reporting',
      },
      {
        heading: 'Unlimited project adjustments',
      },
      {
        heading: 'Ideal for large-scale or continuous development',
      },
    ],
  },
];
