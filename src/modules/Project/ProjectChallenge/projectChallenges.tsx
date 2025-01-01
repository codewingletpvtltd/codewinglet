'use client';

import Image from 'next/image';

import { Arrow } from '@codewinglet/assets';
import { SectionHeader, Typography } from '@codewinglet/components';

const contentBlocks = [
  {
    title: 'Understanding Client Needs',
    description:
      'With our full-stack knowledge & battle-tested agile strategy, we help clients. With our full-stack knowledge & battle-tested agile strategy, we help clients.',
  },
  {
    title: 'Design Thinking Methodology',
    description:
      'With our full-stack knowledge & battle-tested agile strategy, we help clients. With our full-stack knowledge & battle-tested agile strategy, we help clients.',
  },
  {
    title: 'Agile Development Process',
    description:
      'With our full-stack knowledge & battle-tested agile strategy, we help clients. With our full-stack knowledge & battle-tested agile strategy, we help clients.',
  },
  {
    title: 'Collaboration and Transparency',
    description:
      'With our full-stack knowledge & battle-tested agile strategy, we help clients. With our full-stack knowledge & battle-tested agile strategy, we help clients.',
  },
  {
    title: 'Collaboration and Transparency',
    description:
      'With our full-stack knowledge & battle-tested agile strategy, we help clients. With our full-stack knowledge & battle-tested agile strategy, we help clients.',
  },
];

const ProjectChallenge = () => (
  <>
    <div className='bg-white lg:py-20 md:py-[60px] py-10 relative scroll-mt-32'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Project challenges</>}
          description={
            <>
              With extensive holdings in linear TV, digital apps, and internet
              platforms, it offers comprehensive sports coverage..
            </>
          }
          headingClassName='text-gray-800 lg:!text-h2 text-center'
          descriptionClassName='text-gray-400 md:!text-paragraph1ExtraLight text-center'
        />

        <div className='lg:mt-[50px] mt-[35px] lg:flex gap-10'>
          <Image
            src='/assets/Project/projectChallenges.png'
            alt='projectChallenges'
            width={655}
            height={646}
            className='2xl:w-[655px] md:w-[567px] flex-shrink-0 mx-auto'
          />

          <div className='flex flex-col md:gap-[34px] gap-5 lg:py-10 lg:mt-0 mt-[30px]'>
            {contentBlocks.map((block, index) => (
              <div key={index} className='flex gap-[15px] items-baseline'>
                <div className=''>
                  <Arrow />
                </div>
                <div>
                  <Typography className='text-gray-800 lg:text-subtitle2 md:text-paragraph1 text-tag'>
                    {block.title}
                  </Typography>
                  <Typography className='text-gray-400 md:text-paragraph2Light text-tagExtraLight pt-2'>
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

export default ProjectChallenge;