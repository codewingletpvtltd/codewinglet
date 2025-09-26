'use client';

import { SectionHeader } from '@codewinglet/components';

import JobOpening from './components/JobOpening';

const CurrentOpenings = () => (
  <>
    <div
      className='bg-white lg:py-20 md:py-[60px] py-10 scroll-mt-32'
      id='jobs'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Current job openings</>}
          description='Discover Your Next Career Opportunity: Explore Our Latest Job Openings.'
          headingClassName='md:text-left text-center lg:text-h2'
          descriptionClassName='text-gray-400 md:text-left text-center md:text-subtitle2Light'
        />

        <div className='md:mt-[86px] mt-[78px]'>
          <JobOpening />
        </div>
      </div>
    </div>
  </>
);
export default CurrentOpenings;
