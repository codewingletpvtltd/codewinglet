import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';
import Typography from '../Typography/Typography';
import { tabs } from './constant';

const TechnologiesTab = () => (
  <Tabs
    defaultValue='Frontend'
    className='md:border-[1px] border-lightBlack/30 lg:p-[28px] rounded-10 py-[24px]'
  >
    <TabsList className='w-full'>
      {tabs.map(({ label, icon }, index) => (
        <TabsTrigger
          value={label}
          key={index}
          className='w-full flex flex-row justify-center items-center px-[25px] md:p-auto'
        >
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
              <Image
                src={icon}
                className='h-[32px] w-[32px] lg:h-[36px] lg:w-[36px]'
                alt={label}
              />
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
