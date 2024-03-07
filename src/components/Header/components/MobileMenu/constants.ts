// import { ChildItemType } from '.';

import { ChildItemType } from '../../types';

const services: ChildItemType = [
  {
    path: 'it-consulting',
    label: 'IT Consulting',
    icon: '/assets/navigation/services/itConsulting.svg',
  },
  {
    path: 'web-application-development',
    label: 'Web application development',
    icon: '/assets/navigation/services/webApplication.svg',
  },
  {
    path: 'mobile-application-development',
    label: 'Mobile application development',
    icon: '/assets/navigation/services/mobileApplication.svg',
  },
  {
    path: 'custom-software-development',
    label: 'Custom software development',
    icon: '/assets/navigation/services/customSoftware.svg',
  },
  {
    path: 'internet-if-things',
    label: 'Internet of Things(IoT)',
    icon: '/assets/navigation/services/cpu.svg',
  },
  {
    path: 'artificial-intelligence',
    label: 'Artificial Intelligence',
    icon: '/assets/navigation/services/artificial.svg',
  },
  {
    path: 'devOps',
    label: 'DevOps',
    icon: '/assets/navigation/services/devops.svg',
  },
  {
    path: 'cloud-engineering',
    label: 'Cloud Engineering',
    icon: '/assets/navigation/services/cloud.svg',
  },
  {
    path: 'ui-ux-development',
    label: 'UI/UX Design & Development',
    icon: '/assets/navigation/services/uiuxDesign.svg',
  },
  {
    path: 'qa-and-testing',
    label: 'QA & Testing Service',
    icon: '/assets/navigation/services/qaTest.svg',
  },
  {
    path: 'sustainability-services',
    label: 'Staff Augmentation',
    icon: '/assets/navigation/services/sustainability.svg',
  },
  {
    path: 'support-and-maintenance',
    label: 'Support & Maintenance',
    icon: '/assets/navigation/services/support.svg',
  },
];

const industries: ChildItemType = [
  {
    path: 'project-consulting',
    label: 'Waste management',
    description: 'Optimize waste management with digital solution.',
    icon: '/assets/navigation/industries/waste.svg',
  },
  {
    path: 'multi-tenant-system',
    label: 'Sustainable IoT Solution',
    description: 'Eco-friendly IoT solutions for sustainability.',
    icon: '/assets/navigation/industries/sustainable.svg',
  },
  {
    path: 'web-application-development',
    description: 'Recruit, Onboard, Manage: Simplified Workforce Software',
    label: 'Staffing management',
    icon: '/assets/navigation/industries/staffing.svg',
  },
  {
    path: 'mobile-application-development',
    description: 'Crafting digital platforms for seamless online transactions.',
    label: 'E-commerce',
    icon: '/assets/navigation/industries/ecommerce.svg',
  },
  {
    path: 'frontend-development',
    description:
      'Enhancing healthcare: electronic records, telemedicine, monitoring. ',
    label: 'Healthcare',
    icon: '/assets/navigation/industries/health.svg',
  },
  {
    path: 'backend-development',
    description: 'Streamline supply chains with integrated IT systems.',
    label: 'Logistics',
    icon: '/assets/navigation/industries/logistics.svg',
  },
  {
    path: 'qa-testing',
    label: 'Ed-tech',
    description: 'Enhancing education through digital platforms.',
    icon: '/assets/navigation/industries/edTechs.svg',
  },
  {
    path: 'support-maintenance',
    description: 'Revolutionizing finance: online banking, robo-advisors.',
    label: 'Fintech',
    icon: '/assets/navigation/industries/fintech.svg',
  },
  {
    path: 'custom-software-development',
    label: 'Manufacturing & retails',
    description: 'Integrating IT: Inventory & Customer Management',
    icon: '/assets/navigation/industries/manufacturing.svg',
  },
  {
    path: 'web-designing',
    label: 'real Estate',
    description:
      'Digitalising property management, sales, and leasing processes.',
    icon: '/assets/navigation/industries/realEsate.svg',
  },
  {
    path: 'ui-component-library',
    label: 'Travel & hospitality',
    description: 'Streamlined booking, tailored personalized experiences.',
    icon: '/assets/navigation/industries/hospitality.svg',
  },
  {
    path: 'ui-ux-development',
    label: 'Media & Entertainment',
    description: 'Streaming, Social Media: Content Delivery Powerhouses.',
    icon: '/assets/navigation/industries/media.svg',
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
    icon: '/assets/navigation/company/ic_aboutus.svg',
    label: 'About Us',
    path: '',
    description: 'Learn about our story and our mission statement.',
  },
  {
    icon: '/assets/navigation/company/ic_work.svg',
    label: 'Work',
    description: 'News and writings, press releases, and press resources.',
  },
  {
    icon: '/assets/navigation/company/ic_career.svg',
    label: 'Careers',
    description: 'We’re always looking for talented people. Join our team!',
  },
  {
    icon: '/assets/navigation/company/ic_case.svg',
    label: 'Case studies',
    path: '',
    description: 'All the boring stuff that we Dan from legal made us add.',
  },
  {
    icon: '/assets/navigation/company/ic_blog.svg',
    label: 'Blog',
    description: 'The latest industry news, updates and info.',
  },
  {
    icon: '/assets/navigation/company/ic_customer.svg',
    label: 'Customer stories',
    description: 'Learn how our customers are making big changes.',
  },
  {
    icon: '/assets/navigation/company/ic_workculter.svg',
    label: 'Work culture',
    description: 'Get up and running on new features and techniques.',
  },
  {
    icon: '/assets/navigation/company/ic_contactus.svg',
    label: 'Contact us',
    description: 'All the boring stuff that you (hopefully won’t) need.',
  },
];

export const navMenu = [
  {
    path: '',
    label: 'Services',
    children: services,
    left: '2xl:left-[-25.5rem] xl:left-[-20.3rem]',
  },
  {
    path: '',
    label: 'Industries',
    children: industries,
    left: '2xl:left-[-32.1rem] xl:left-[-26.9rem]',
  },
  {
    path: '',
    label: 'Technology',
    category: true,
    children: technology,
    left: '2xl:left-[-39.5rem] xl:left-[-34.3rem]',
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
    label: 'Career',
    category: true,
    left: 'left-[-50px]',
  },
  {
    path: '/not-found',
    label: 'Blogs',
  },
  {
    label: 'About us',
    // children: companyMenu,
    left: 'left-[-59rem]',
  },
];
