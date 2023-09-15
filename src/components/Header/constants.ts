import {
  aboutUs,
  ai,
  aiConsulting,
  aiDev,
  aiIntegration,
  angular,
  automotive,
  aws,
  azure,
  backend,
  beDev,
  blockChain,
  chatGtpService,
  chatgtp,
  cloud,
  customSoftwareDev,
  database,
  docker,
  dynamodb,
  education,
  energy,
  express,
  feDev,
  fintech,
  flutter,
  food,
  frontend,
  gatsby,
  googleCloud,
  government,
  healthCare,
  industrial,
  insurance,
  ionic,
  jenkins,
  knockoutjs,
  legal,
  life,
  logistics,
  maintenance,
  mariadb,
  media,
  mobile,
  mobileApp,
  mongodb,
  multiTenatSystem,
  mysql,
  nest,
  news,
  nextjs,
  nodejs,
  others,
  postgresql,
  professionalServices,
  projectConsulting,
  pwa,
  python,
  qa,
  react,
  realEstate,
  rediis,
  remix,
  sports,
  storybook,
  teamDev,
  travel,
  uiComponent,
  uiux,
  vue,
  web3,
  webApp,
  webDesigning,
  whyCodewinglet,
} from '@codewinglet/assets';
import { ChildItemType } from './types';

const services: ChildItemType = [
  {
    path: 'project-consulting',
    label: 'Project Consulting',
    icon: projectConsulting,
  },
  {
    path: 'multi-tenant-system',
    label: 'Multi Tenat System',
    icon: multiTenatSystem,
  },
  {
    path: 'web-application-development',
    label: 'Web Application Development',
    icon: webApp,
  },
  {
    path: 'mobile-application-development',
    label: 'Mobile Application Development',
    icon: mobileApp,
  },
  {
    path: 'frontend-development',
    label: 'Frontend Development',
    icon: feDev,
  },
  {
    path: 'backend-development',
    label: 'Backend Development',
    icon: beDev,
  },
  {
    path: 'qa-testing',
    label: 'QA & Testing',
    icon: qa,
  },
  {
    path: 'support-maintenance',
    label: 'Support & Maintenance',
    icon: maintenance,
  },
  {
    path: 'custom-software-development',
    label: 'Custom Software Development',
    icon: customSoftwareDev,
  },
  {
    path: 'web-designing',
    label: 'Web Designing',
    icon: webDesigning,
  },
  {
    path: 'ui-component-library',
    label: 'UI Component Library',
    icon: uiComponent,
  },
  {
    path: 'ui-ux-development',
    label: 'UI/UX development',
    icon: uiux,
  },
  {
    path: 'hire-dedicated-team',
    label: 'Hire Dedicated Team and Developer',
    icon: teamDev,
  },
];
const industriesMenu: ChildItemType = [
  {
    path: 'health-care',
    icon: healthCare,
    label: 'Heathcare',
  },
  {
    icon: education,
    label: 'Education',
  },
  {
    icon: logistics,
    label: 'Logistics',
  },
  {
    icon: realEstate,
    label: 'Real Estate',
  },
  {
    icon: realEstate,
    label: 'Real Estate',
  },
  {
    icon: media,
    label: 'Media & Entertainment',
  },
  {
    icon: fintech,
    label: 'FinTECH',
  },
  {
    icon: insurance,
    label: 'Insurance',
  },
  {
    icon: automotive,
    label: 'Automotive',
  },
  {
    icon: travel,
    label: 'Travel And Hospitality',
  },
  {
    icon: food,
    label: 'Food And Beverage',
  },
  {
    icon: sports,
    label: 'Entertainment/Sports',
  },
  {
    icon: news,
    label: 'News/Media',
  },
  {
    icon: government,
    label: 'Government',
  },
  {
    icon: legal,
    label: 'Legal',
  },
  {
    icon: industrial,
    label: 'Manufacturing/Industrial',
  },
  {
    icon: energy,
    label: 'Energy',
  },
  {
    icon: professionalServices,
    label: 'Professional Services',
  },
];

const companyMenu: ChildItemType = [
  {
    icon: aboutUs,
    label: 'About Us',
    path: '',
  },
  {
    icon: whyCodewinglet,
    label: 'Why Codewinglet',
  },
  {
    icon: life,
    label: 'Life At Codewinglet',
  },
];

const technology: ChildItemType = [
  {
    path: '',
    icon: frontend,
    label: 'Frontend',
    menu: [
      {
        path: '/technology/react-js',
        label: 'ReactJs',
        icon: react,
      },
      {
        path: '/technology/next-js',
        label: 'NextJs',
        icon: nextjs,
      },
      {
        path: '/technology/gatsby',
        label: 'Gatsby',
        icon: gatsby,
      },
      {
        path: '/technology/angular',
        label: 'Anugalr',
        icon: angular,
      },
      {
        path: '/technology/vue',
        label: 'Vue',
        icon: vue,
      },
      {
        path: '/technology/remix',
        label: 'Remix',
        icon: remix,
      },
      {
        path: '/technology/knockout-js',
        label: 'knockoutJs',
        icon: knockoutjs,
      },
    ],
  },
  {
    path: '',
    icon: backend,
    label: 'Backend',
    menu: [
      {
        path: '/technology/node-js',
        label: 'NodeJs',
        icon: nodejs,
      },
      {
        path: '/technology/python',
        label: 'Python',
        icon: python,
      },
      {
        path: '/technology/express',
        label: 'Express',
        icon: express,
      },
      {
        path: '/technology/nest',
        label: 'Nest',
        icon: nest,
      },
    ],
  },
  {
    path: '',
    icon: mobile,
    label: 'Mobile',
    menu: [
      {
        path: '/technology/react-native',
        label: 'React Native',
        icon: react,
      },
      {
        path: '/technology/flutter',
        label: 'Flutter',
        icon: flutter,
      },
      {
        path: '/technology/ionic',
        label: 'Ionic',
        icon: ionic,
      },
    ],
  },
  {
    path: '',
    icon: cloud,
    label: 'DevOps/Cloud',
    menu: [
      {
        path: '/technology/aws',
        label: 'Aws',
        icon: aws,
      },
      {
        path: '/technology/azure',
        label: 'Azure',
        icon: azure,
      },
      {
        path: '/technology/google-cloud',
        label: 'Google Cloud',
        icon: googleCloud,
      },
      {
        path: '/technology/docker',
        label: 'Docker',
        icon: docker,
      },
      {
        path: '/technology/jenkins',
        label: 'Jenkins',
        icon: jenkins,
      },
    ],
  },
  {
    path: '',
    icon: database,
    label: 'Database',
    menu: [
      {
        path: '/technology/mongodb',
        label: 'MongoDB',
        icon: mongodb,
      },
      {
        path: '/technology/mysql',
        label: 'MySQL',
        icon: mysql,
      },
      {
        path: '/technology/postgresql',
        label: 'PostgreSQL',
        icon: postgresql,
      },
      {
        path: '/technology/redis',
        label: 'Rediis',
        icon: rediis,
      },
      {
        path: '/technology/mariadb',
        label: 'MariaDB',
        icon: mariadb,
      },
      {
        path: '/technology/dynamodb',
        label: 'DynamoDB',
        icon: dynamodb,
      },
    ],
  },
  {
    path: '',
    icon: others,
    label: 'Others',
    menu: [
      {
        path: '/technology/storybook',
        label: 'Storybook',
        icon: storybook,
      },
      {
        path: '/technology/pwa',
        label: 'PWA',
        icon: pwa,
      },
      {
        path: '/technology/web3',
        label: 'Web3',
        icon: web3,
      },
      {
        path: '/technology/blockchain',
        label: 'BlockChain',
        icon: blockChain,
      },
      {
        path: '/technology/component-library',
        label: 'Component Library',
        icon: react,
      },
    ],
  },
  {
    path: '',
    icon: ai,
    label: 'Generative AI',
    menu: [
      {
        path: '/technology/generative-ai-development',
        label: 'Generative AI Development',
        icon: aiDev,
      },
      {
        path: '/technology/generative-ai-integration',
        label: 'Generative AI Integration',
        icon: aiIntegration,
      },
      {
        path: '/technology/chatgpt-developer',
        label: 'ChatGPT Developer',
        icon: chatgtp,
      },
      {
        path: '/technology/chatgpt-integration-service',
        label: 'ChatGPT Integration Service',
        icon: chatGtpService,
      },
      {
        path: '/technology/generative-ai-consulting',
        label: 'Generative AI Consulting',
        icon: aiConsulting,
      },
    ],
  },
];

export const navMenu = [
  {
    path: '',
    label: 'Services',
    children: services,
    left: 'left-[-170px]',
  },
  {
    path: '',
    label: 'Technology',
    category: true,
    children: technology,
    left: 'left-[-570px]',
  },
  {
    path: '',
    label: 'Industries',
    children: industriesMenu,
    left: 'left-[-340px]',
  },
  {
    path: '/career',
    label: 'Career',
  },
  {
    label: 'Company',
    children: companyMenu,
    left: 'left-0',
  },
  {
    path: '/not-found',
    label: 'Blog',
  },
];
