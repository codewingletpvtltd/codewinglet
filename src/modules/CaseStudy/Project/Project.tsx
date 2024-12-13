'use client';

import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';

const contentBlocks = [
  {
    title: 'Massive Content Streaming',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
  {
    title: 'Mobile Experience with PWA Components',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
  {
    title: 'Optimizing Performance with AWS Media',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
  {
    title: 'Massive Content Streaming',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
];

const Project = () => (
  <>
    <div
      className='bg-bg lg:py-20 md:py-[60px] py-10 relative scroll-mt-32'
      id='projectLearning'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Project Learnings</>}
          description={
            <>
              The brand is a dominant force in the US sports industry, engaging
              over 100 million fans weekly across
            </>
          }
          headingClassName='text-primary lg:!text-h2 text-center'
          descriptionClassName='text-primary md:!text-paragraph1ExtraLight text-center'
        />

        <div className='grid md:grid-cols-2 lg:gap-[30px] gap-5 md:mt-[50px] mt-5'>
          {contentBlocks.map((block, index) => (
            <div className='bg-white lg:p-[30px] p-5' key={index}>
              <div className='flex md:gap-[30px] gap-[18px] flex-col'>
                <div>
                  <Image
                    src='/assets/CaseStudy/shining_star.svg'
                    alt='shining_star'
                    width={34}
                    height={34}
                    className='md:w-[34px] w-[25px] md:h-[34px] h-[25px]'
                  />
                </div>
                <div>
                  <Typography className='text-primary lg:text-subtitle2 md:text-paragraph1Light text-tag'>
                    {block.title}
                  </Typography>
                  <Typography className='text-secondary md:text-paragraph2Light text-tagExtraLight'>
                    {block.description}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Project;
