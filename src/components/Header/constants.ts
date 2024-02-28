import {
  ic_aboutus,
  ic_work,
  ic_career,
  ic_case,
  ic_blog,
  ic_customer,
  ic_workculter,
  ic_contactus,
  cpu,
  itConsulting,
  customSoftware,
  webApplication,
  mobileApplication,
  devops,
  cloud,
  artificial,
  sustainability,
  qaTest,
  uiuxDesign,
  hireDedicated,
  support,
  waste,
  logistics,
  staffing,
  sustainable,
  media,
  hospitality,
  realEsate,
  manufacturing,
  ecommerce,
  health,
  fintech,
  edTechs,
} from '@codewinglet/assets';
import { ChildItemType } from './types';

const services: ChildItemType = [
  {
    path: 'internet-if-things',
    label: 'Internet of Things(IoT)',
    icon: cpu,
  },
  {
    path: 'it-consulting',
    label: 'IT Consulting',
    icon: itConsulting,
  },
  {
    path: 'custom-software-development',
    label: 'Custom software development',
    icon: customSoftware,
  },
  {
    path: 'web-application-development',
    label: 'Web application development',
    icon: webApplication,
  },
  {
    path: 'mobile-application-development',
    label: 'Mobile application development',
    icon: mobileApplication,
  },
  {
    path: 'devOps',
    label: 'DevOps',
    icon: devops,
  },
  {
    path: 'cloud-computing',
    label: 'Cloud Computing',
    icon: cloud,
  },
  {
    path: 'artificial-intelligence',
    label: 'Artificial Intelligence',
    icon: artificial,
  },
  {
    path: 'sustainability-services',
    label: 'Sustainability Services',
    icon: sustainability,
  },
  {
    path: 'qa-and-testing',
    label: 'QA and Testing',
    icon: qaTest,
  },
  {
    path: 'ui-ux-development',
    label: 'UI/UX Design & Development',
    icon: uiuxDesign,
  },

  {
    path: 'hire-dedicated-team-and-developers',
    label: 'Hire dedicated team and developers',
    icon: hireDedicated,
  },

  {
    path: 'support-and-maintenance',
    label: 'Support and maintenance',
    icon: support,
  },
];

const industries: ChildItemType = [
  {
    path: 'project-consulting',
    label: 'Waste management',
    description: 'Optimize waste management with digital solution.',
    icon: waste,
  },
  {
    path: 'multi-tenant-system',
    label: 'Sustainable IoT Solution',
    description: 'Eco-friendly IoT solutions for sustainability.',
    icon: sustainable,
  },
  {
    path: 'web-application-development',
    description: 'Recruit, Onboard, Manage: Simplified Workforce Software',
    label: 'Staffing management',
    icon: staffing,
  },
  {
    path: 'mobile-application-development',
    description: 'Crafting digital platforms for seamless online transactions.',
    label: 'E-commerce',
    icon: ecommerce,
  },
  {
    path: 'frontend-development',
    description:
      'Enhancing healthcare: electronic records, telemedicine, monitoring. ',
    label: 'Healthcare',
    icon: health,
  },
  {
    path: 'backend-development',
    description: 'Streamline supply chains with integrated IT systems.',
    label: 'Logistics',
    icon: logistics,
  },
  {
    path: 'qa-testing',
    label: 'Ed-tech',
    description: 'Enhancing education through digital platforms.',
    icon: edTechs,
  },
  {
    path: 'support-maintenance',
    description: 'Revolutionizing finance: online banking, robo-advisors.',
    label: 'Fintech',
    icon: fintech,
  },
  {
    path: 'custom-software-development',
    label: 'Manufacturing & retails',
    description: 'Integrating IT: Inventory & Customer Management',
    icon: manufacturing,
  },
  {
    path: 'web-designing',
    label: 'real Estate',
    description:
      'Digitalising property management, sales, and leasing processes.',
    icon: realEsate,
  },
  {
    path: 'ui-component-library',
    label: 'Travel & hospitality',
    description: 'Streamlined booking, tailored personalized experiences.',
    icon: hospitality,
  },
  {
    path: 'ui-ux-development',
    label: 'Media & Entertainment',
    description: 'Streaming, Social Media: Content Delivery Powerhouses.',
    icon: media,
  },
];

const technology: ChildItemType = [
  {
    path: '',
    label: 'Frontend',
    menu: [
      {
        path: '/technology/react-js',
        label: 'React',
      },
      {
        path: '/technology/next-js',
        label: 'Next.js',
      },
      {
        path: '/technology/gatsby',
        label: 'Remix',
      },
      {
        path: '/technology/vue',
        label: 'Vue.js',
      },
      {
        path: '/technology/angular',
        label: 'Angular',
      },
    ],
  },
  {
    path: '',
    label: 'Mobile',
    menu: [
      {
        path: '/technology/react-native',
        label: 'React Native',
      },
      {
        path: '/technology/flutter',
        label: 'Flutter',
      },
      {
        path: '/technology/ionic',
        label: 'Ionic',
      },
      {
        path: '/technology/ionic',
        label: 'Android',
      },
      {
        path: '/technology/ionic',
        label: 'iOS',
      },
    ],
  },
  {
    path: '',
    label: 'Backend',
    menu: [
      {
        path: '/technology/node-js',
        label: 'Node.js',
      },
      {
        path: '/technology/python',
        label: 'PHP',
      },
      {
        path: '/technology/express',
        label: 'CodeIgniter',
      },
      {
        path: '/technology/nest',
        label: 'Laravel',
      },
      {
        path: '/technology/python',
        label: 'Python',
      },
      {
        path: '/technology/python',
        label: 'Java',
      },
      {
        path: '/technology/python',
        label: 'ASP.NET',
      },
    ],
  },
  {
    path: '',
    label: 'Headless CMS',
    menu: [
      {
        path: '/technology/aws',
        label: 'Strapi',
      },
      {
        path: '/technology/azure',
        label: 'Sanity',
      },
      {
        path: '/technology/google-cloud',
        label: 'Contentstack',
      },
      {
        path: '/technology/docker',
        label: 'Contentful',
      },
    ],
  },
  {
    path: '',
    label: 'DevOps/Cloud',
    menu: [
      {
        path: '/technology/aws',
        label: 'AWS',
      },
      {
        path: '/technology/azure',
        label: 'Azure',
      },
      {
        path: '/technology/google-cloud',
        label: 'Google Cloud',
      },
      {
        path: '/technology/docker',
        label: 'Docker',
      },
      {
        path: '/technology/jenkins',
        label: 'Jenkins',
      },
      {
        path: '/technology/jenkins',
        label: 'CI/CD ',
      },
    ],
  },
  {
    path: '',
    label: 'Database',
    menu: [
      {
        path: '/technology/mongodb',
        label: 'MongoDB',
      },
      {
        path: '/technology/mysql',
        label: 'MySQL',
      },
      {
        path: '/technology/postgresql',
        label: 'SQLite',
      },
      {
        path: '/technology/postgresql',
        label: 'PostgreSQL',
      },
      {
        path: '/technology/mariadb',
        label: 'Firebase',
      },
      {
        path: '/technology/dynamodb',
        label: 'DynamoDB',
      },
      {
        path: '/technology/redis',
        label: 'Redis',
      },
    ],
  },
  {
    path: '',
    label: 'Others',
    menu: [
      {
        path: '/technology/storybook',
        label: 'Storybook',
      },
      {
        path: '/technology/web3',
        label: 'Web3',
      },
      {
        path: '/technology/blockchain',
        label: 'Blockchain',
      },
      {
        path: '/technology/component-library',
        label: 'Generative AI',
      },
    ],
  },
];

const companyMenu: ChildItemType = [
  {
    icon: ic_aboutus,
    label: 'About Us',
    path: '',
    description: 'Learn about our story and our mission statement.',
  },
  {
    icon: ic_work,
    label: 'Work',
    description: 'News and writings, press releases, and press resources.',
  },
  {
    icon: ic_career,
    label: 'Careers',
    description: 'We’re always looking for talented people. Join our team!',
  },
  {
    icon: ic_case,
    label: 'Case studies',
    path: '',
    description: 'All the boring stuff that we Dan from legal made us add.',
  },
  {
    icon: ic_blog,
    label: 'Blog',
    description: 'The latest industry news, updates and info.',
  },
  {
    icon: ic_customer,
    label: 'Customer stories',
    description: 'Learn how our customers are making big changes.',
  },
  {
    icon: ic_workculter,
    label: 'Work culture',
    description: 'Get up and running on new features and techniques.',
  },
  {
    icon: ic_contactus,
    label: 'Contact us',
    description: 'All the boring stuff that you (hopefully won’t) need.',
  },
];

export const navMenu = [
  {
    path: '',
    label: 'Services',
    children: services,
    left: '2xl:left-[-27.1rem] xl:left-[-21rem]',
  },

  {
    path: '',
    label: 'Technology',
    category: true,
    children: technology,
    left: '2xl:left-[-33.7rem] xl:left-[-27.6rem]',
  },
  {
    path: '',
    label: 'Industries',
    children: industries,
    left: '2xl:left-[-42rem] xl:left-[-35.9rem]',
  },
  // {
  //   path: '/not-found',
  //   label: 'Portfolio',
  // },
  // {
  //   path: '/career',
  //   label: 'Career',
  // },
  {
    path: '/jobs',
    label: 'Jobs',
    category: true,
    left: 'left-[-50px]',
  },
  {
    path: '/not-found',
    label: 'Blog',
  },
  {
    label: 'About us',
    // children: companyMenu,
    left: 'left-[-59rem]',
  },
];
