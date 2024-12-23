'use client';

import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';

const expertiseData = [
  {
    title: 'Discovery & Planning',
    description:
      'We begin by understanding your goals and audience to build a strong foundation.',
  },
  {
    title: 'Development',
    description:
      'Our design team crafts wireframes and prototypes for a seamless user experience.',
  },
  {
    title: 'Testing & QA',
    description:
      'Rigorous testing ensures functionality, compatibility, and performance on all devices.',
  },
  {
    title: 'Launch & Support',
    description:
      'We deploy your website for a smooth launch and provide ongoing maintenance for optimal performance.',
  },
];

const DevelopmentProcess = () => (
  <>
    <div className='bg-bg lg:py-20 md:py-[60px] py-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Our Web Development Process</>}
          description={
            <>
              With our full-stack knowledge and battle-tested agile strategy, we
              help clients flourish at every level of the web product
              development lifecycle, allowing product website development
              lifecycle, allowing
            </>
          }
          headingClassName='text-primary lg:!text-h2 md:!text-[36px] text-center'
          descriptionClassName='text-secondary md:!text-subtitle2Light text-center px-20'
        />

        <div className='mt-[50px] grid grid-cols-4 gap-10'>
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className='bg-white p-[30px] relative group flex flex-col justify-between'
            >
              <div className='absolute -right-[30px] group-last:hidden'>
                <div className='w-[60px] h-[60px] bg-bg rounded-full flex items-center justify-center relative'>
                  <div className='w-[35px] h-[35px] bg-white rounded-full'>
                    <Image
                      src='/assets/Service/dotLine.svg'
                      alt='dotLine'
                      width={40}
                      height={10}
                      className='absolute top-1/2 -right-1/2  -translate-x-1/2 -translate-y-1/2'
                    />
                  </div>
                </div>
              </div>
              <div className='bg-black w-[60px] h-[60px] flex items-center justify-center text-white'>
                01.
              </div>
              <Typography className='text-primary text-subtitle2 mt-10'>
                {item.title}
              </Typography>
              <Typography className='text-paragraph2Light pt-2 text-secondary pb-2.5'>
                {item.description}
              </Typography>
              <Image
                src='/assets/Service/developmentProcess.png'
                alt='developmentProcess'
                width={263}
                height={131}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default DevelopmentProcess;
