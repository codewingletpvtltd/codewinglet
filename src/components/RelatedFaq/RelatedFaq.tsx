'use client';
import { Typography } from '@codewinglet/components';
import Faq from '@codewinglet/components/Faq';
import { faqData } from '@codewinglet/components/Faq/constants';
import useGetInTouch from '@codewinglet/modules/Home/ContactUs/useGetInTouch';
import QueForm from '@codewinglet/modules/Home/ContactUs/Form/QueForm';
import SectionHeader from '../SectionHeader';

const RelatedFaq = () => {
  const { formData, onChangeFormData, onSubmit, isLoading } = useGetInTouch();
  return (
    <div className='bg-bg sm:py-20 py-[30px]'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <div className=''>
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
          <div className='flex lg:flex-row flex-col lg:gap-20 lg:mt-[50px] md:mt-10 mt-5 relative'>
            <div className='lg:w-[813px] w-full lg:pb-0 md:pb-10 pb-5 lg:border-none border-b border-b-headerBoxBorder lg:before:content before:absolute lg:before:bg-headerBoxBorder before:w-[1px] before:h-full before:right-[39.6%]'>
              <Faq faqData={faqData} />
            </div>

            <div className='lg:w-[518px] w-full lg:pt-0 md:pt-10 pt-5'>
              <Typography className='bg-primary text-white md:text-subtitle1Light text-tagLight md:py-6 py-3 text-center'>
                WRITE YOUR QUESTION
              </Typography>
              <div className='bg-white border border-headerBoxBorder md:p-[30px] p-5'>
                <QueForm
                  formData={formData}
                  onChangeFormData={onChangeFormData}
                  onSubmit={onSubmit}
                  isDisabled={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedFaq;
