import {
  ic_aboutus,
  ic_work,
  ic_career,
  ic_case,
  ic_blog,
  ic_customer,
  ic_workculter,
  ic_contactus,
  beDev,
  customSoftwareDev,
  feDev,
  frontend,
  maintenance,
  mobileApp,
  multiTenatSystem,
  projectConsulting,
  qa,
  react,
  teamDev,
  uiComponent,
  uiux,
  webApp,
  webDesigning,
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
    left: 'left-[-28rem]',
  },
  {
    path: '',
    label: 'Industries',
    children: services,
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
    label: 'Company',
    children: companyMenu,
    left: 'left-[-59rem]',
  },
];
