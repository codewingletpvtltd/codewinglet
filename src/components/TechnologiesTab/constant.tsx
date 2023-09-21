import Image from 'next/image';
import {
  angular,
  antd,
  aws,
  azure as azureIcon,
  backend,
  cloud,
  database,
  docker,
  dynamodb,
  express,
  flutter,
  frontend,
  gatsby,
  googleCloud,
  ionic,
  jenkins,
  mariadb,
  mobile,
  mongodb,
  mui,
  mysql,
  nest,
  nextjs,
  nodejs,
  postgresql,
  python,
  react,
  rediis,
  remix,
  tailwind,
  vue,
} from '@codewinglet/assets';

export const tabs = [
  {
    label: 'Frontend',
    icon: <Image src={frontend} alt='Frontend' />,
    subTitle:
      'Frontend development focuses on creating user-friendly interfaces and interactive web experiences.',
    tabContent: [
      {
        label: 'ReactJS',
        icon: react,
        url: '/technology/react-js',
      },
      {
        label: 'NextJS',
        icon: nextjs,
      },
      {
        label: 'GatsBy',
        icon: gatsby,
      },
      {
        label: 'AngularJS',
        icon: angular,
      },
      {
        label: 'VueJS',
        icon: vue,
      },
      {
        label: 'Remix',
        icon: remix,
      },
      {
        label: 'Material UI',
        icon: mui,
      },
      {
        label: 'Tailwind',
        icon: tailwind,
      },
      {
        label: 'Ant Design',
        icon: antd,
      },
    ],
  },
  {
    label: 'Backend',
    subTitle:
      'Backend development focuses on building the server-side components and logic that power web applications and services.',
    icon: (
      <Image src={backend} alt='Backend' className='xl:h-[31px] xl:w-[31px]' />
    ),
    tabContent: [
      {
        label: 'NodeJS',
        icon: nodejs,
      },
      {
        label: 'Python',
        icon: python,
      },
      {
        label: 'Express',
        icon: express,
      },
      {
        label: 'Nest',
        icon: nest,
      },
    ],
  },
  {
    label: 'Mobile',
    subTitle:
      'Mobile development encompasses the creation of apps and software for smartphones and tablets.',
    icon: (
      <Image src={mobile} alt='Mobile' className='xl:h-[31px] xl:w-[31px]' />
    ),
    tabContent: [
      {
        label: 'React Native',
        icon: react,
      },
      {
        label: 'Flutter',
        icon: flutter,
      },
      {
        label: 'Ionic',
        icon: ionic,
      },
    ],
  },
  {
    label: 'DevOps/Cloud',
    subTitle:
      'DevOps and cloud technologies enable seamless software development and deployment in the digital age.',
    icon: (
      <Image
        src={cloud}
        alt='DevOps/Cloud'
        className='xl:h-[31px] xl:w-[31px]'
      />
    ),
    tabContent: [
      {
        label: 'AWS',
        icon: aws,
      },
      {
        label: 'Azsure',
        icon: azureIcon,
      },
      {
        label: 'Google Cloud',
        icon: googleCloud,
      },
      {
        label: 'Docker',
        icon: docker,
      },
      {
        label: 'Jenkins',
        icon: jenkins,
      },
    ],
  },
  {
    label: 'Database',
    subTitle:
      'Databases serve as digital repositories for organising, storing, and managing structured information.',
    icon: (
      <Image
        src={database}
        alt='Database'
        className='h-[26px] w-[22px] xl:h-[31px] xl:w-[31px]'
      />
    ),
    tabContent: [
      {
        label: 'MongoDB',
        icon: mongodb,
      },
      {
        label: 'MySQL',
        icon: mysql,
      },
      {
        label: 'PostgreSQL',
        icon: postgresql,
      },
      {
        label: 'Redis',
        icon: rediis,
      },
      {
        label: 'MariaDB',
        icon: mariadb,
      },
      {
        label: 'DynamoDB',
        icon: dynamodb,
      },
    ],
  },
  // {
  //   label: 'Generative AI',
  //   subTitle:
  //     'AI is revolutionising industries and shaping the future of technology.',
  //   icon: (
  //     <Image
  //       src={ai}
  //       alt='Generative AI'
  //       className='h-[23px] w-[23px] xl:h-[31px] xl:w-[31px]'
  //     />
  //   ),
  //   tabContent: [
  //     {
  //       label: 'Generative AI Development',
  //       icon: aiDev,
  //       url: 'https://storybook.js.org/',
  //     },
  //     {
  //       label: 'Generative AI Integration',
  //       icon: aiIntegration,
  //       url: 'https://web.dev/progressive-web-apps/',
  //     },
  //     {
  //       label: 'ChatGPT Developer',
  //       icon: chatgtp,
  //       url: 'https://web3.foundation/',
  //     },
  //     {
  //       label: 'ChatGPT Integration Service',
  //       icon: chatGtpService,
  //       url: 'https://www.blockchain.com/explorer/api',
  //     },
  //     {
  //       label: 'Generative AI Consulting Company',
  //       icon: aiConsulting,
  //       url: 'https://blog.bitsrc.io/6-tools-for-documenting-your-react-components-like-a-pro-5027cdfb40c6',
  //     },
  //   ],
  // },
];
