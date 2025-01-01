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
    <div className='pt-20 bg-white'>
      <div
        className='bg-gray-50 lg:py-20 md:py-[60px] py-10 relative scroll-mt-32'
        id='problems'
      >
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
          <SectionHeader
            title={<>Problem Statement</>}
            description={
              <>
                The brand is a dominant force in the US sports industry,
                engaging over 100 million fans weekly across diverse media
                platforms.
              </>
            }
            headingClassName='text-gray-800 lg:!text-h2 text-center'
            descriptionClassName='text-gray-800 md:!text-paragraph1ExtraLight text-center'
          />

          <div className='bg-white md:p-10 p-5 md:mt-[50px] mt-5'>
            <div className='grid lg:grid-cols-2 md:gap-y-10 gap-y-5 lg:gap-x-[50px]'>
              {contentBlocks.map((block, index) => (
                <div key={index} className='flex gap-5'>
                  <div className='md:w-[50px] w-8 md:h-[50px] h-8 bg-gray-50 flex-shrink-0 flex items-center justify-center'>
                    <Arrow />
                  </div>
                  <div>
                    <Typography className='text-gray-800 lg:text-subtitle2 md:text-paragraph1 text-tag'>
                      {block.title}
                    </Typography>
                    <Typography className='text-gray-400 md:text-paragraph2Light text-tagExtraLight'>
                      {block.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Problem;
