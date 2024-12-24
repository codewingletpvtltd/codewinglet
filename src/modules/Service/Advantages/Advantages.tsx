'use client';

import { InteractiveIcon } from '@codewinglet/assets';
import { SectionHeader, Typography } from '@codewinglet/components';

const advantageList = [
  {
    title: 'Cross-Device Accessibility',
    description:
      'Web apps are accessible on any device with internet, ensuring wider reach and engagement.',
  },
  {
    title: 'Cost-Effective',
    description:
      'No need for separate versions for different platforms, reducing development and maintenance costs.',
  },
  {
    title: 'Real-Time Updates',
    description:
      'Instantly deploy updates without requiring user downloads, ensuring up-to-date features and fixes.',
  },
  {
    title: 'Scalability',
    description:
      'Easily scale your app as your business grows, adding features and increasing user capacity.',
  },
  {
    title: 'Enhanced Security',
    description:
      'Centralized data storage offers better security, reducing the risk of unauthorized access.',
  },
  {
    title: 'Improved User Experience',
    description:
      'Seamlessly integrate with third-party services like payment gateways and CRM tools.',
  },
];

const Advantages = () => (
  <>
    <div
      className='bg-black lg:py-20 md:py-[60px] py-10 relative scroll-mt-32'
      id='solution'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Advantages of web development</>}
          description={
            <>
              With our full-stack knowledge and battle-tested agile strategy, we
              help clients flourish at every level of the web product
              development lifecycle, allowing product website development
              lifecycle, allowing
            </>
          }
          headingClassName='text-white lg:!text-h2 text-center'
          descriptionClassName='text-secondary md:!text-paragraph1ExtraLight text-center lg:px-20'
        />

        <div className='md:mt-[50px] mt-5'>
          <div className='grid lg:grid-cols-2 md:gap-10 gap-5'>
            {advantageList.map((advantage, index) => (
              <div
                key={index}
                className='flex lg:gap-5 gap-[15px] bg-primary md:p-[30px] p-5'
              >
                <div className='text-white'>
                  <InteractiveIcon />
                </div>
                <div>
                  <Typography
                    variant='h4'
                    className='text-white lg:text-subtitle2 md:text-paragraph1 text-tag'
                  >
                    {advantage.title}
                  </Typography>
                  <Typography className='text-secondary md:text-paragraph2Light text-tagExtraLight pt-1.5'>
                    {advantage.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Advantages;
