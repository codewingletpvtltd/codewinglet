import Image from 'next/image';
import Link from 'next/link';
import {
  AngularPNG,
  AntdSVG,
  BackendSVG,
  CloudSVG,
  DatabaseSVG,
  FrontendSVG,
  GatsByPNG,
  MobileSVG,
  MuiSVG,
  NexJSPNG,
  OthersSVG,
  ReactTabSVG,
  RemixIcon,
  TailwindSVG,
  VueJSPNG,
} from '@codewinglet/assets';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';
import Typography from '../Typography/Typography';

const tabs = [
  {
    label: 'Frontend',
    icon: <FrontendSVG className='xl:h-[31px] xl:w-[31px] ' />,
    subTitle: 'Lorem Ipsum has been the industrys standard dummy text ever.',
    tabContent: [
      {
        label: 'ReactJS',
        icon: <ReactTabSVG />,
        url: 'https://react.dev/',
      },
      {
        label: 'NextJS',
        icon: <Image src={NexJSPNG} className='h-full w-full' alt='' />,
        url: 'https://nextjs.org/docs/',
      },
      {
        label: 'GatsBy',
        icon: <Image src={GatsByPNG} className='h-full w-full' alt='' />,
        url: 'https://www.gatsbyjs.com/docs/',
      },
      {
        label: 'AngularJS',
        icon: <Image src={AngularPNG} className='h-full w-full' alt='' />,
        url: 'https://angular.io/',
      },
      {
        label: 'VueJS',
        icon: <Image src={VueJSPNG} className='h-full w-full' alt='' />,
        url: 'https://vuejs.org/',
      },
      {
        label: 'Remix',
        icon: <RemixIcon />,
        url: 'https://remix.run/docs/en/main',
      },
      {
        label: 'Material UI',
        icon: <MuiSVG />,
        url: 'https://mui.com/material-ui/getting-started/',
      },
      {
        label: 'Tailwind',
        icon: <TailwindSVG />,
        url: 'https://tailwindcss.com/docs/installation',
      },
      {
        label: 'Ant Design',
        icon: <AntdSVG />,
        url: 'https://ant.design/components/overview/',
      },
    ],
  },
  {
    label: 'Backend',
    icon: <BackendSVG className='xl:h-[31px] xl:w-[31px]' />,
  },
  {
    label: 'Mobile',
    icon: <MobileSVG className='xl:h-[31px] xl:w-[31px]' />,
  },
  {
    label: 'DevOps/Cloud',
    icon: <CloudSVG className='xl:h-[31px] xl:w-[31px]' />,
  },
  {
    label: 'Database',
    icon: <DatabaseSVG className='h-[26px] w-[22px] xl:h-[31px] xl:w-[31px]' />,
  },
  {
    label: 'Others',
    icon: <OthersSVG className='h-[23px] w-[23px] xl:h-[31px] xl:w-[31px]' />,
  },
];

const TechnologiesTab = () => (
  <Tabs
    defaultValue='Frontend'
    className='md:border-[1px] border-lightBlack/30 lg:p-[28px] rounded-10'
  >
    <TabsList className='w-full'>
      {tabs.map(({ label, icon }, index) => (
        <TabsTrigger value={label} key={index} className='w-full'>
          {icon}
          {label}
        </TabsTrigger>
      ))}
    </TabsList>

    {tabs.map(({ label, subTitle, tabContent }, index) => (
      <TabsContent value={label} key={index} className='md:mt-0'>
        <div className='mb-[22px] mt-[28px] md:mb-[28px] md:mt-0 text-black'>
          <Typography variant='h5' className='md:text-[22px] xl:text-[25px]'>
            {label}
          </Typography>
          <Typography
            variant='subtitle2'
            className='font-500 mt-[3px] xl:text-[16px]'
          >
            {subTitle}
          </Typography>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[40px]'>
          {tabContent?.map(({ label, icon, url }, index) => (
            <Link
              href={url ? url : ''}
              key={index}
              target='_blank'
              className='flex items-center gap-[15px]'
            >
              <div className='h-[32px] w-[32px] lg:h-[36px] lg:w-[36px]'>
                {icon}
              </div>
              <Typography
                variant='h6'
                className='font-800 md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-black'
              >
                {label}
              </Typography>
            </Link>
          ))}
        </div>
      </TabsContent>
    ))}
  </Tabs>
);

export default TechnologiesTab;
