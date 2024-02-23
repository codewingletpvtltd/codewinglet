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
  frontend,
  react,
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
    label: 'Internet if Things(IoT)',
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
    icon: frontend,
    label: 'Frontend',
    menu: [
      {
        path: '/technology/react-js',
        label: 'ReactJs',
        icon: react,
      },
      // {
      //   path: '/technology/next-js',
      //   label: 'NextJs',
      //   icon: nextjs,
      // },
      // {
      //   path: '/technology/gatsby',
      //   label: 'Gatsby',
      //   icon: gatsby,
      // },
      // {
      //   path: '/technology/angular',
      //   label: 'Anugalr',
      //   icon: angular,
      // },
      // {
      //   path: '/technology/vue',
      //   label: 'Vue',
      //   icon: vue,
      // },
      // {
      //   path: '/technology/remix',
      //   label: 'Remix',
      //   icon: remix,
      // },
      // {
      //   path: '/technology/knockout-js',
      //   label: 'knockoutJs',
      //   icon: knockoutjs,
      // },
    ],
  },
  // {
  //   path: '',
  //   icon: backend,
  //   label: 'Backend',
  //   menu: [
  //     {
  //       path: '/technology/node-js',
  //       label: 'NodeJs',
  //       icon: nodejs,
  //     },
  //     {
  //       path: '/technology/python',
  //       label: 'Python',
  //       icon: python,
  //     },
  //     {
  //       path: '/technology/express',
  //       label: 'Express',
  //       icon: express,
  //     },
  //     {
  //       path: '/technology/nest',
  //       label: 'Nest',
  //       icon: nest,
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   icon: mobile,
  //   label: 'Mobile',
  //   menu: [
  //     {
  //       path: '/technology/react-native',
  //       label: 'React Native',
  //       icon: react,
  //     },
  //     {
  //       path: '/technology/flutter',
  //       label: 'Flutter',
  //       icon: flutter,
  //     },
  //     {
  //       path: '/technology/ionic',
  //       label: 'Ionic',
  //       icon: ionic,
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   icon: cloud,
  //   label: 'DevOps/Cloud',
  //   menu: [
  //     {
  //       path: '/technology/aws',
  //       label: 'Aws',
  //       icon: aws,
  //     },
  //     {
  //       path: '/technology/azure',
  //       label: 'Azure',
  //       icon: azure,
  //     },
  //     {
  //       path: '/technology/google-cloud',
  //       label: 'Google Cloud',
  //       icon: googleCloud,
  //     },
  //     {
  //       path: '/technology/docker',
  //       label: 'Docker',
  //       icon: docker,
  //     },
  //     {
  //       path: '/technology/jenkins',
  //       label: 'Jenkins',
  //       icon: jenkins,
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   icon: database,
  //   label: 'Database',
  //   menu: [
  //     {
  //       path: '/technology/mongodb',
  //       label: 'MongoDB',
  //       icon: mongodb,
  //     },
  //     {
  //       path: '/technology/mysql',
  //       label: 'MySQL',
  //       icon: mysql,
  //     },
  //     {
  //       path: '/technology/postgresql',
  //       label: 'PostgreSQL',
  //       icon: postgresql,
  //     },
  //     {
  //       path: '/technology/redis',
  //       label: 'Rediis',
  //       icon: rediis,
  //     },
  //     {
  //       path: '/technology/mariadb',
  //       label: 'MariaDB',
  //       icon: mariadb,
  //     },
  //     {
  //       path: '/technology/dynamodb',
  //       label: 'DynamoDB',
  //       icon: dynamodb,
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   icon: others,
  //   label: 'Others',
  //   menu: [
  //     {
  //       path: '/technology/storybook',
  //       label: 'Storybook',
  //       icon: storybook,
  //     },
  //     {
  //       path: '/technology/pwa',
  //       label: 'PWA',
  //       icon: pwa,
  //     },
  //     {
  //       path: '/technology/web3',
  //       label: 'Web3',
  //       icon: web3,
  //     },
  //     {
  //       path: '/technology/blockchain',
  //       label: 'BlockChain',
  //       icon: blockChain,
  //     },
  //     {
  //       path: '/technology/component-library',
  //       label: 'Component Library',
  //       icon: react,
  //     },
  //   ],
  // },
  // {
  // path: '',
  // icon: ai,
  // label: 'Generative AI',
  // menu: [
  //   {
  //     path: '/technology/generative-ai-development',
  //     label: 'Generative AI Development',
  //     icon: aiDev,
  //   },
  //   {
  //     path: '/technology/generative-ai-integration',
  //     label: 'Generative AI Integration',
  //     icon: aiIntegration,
  //   },
  //   {
  //     path: '/technology/chatgpt-developer',
  //     label: 'ChatGPT Developer',
  //     icon: chatgtp,
  //   },
  //   {
  //     path: '/technology/chatgpt-integration-service',
  //     label: 'ChatGPT Integration Service',
  //     icon: chatGtpService,
  //   },
  //   {
  //     path: '/technology/generative-ai-consulting',
  //     label: 'Generative AI Consulting',
  //     icon: aiConsulting,
  //   },
  // ],
  // },
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
    left: 'left-[-21rem]',
  },

  {
    path: '',
    label: 'Technology',
    category: true,
    children: technology,
    left: 'left-[-31rem]',
  },
  {
    path: '',
    label: 'Industries',
    children: industries,
    left: 'left-[-36rem]',
  },
  {
    path: '/not-found',
    label: 'Portfolio',
  },
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
