'use client';
import Image from 'next/image';
import Link from 'next/link';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../Typography/Typography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';
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
          <Typography
            variant='body1'
            className='md:text-[22px] xl:text-[25px] font-600'
          >
            {label}
          </Typography>
          <Typography
            variant='subtitle2'
            className='font-500 mt-[3px] xl:text-[16px]'
          >
            {subTitle}
          </Typography>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px]'>
          {tabContent?.map(({ label, icon, url }, index) => (
            <Link
              href={url ? url : ''}
              key={index}
              className={getClassNames(url ? '' : 'pointer-events-none')}
              replace={true}
              target='_blank'
            >
              <div className='flex items-center gap-[15px]'>
                <Image
                  src={icon}
                  className='h-[32px] w-[32px] lg:h-[36px] lg:w-[36px]'
                  alt={label}
                />
                <Typography
                  variant='subtitle1'
                  className='font-500 text-black lg:text-[18px]'
                >
                  {label}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </TabsContent>
    ))}
  </Tabs>
);
export default TechnologiesTab;
