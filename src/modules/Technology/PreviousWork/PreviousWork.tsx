'use client';

import { SectionHeader } from '@codewinglet/components';

import TechnologyDetailSection from './components/TechnologyDetailTabs';

interface PreviousWorkProps {
  details: any;
}

const PreviousWork = ({ details }: PreviousWorkProps) => (
  <>
    <div className='bg-bg lg:py-20 md:py-[60px] py-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>{details.heading.text}</>}
          description={<>{details.description.text}</>}
          headingClassName='text-primary md:!text-h2 text-center'
          descriptionClassName='text-primary pt-1.5 md:!text-subtitle2Light text-center md:mb-[50px] mb-5'
        />

        <div className='relative'>
          <TechnologyDetailSection
            tabPoints={details?.previousWorkPoints}
            image={{
              src: details.image.image.url,
              alt: details.image.title,
            }}
            link={{
              title: details?.link.title,
              url: details?.link.link,
            }}
          />
        </div>
      </div>
    </div>
  </>
);

export default PreviousWork;
