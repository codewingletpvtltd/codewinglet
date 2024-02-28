import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';
import Typography from '../Typography/Typography';
import { tabs } from './constant';

const BusinessModelTab = () => (
  <Tabs
    defaultValue='Hourly'
    className='md:border-[1px] border-lightBlack/30 lg:p-[28px] rounded-10 py-[24px]'
  >
    <TabsList className='w-full'>
      {tabs.map(({ label }, index) => (
        <TabsTrigger
          value={label}
          key={index}
          className='w-full flex flex-row justify-center items-center px-[25px] md:p-auto'
        >
          {label}
        </TabsTrigger>
      ))}
    </TabsList>

    {tabs.map(({ label, subTitle, tabContent }, index) => (
      <TabsContent
        value={label}
        key={`business-model-${index}`}
        className='md:mt-0'
      >
        <div className='mb-[22px] mt-[28px] md:mb-[28px] md:mt-0 text-primary'>
          <Typography
            variant='subtitle2'
            className='font-500 mt-[3px] md:text-[18px] text-lightBlack'
          >
            {subTitle}
          </Typography>
        </div>
        <Typography
          variant='h5'
          className='font-600 md:text-[22px] text-primary my-[10px]'
        >
          Key Benefits
        </Typography>
        <div className='flex flex-col gap-[15px] lg:gap-[8px]'>
          {tabContent?.map((content, index) => (
            <div
              key={`business-model-benefits-${index}`}
              className='flex flex-row gap-[15px]'
            >
              <span>
                <Image
                  src={'/assets/icons/HighlightArrow.svg'}
                  className='mt-[4px] h-[16px] w-[9px] md:h-[19px] md:w-[10px] lg:h-[22px] lg:w-[12px]'
                  alt='HighlightArrow'
                  width={50}
                  height={50}
                />
              </span>
              <Typography
                variant='subtitle1'
                className='font-300 lg:text-[18px] text-lightBlack'
              >
                {content}
              </Typography>
            </div>
          ))}
        </div>
      </TabsContent>
    ))}
  </Tabs>
);

export default BusinessModelTab;
