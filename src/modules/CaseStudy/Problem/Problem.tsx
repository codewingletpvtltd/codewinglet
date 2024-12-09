'use client';

import { Arrow } from '@codewinglet/assets';
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
  {
    title: 'Real-time Data Integration',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
  {
    title: 'Optimizing Performance with AWS Media',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
];

const Problem = () => (
  <>
    <div
      className='bg-bg lg:py-20 md:py-[60px] py-10 relative scroll-mt-40'
      id='overview'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Problem Statement</>}
          description={
            <>
              The brand is a dominant force in the US sports industry, engaging
              over 100 million fans weekly across diverse media platforms.
            </>
          }
          headingClassName='text-primary lg:!text-h2 text-center'
          descriptionClassName='text-primary md:!text-paragraph1ExtraLight text-center'
        />

        <div className='bg-white p-10 mt-[50px]'>
          <div className='grid lg:grid-cols-2 gap-y-10 lg:gap-x-[50px]'>
            {contentBlocks.map((block, index) => (
              <div key={index} className='flex gap-5'>
                <div className='w-[50px] h-[50px] bg-bg flex-shrink-0 flex items-center justify-center'>
                  <Arrow />
                </div>
                <div>
                  <Typography className='text-primary lg:text-subtitle2 text-paragraph1'>
                    {block.title}
                  </Typography>
                  <Typography className='text-secondary text-paragraph2Light'>
                    {block.description}
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

export default Problem;
