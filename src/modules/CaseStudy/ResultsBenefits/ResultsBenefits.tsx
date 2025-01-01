'use client';

import { SectionHeader } from '@codewinglet/components';

import ResultsContent from '.';

const ResultsBenefits = () => (
  <>
    <div
      className='bg-white lg:pt-20 md:pt-[60px] pt-10 scroll-mt-32'
      id='results'
    >
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

        <ResultsContent />
      </div>
    </div>
  </>
);

export default ResultsBenefits;
