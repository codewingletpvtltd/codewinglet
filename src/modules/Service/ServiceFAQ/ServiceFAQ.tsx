'use client';

import { SectionHeader } from '@codewinglet/components';
import Faq from '@codewinglet/components/Faq';
import { faqData } from '@codewinglet/components/Faq/constants';

const ServiceFAQ = () => (
  <div className='lg:py-20 md:py-[60px] py-10 relative bg-bg'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <SectionHeader
        title={<>Related FAQs</>}
        description={
          <>
            Optimized customized software solutions to empower your niche
            empower your niche.
          </>
        }
        headingClassName='text-primary md:!text-h2 leading-normal'
        descriptionClassName='text-primary mt-1.5 lg:!text-subtitle2Light mb-[50px]'
      />

      <Faq faqData={faqData} />
    </div>
  </div>
);

export default ServiceFAQ;
