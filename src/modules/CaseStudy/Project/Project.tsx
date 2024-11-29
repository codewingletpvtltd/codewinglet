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
      className='bg-bg lg:py-20 md:py-[60px] py-10 relative scroll-mt-40'
      id='overview'
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
          headingClassName='text-primary md:!text-h2 text-center'
          descriptionClassName='text-primary md:!text-paragraph1ExtraLight text-center'
        />

        <div className='grid grid-cols-2 gap-y-10 gap-x-[30px] mt-[50px]'>
          {contentBlocks.map((block, index) => (
            <div className='bg-white p-[30px]' key={index}>
              <div className='flex gap-[30px] flex-col'>
                <div>
                  <Image
                    src='/assets/CaseStudy/shining_star.svg'
                    alt='shining_star'
                    width={34}
                    height={34}
                  />
                </div>
                <div>
                  <Typography className='text-primary text-subtitle2'>
                    {block.title}
                  </Typography>
                  <Typography className='text-secondary text-paragraph2Light'>
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
