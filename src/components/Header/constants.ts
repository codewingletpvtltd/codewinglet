import {
  aboutUs,
  automotive,
  beDev,
  customSoftwareDev,
  education,
  energy,
  feDev,
  fintech,
  food,
  government,
  healthCare,
  industrial,
  insurance,
  legal,
  life,
  logistics,
  maintenance,
  media,
  mobileApp,
  multiTenatSystem,
  news,
  professionalServices,
  projectConsulting,
  qa,
  reactSVG,
  realEstate,
  sports,
  teamDev,
  travel,
  uiComponent,
  uiux,
  webApp,
  webDesigning,
  whyCodewinglet,
} from '@codewinglet/assets';

const services = [
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
const industriesMenu = [
  {
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

const companyMenu = [
  {
    icon: aboutUs,
    label: 'About Us',
    path: '/about-us',
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

export const navMenu = [
  {
    path: '',
    label: 'Services',
    children: services,
  },
  {
    path: '',
    label: 'Technology',
    category: true,
    children: [
      {
        icon: reactSVG,
        name: 'Frontend',
        menu: [
          {
            path: 'technology/react-js',
            label: 'ReactJs',
            icon: reactSVG,
          },
          {
            path: 'technology/next-js',
            label: 'NextJs',
            icon: reactSVG,
          },
          {
            path: 'technology/gatsby',
            label: 'Gatsby',
            icon: reactSVG,
          },
          {
            path: 'technology/angular',
            label: 'Anugalr',
            icon: reactSVG,
          },
          {
            path: 'technology/vue',
            label: 'Vue',
            icon: reactSVG,
          },
          {
            path: 'technology/remix',
            label: 'Remix',
            icon: reactSVG,
          },
          {
            path: 'technology/knockout-js',
            label: 'knockoutJs',
            icon: reactSVG,
          },
        ],
      },
      {
        icon: reactSVG,
        name: 'Backend',
        menu: [
          {
            path: 'technology/node-js',
            label: 'NodeJs',
            icon: reactSVG,
          },
          {
            path: 'technology/python',
            label: 'Python',
            icon: reactSVG,
          },
          {
            path: 'technology/express',
            label: 'Express',
            icon: reactSVG,
          },
          {
            path: 'technology/nest',
            label: 'Nest',
            icon: reactSVG,
          },
        ],
      },
      {
        icon: reactSVG,
        name: 'Mobile',
        menu: [
          {
            path: 'technology/react-native',
            label: 'React Native',
            icon: reactSVG,
          },
          {
            path: 'technology/flutter',
            label: 'Flutter',
            icon: reactSVG,
          },
          {
            path: 'technology/ionic',
            label: 'Ionic',
            icon: reactSVG,
          },
        ],
      },
      {
        icon: reactSVG,
        name: 'DevOps/Cloud',
        menu: [
          {
            path: 'technology/aws',
            label: 'Aws',
            icon: reactSVG,
          },
          {
            path: 'technology/azure',
            label: 'Azure',
            icon: reactSVG,
          },
          {
            path: 'technology/google-cloud',
            label: 'Google Cloud',
            icon: reactSVG,
          },
          {
            path: 'technology/docker',
            label: 'Docker',
            icon: reactSVG,
          },
          {
            path: 'technology/jenkins',
            label: 'Jenkins',
            icon: reactSVG,
          },
        ],
      },
      {
        icon: reactSVG,
        name: 'Database',
        menu: [
          {
            path: 'technology/mongodb',
            label: 'MongoDB',
            icon: reactSVG,
          },
          {
            path: 'technology/mysql',
            label: 'MySQL',
            icon: reactSVG,
          },
          {
            path: 'technology/postgresql',
            label: 'PostgreSQL',
            icon: reactSVG,
          },
          {
            path: 'technology/redis',
            label: 'Rediis',
            icon: reactSVG,
          },
          {
            path: 'technology/mariadb',
            label: 'MariaDB',
            icon: reactSVG,
          },
          {
            path: 'technology/dynamodb',
            label: 'DynamoDB',
            icon: reactSVG,
          },
        ],
      },
      {
        icon: reactSVG,
        name: 'Others',
        menu: [
          {
            path: 'technology/storybook',
            label: 'Storybook',
            icon: reactSVG,
          },
          {
            path: 'technology/pwa',
            label: 'PWA',
            icon: reactSVG,
          },
          {
            path: 'technology/web3',
            label: 'Web3',
            icon: reactSVG,
          },
          {
            path: 'technology/blockchain',
            label: 'BlockChain',
            icon: reactSVG,
          },
          {
            path: 'technology/component-library',
            label: 'Component Library',
            icon: reactSVG,
          },
        ],
      },
      {
        icon: reactSVG,
        name: 'Generative AI',
        menu: [
          {
            path: 'technology/generative-ai-development',
            label: 'Generative AI Development',
            icon: reactSVG,
          },
          {
            path: 'technology/generative-ai-integration',
            label: 'Generative AI Integration',
            icon: reactSVG,
          },
          {
            path: 'technology/chatgpt-developer',
            label: 'ChatGPT Developer',
            icon: reactSVG,
          },
          {
            path: 'technology/chatgpt-integration-service',
            label: 'ChatGPT Integration Service',
            icon: reactSVG,
          },
          {
            path: 'technology/generative-ai-consulting',
            label: 'Generative AI Consulting',
            icon: reactSVG,
          },
        ],
      },
    ],
  },
  {
    path: '',
    label: 'Industries',
    children: industriesMenu,
  },
  {
    path: '/career',
    label: 'Career',
  },
  {
    path: '',
    label: 'Company',
    children: companyMenu,
  },
  {
    path: '/blog',
    label: 'Blog',
  },
];
