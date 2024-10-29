'use client';

import { SectionHeader } from '@codewinglet/components';

import TechnologyDetailTabs from './components/TechnologyDetailTabs';

const PreviousWork = () => (
  <>
    <div className='bg-bg lg:py-20 md:py-[60px] py-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>The React Ecosystem We Used in Previous Work</>}
          description={
            <>
              Explore the essential React tools and libraries we've leveraged to
              build robust, high-performing applications in our past projects.
            </>
          }
          headingClassName='text-primary !text-h2 text-center'
          descriptionClassName='text-primary pt-1.5 !text-subtitle2Light text-center mb-[50px]'
        />

        <div className='relative'>
          <TechnologyDetailTabs />
        </div>
      </div>
    </div>
  </>
);

export default PreviousWork;
