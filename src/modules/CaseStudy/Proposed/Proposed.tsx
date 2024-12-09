'use client';

import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
import { SectionHeader, Typography } from '@codewinglet/components';

const contentBlocks = [
  {
    title: 'Remote Document Processing',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
  {
    title: 'Cloud-Native Development',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
  {
    title: 'Centralized Document Management',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
  {
    title: 'Secure Document Storage',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
  {
    title: 'Streamlined Workflow and Data Segregation',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
  {
    title: 'Centralized Document Management',
    description:
      'Access top-tier talent at a fraction of the cost with offshore resources from India, offering significant savings over.',
  },
];

const Proposed = () => (
  <>
    <div
      className='bg-black lg:py-20 md:py-[60px] py-10 relative scroll-mt-40'
      id='overview'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Proposed Solution</>}
          description={
            <>
              The brand is a dominant force in the US sports industry, engaging
              over 100 million fans weekly across diverse media platforms.
            </>
          }
          headingClassName='text-white lg:!text-h2 text-center'
          descriptionClassName='text-white md:!text-paragraph1ExtraLight text-center'
        />

        <div className='bg-primary md:p-10 p-5 md:mt-[50px] mt-5'>
          <div className='grid lg:grid-cols-2 md:gap-y-10 gap-y-5 gap-x-20'>
            {contentBlocks.map((block, index) => (
              <div key={index} className='flex lg:gap-5 gap-[15px]'>
                <div className='text-success'>
                  <CheckIcon />
                </div>
                <div>
                  <Typography className='text-white lg:text-subtitle2 md:text-paragraph1 text-tag'>
                    {block.title}
                  </Typography>
                  <Typography className='text-secondary md:text-paragraph2Light text-tagExtraLight'>
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

export default Proposed;
