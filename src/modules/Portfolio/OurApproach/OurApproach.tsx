'use client';

import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
import { SectionHeader, Typography } from '@codewinglet/components';

const contentBlocks = [
  {
    title: 'Reduced Document Retrieval Time',
  },
  {
    title: 'Streamlined Workflow and Data Segregation',
  },
  {
    title: 'Remote Document Processing',
  },
  {
    title: 'Cloud-Native Development',
  },
  {
    title: 'Centralized Document Management',
  },
  {
    title: 'Secure Document Storage',
  },
  {
    title: 'Centralized Document Management',
  },
  {
    title: 'Secure Document Storage',
  },
];

const OurApproach = () => (
  <>
    <div
      className='bg-black lg:py-20 md:py-[60px] py-10 relative scroll-mt-32'
      id='solution'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Our Approach</>}
          description={
            <>
              With extensive holdings in linear TV, digital apps, and internet
              platforms, it offers comprehensive sports coverage..
            </>
          }
          headingClassName='text-white lg:!text-h2 text-center'
          descriptionClassName='text-white md:!text-paragraph1ExtraLight text-center'
        />

        <div className='bg-primary lg:p-[50px] p-9 lg:mt-[50px] mt-10'>
          <div className='grid lg:grid-cols-2 2xl:gap-[50px] lg:gap-10 gap-[34px]'>
            {contentBlocks.map((block, index) => (
              <div key={index} className='flex lg:gap-5 gap-[15px]'>
                <div className='text-success'>
                  <CheckIcon />
                </div>
                <div>
                  <Typography className='text-white 2xl:text-h6 lg:text-subtitle1 md:text-h6 !font-light text-tag'>
                    {block.title}
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

export default OurApproach;
