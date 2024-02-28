'use client';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SectionHeader,
} from '@codewinglet/components';
import { FaqsProps } from './types';

const Faqs: React.FC<FaqsProps> = ({ faqs }) => (
  <div className='bg-aliceBlue px-[20px] py-[50px] relative'>
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
      {faqs && (
        <div className='mt-[30px] md:mt-[60px] lg:mt-[40px] xl:mt-[100px]'>
          <Accordion type='single' defaultValue='0' collapsible>
            {faqs.map((data, index) => (
              <AccordionItem value={index.toString()} key={index}>
                <AccordionTrigger>{data.question}</AccordionTrigger>
                <AccordionContent>{data.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
    <Image
      className='absolute invisible lg:visible top-[50px] right-0 xl:w-[200px] xl:h-[22px]'
      width={200}
      src={'/assets/icons/LeftArrowsSVG.svg'}
      alt='LeftArrowsSVG'
      height={200}
    />
  </div>
);

export default Faqs;
