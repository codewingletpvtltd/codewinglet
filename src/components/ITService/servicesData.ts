/* eslint-disable quotes */
// servicesData.ts

export interface ServicePoint {
  heading: string;
  description: string;
}

export interface ServiceCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  points: ServicePoint[];
}

export const servicesData: ServiceCardProps[] = [
  {
    iconSrc: '/assets/Technologies/pages/costEfficiency.svg',
    iconAlt: 'costEfficiency',
    title: 'Cost Efficiency',
    points: [
      {
        heading: 'Lower Labor Costs',
        description:
          'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over local hires.',
      },
      {
        heading: 'Scalable Solutions',
        description:
          'Easily scale your team up or down without the overhead costs of full-time employment.',
      },
    ],
  },
  {
    iconSrc: '/assets/Technologies/pages/skilled.svg',
    iconAlt: 'skilled',
    title: 'Skilled Talent & 24/7 Output',
    points: [
      {
        heading: 'Diverse Skills & Time Zone Edge',
        description:
          'Tap into specialized skills while benefiting from continuous progress, with work completed outside of your regular business hours.',
      },
      {
        heading: 'Highly Qualified Professionals',
        description:
          "Leverage India's vast pool of IT experts skilled in the latest technologies and methodologies.",
      },
    ],
  },
  {
    iconSrc: '/assets/Technologies/pages/projectBase.svg',
    iconAlt: 'projectBase',
    title: 'Project-Based Focus',
    points: [
      {
        heading: 'Clear Deliverables',
        description:
          'Our contractors are goal-oriented, focusing on specific tasks or projects with defined outcomes.',
      },
      {
        heading: 'No Long-Term Obligations',
        description:
          'Once the project is done, there’s no need for ongoing commitments, giving you flexibility.',
      },
    ],
  },
  {
    iconSrc: '/assets/Technologies/pages/Monitoring.svg',
    iconAlt: 'Monitoring',
    title: 'Transparent Productivity Monitoring',
    points: [
      {
        heading: 'Screen Monitoring Tools',
        description:
          'Gain real-time insights into resource activities, ensuring full transparency and accountability.',
      },
      {
        heading: 'Performance Analytics',
        description:
          'Access comprehensive reports on productivity, enabling data-driven optimizations.',
      },
    ],
  },
  {
    iconSrc: '/assets/Technologies/pages/Engagement.svg',
    iconAlt: 'Engagement',
    title: 'Risk-Free Engagement',
    points: [
      {
        heading: '2-Week Trial Period',
        description:
          "Evaluate our team's capabilities with no long-term commitment, minimizing risk and ensuring a perfect fit.",
      },
      {
        heading: 'Cost-Effective Evaluation',
        description:
          'Assess the quality and productivity during the trial before making a larger investment.',
      },
    ],
  },
  {
    iconSrc: '/assets/Technologies/pages/fullTime.svg',
    iconAlt: 'fullTime',
    title: 'Flexible Workforce, No Full-Time Commitment',
    points: [
      {
        heading: 'No Full-Time Hiring Required',
        description:
          'Avoid the costs & liabilities of full-time employment, including benefits, taxes, & long-term contracts.',
      },
      {
        heading: 'On-Demand Expertise',
        description:
          'Onboard experts swiftly, cutting recruitment time and reducing time-to-market.',
      },
    ],
  },

  {
    iconSrc: '/assets/Technologies/pages/Salary.svg',
    iconAlt: 'Salary',
    title: 'Cost Savings Beyond Salary',
    points: [
      {
        heading: 'Pay for What You Use',
        description:
          'Only pay for hours worked and ensuring financial flexibility and optimal budget management.',
      },
      {
        heading: 'No Overhead Costs',
        description:
          'Eliminate expenses related to office space, equipment, and employee benefits.',
      },
    ],
  },
  {
    iconSrc: '/assets/Technologies/pages/Process.svg',
    iconAlt: 'Process',
    title: 'Faster Team Building Process',
    points: [
      {
        heading: 'No Long Recruitment Cycles',
        description:
          'Skip lengthy recruitment processes and get straight to work with highly qualified contractors.',
      },
      {
        heading: 'Quick Onboarding',
        description:
          ' Start projects sooner with faster onboarding and less paperwork.',
      },
    ],
  },
  {
    iconSrc: '/assets/Technologies/pages/Reduced.svg',
    iconAlt: 'Reduced',
    title: 'Reduced Risk',
    points: [
      {
        heading: 'Easier Termination',
        description:
          'End contracts effortlessly if performance doesn’t meet expectations, unlike with full-time employees.',
      },
      {
        heading: 'Lower Legal Liability',
        description:
          'Contractors handle their own taxes and insurance, reducing your legal responsibilities.',
      },
    ],
  },
];
