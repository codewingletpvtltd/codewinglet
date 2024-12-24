'use client';

import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';

const expertiseData = [
  {
    id: 1,
    title: 'Discovery & Planning',
    description:
      'We begin by understanding your goals and audience to build a strong foundation.',
  },
  {
    id: 2,
    title: 'Development',
    description:
      'Our design team crafts wireframes and prototypes for a seamless user experience.',
  },
  {
    id: 3,
    title: 'Testing & QA',
    description:
      'Rigorous testing ensures functionality, compatibility, and performance on all devices.',
  },
  {
    id: 4,
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
          descriptionClassName='text-secondary md:!text-subtitle2Light text-center lg:px-20'
        />

        <div className='mt-[50px] grid lg:grid-cols-4 md:gap-10 gap-[30px]'>
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className='bg-white 2xl:p-[30px] md:p-[25px] p-[15px] relative group flex lg:flex-col justify-between lg:gap-0 gap-5'
            >
              <div className='absolute lg:-right-[30px] lg:left-auto md:left-[30px] left-[15px] lg:bottom-auto md:-bottom-[30px] -bottom-[15px] group-last:hidden'>
                <div className='md:w-[60px] w-[30px] md:h-[60px] h-[30px] bg-bg rounded-full flex items-center justify-center relative lg:rotate-0 rotate-90'>
                  <div className='md:w-[35px] w-[18px] md:h-[35px] h-[18px] bg-white rounded-full'>
                    <Image
                      src='/assets/Service/dotLine.svg'
                      alt='dotLine'
                      width={40}
                      height={10}
                      className='absolute top-1/2 md:-right-1/2 -right-full  -translate-x-1/2 -translate-y-1/2'
                    />
                  </div>
                </div>
              </div>
              <div className='bg-black md:w-[60px] w-10 md:h-[60px] h-10 flex items-center justify-center text-white flex-shrink-0'>
                {item.id}
              </div>
              <div>
                <Typography className='text-primary md:text-subtitle2 text-tag lg:mt-10'>
                  {item.title}
                </Typography>
                <Typography className='md:text-paragraph2Light text-tagExtraLight font-light md:pt-2 text-secondary pb-2.5'>
                  {item.description}
                </Typography>
                <Image
                  src='/assets/Service/developmentProcess.png'
                  alt='developmentProcess'
                  width={263}
                  height={131}
                  className='lg:w-[263px] w-[548px] lg:h-[131px] h-[140px] object-cover'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default DevelopmentProcess;
