export interface ModelPoint {
  heading: string;
}

export interface ModelCardProps {
  title: string;
  description: string;
  points: ModelPoint[];
}

export const modelData: ModelCardProps[] = [
  {
    title: 'Fixed Price model',
    description:
      'It provides clear deliverables while minimizing financial risks. This model offers a structured approach with a set cost, ensuring predictability in expenses.',
    points: [
      {
        heading: 'Transparent Financial Management',
      },
      {
        heading: 'Defined Deliverables for Success',
      },
      {
        heading: 'Timely Delivery',
      },
      {
        heading: 'Financial Security Against Unforeseen Costs',
      },
      {
        heading: 'Performance-Based Payment Structure',
      },
    ],
  },
  {
    title: 'Dedicated team',
    description:
      'If your company requires focused attention on a project, consider our dedicated teams. This model operates on a pay-as-you-go monthly rolling contract.',
    points: [
      {
        heading: 'No hidden costs',
      },
      {
        heading: '160 hours of part-time & full-time work',
      },
      {
        heading: 'Monthly billing',
      },
      {
        heading: 'Pay only for measurable work',
      },
      {
        heading: 'Adjust team size based on project needs',
      },
    ],
  },
  {
    title: 'Hourly Rate Model',
    description:
      'If your company has undefined projects and requires ongoing work, consider our hourly model. This pay-as-you-go contract charges you by the hour.',
    points: [
      {
        heading: 'Quick Start',
      },
      {
        heading: 'Variety of Expertise',
      },
      {
        heading: 'Transparent Progress Tracking',
      },
      {
        heading: 'Cost Efficiency for Short-Term Needs',
      },
      {
        heading: 'Easier Adjustments',
      },
    ],
  },
];
