'use client';

import React from 'react';

import { SectionHeader } from '@codewinglet/components';

import TechnologyDetailSection from './components/TechnologyDetailSection';

const PreviousWork: React.FC = () => (
  <div className='bg-bg lg:py-20 md:py-[60px] py-10'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <SectionHeader
        title='The React Ecosystem We Used in Previous Work'
        description="Explore the essential React tools and libraries we've leveraged to build robust, high-performing applications in our past projects."
        headingClassName='text-primary md:!text-h2 text-center'
        descriptionClassName='text-primary pt-1.5 md:!text-subtitle2Light text-center md:mb-[50px] mb-5'
      />
      <TechnologyDetailSection />
    </div>
  </div>
);

export default PreviousWork;
