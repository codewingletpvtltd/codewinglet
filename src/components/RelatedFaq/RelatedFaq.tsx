/* eslint-disable import/order */
'use client';
import Faq from '@codewinglet/components/Faq';
import { faqData } from '@codewinglet/components/Faq/constants';
import SectionHeader from '../SectionHeader';

const RelatedFaq = () => (
  <div className='bg-bg lg:py-20 md:py-[60px] py-10 scroll-mt-40' id='faq'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <SectionHeader
        title={<>Related FAQs</>}
        description={
          <>
            Optimized customized software solutions to empower your niche
            empower your niche.
          </>
        }
        descriptionClassName='sm:!text-subtitle2Light text-tagLight leading-normal'
      />
      <div className='lg:gap-20 lg:mt-[50px] md:mt-10 mt-5'>
        <Faq faqData={faqData} />
      </div>
    </div>
  </div>
);

export default RelatedFaq;
