'use client';

import { SectionHeader } from '@codewinglet/components';

const ResultsBenefits = () => (
  <>
    <div className='bg-white lg:py-20 md:py-[60px] py-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Results & Benefits</>}
          description={
            <>
              The brand is a dominant force in the US sports industry, engaging
              over 100 million fans weekly across diverse media platforms.
            </>
          }
          headingClassName='text-primary md:!text-h2 text-center'
          descriptionClassName='text-primary md:!text-paragraph1ExtraLight text-center'
        />
      </div>
    </div>
  </>
);

export default ResultsBenefits;
