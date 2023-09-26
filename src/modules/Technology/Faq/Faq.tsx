'use client';
import { Accordion, SectionHeader, Typography } from '@codewinglet/components';
import { BackgroundCircle, LeftArrowsSVG } from '@codewinglet/assets';
import useFaq from './useFaq';
import { FaqsProps } from './types';

const Faq: React.FC<FaqsProps> = ({ faqs }) => {
  const { expanded, onChangeAccordion } = useFaq();
  return (
    <div className='bg-aliceBlue px-[20px] py-[50px] relative'>
      <BackgroundCircle className='invisible absolute top-[80px] lg:visible xl:h-[100px] xl:w-[146px]' />
      <div className='max-w-screen-xl md:mx-[38px] xl:mx-auto'>
        <SectionHeader
          title={
            <>
              <strong className='font-[800]'>Frequently</strong> Asked Questions
            </>
          }
          headingClassName='text-center'
          description='Find answers to our most frequently asked questions below for your convenience.'
          descriptionClassName='text-center'
          wrapperClassName='flex flex-col items-center justify-center'
        />
        <div className='mt-[30px] flex flex-col gap-[22px] md:mt-[60px] lg:mt-[40px] xl:mt-[100px]'>
          {faqs.map((data, index) => (
            <Accordion
              key={`FAQ-Accordion-${data.id}`}
              title={data.question}
              variant='secondary'
              expanded={expanded === index}
              onChange={onChangeAccordion(index)}
            >
              <Typography
                variant='subtitle2'
                className='md:text-[16px] lg:text-[18px] text-lightBlack'
              >
                {data.answer}
              </Typography>
            </Accordion>
          ))}
        </div>
      </div>
      <LeftArrowsSVG className='absolute invisible lg:visible top-[50px] right-0 xl:w-[200px] xl:h-[22px]' />
    </div>
  );
};

export default Faq;
