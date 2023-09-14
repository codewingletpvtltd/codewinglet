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
        url: 'https://react.dev/',
      },
      {
        label: 'NextJS',
        icon: nextjs,
        url: 'https://nextjs.org/docs/',
      },
      {
        label: 'GatsBy',
        icon: gatsby,
        url: 'https://www.gatsbyjs.com/docs/',
      },
      {
        label: 'AngularJS',
        icon: angular,
        url: 'https://angular.io/',
      },
      {
        label: 'VueJS',
        icon: vue,
        url: 'https://vuejs.org/',
      },
      {
        label: 'Remix',
        icon: remix,
        url: 'https://remix.run/docs/en/main',
      },
      {
        label: 'Material UI',
        icon: mui,
        url: 'https://mui.com/material-ui/getting-started/',
      },
      {
        label: 'Tailwind',
        icon: tailwind,
        url: 'https://tailwindcss.com/docs/installation',
      },
      {
        label: 'Ant Design',
        icon: antd,
        url: 'https://ant.design/components/overview/',
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
        url: 'https://nodejs.org/en',
      },
      {
        label: 'Python',
        icon: python,
        url: 'https://www.python.org/',
      },
      {
        label: 'Express',
        icon: express,
        url: 'https://expressjs.com/',
      },
      {
        label: 'Nest',
        icon: nest,
        url: 'https://nestjs.com/',
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
        url: 'https://reactnative.dev/',
      },
      {
        label: 'Flutter',
        icon: flutter,
        url: 'https://flutter.dev/',
      },
      {
        label: 'Ionic',
        icon: ionic,
        url: 'https://ionicframework.com/',
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
        url: 'https://docs.aws.amazon.com/?nc2=h_ql_doc_do',
      },
      {
        label: 'Azsure',
        icon: azureIcon,
        url: 'https://azure.microsoft.com/en-in/products/devops',
      },
      {
        label: 'Google Cloud',
        icon: googleCloud,
        url: 'https://cloud.google.com/why-google-cloud',
      },
      {
        label: 'Docker',
        icon: docker,
        url: 'https://docs.docker.com/',
      },
      {
        label: 'Jenkins',
        icon: jenkins,
        url: 'https://www.jenkins.io/doc/',
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
        url: 'https://www.mongodb.com/',
      },
      {
        label: 'MySQL',
        icon: mysql,
        url: 'https://dev.mysql.com/doc/',
      },
      {
        label: 'PostgreSQL',
        icon: postgresql,
        url: 'https://www.postgresql.org/docs/',
      },
      {
        label: 'Redis',
        icon: rediis,
        url: 'https://redis.io/',
      },
      {
        label: 'MariaDB',
        icon: mariadb,
        url: 'https://mariadb.org/',
      },
      {
        label: 'DynamoDB',
        icon: dynamodb,
        url: 'https://docs.aws.amazon.com/dynamodb/',
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
