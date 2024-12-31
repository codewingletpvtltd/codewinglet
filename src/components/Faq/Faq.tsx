'use client';
import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion';

const Faq = ({
  faqData,
}: {
  faqData: {
    title: string;
    description: string;
  }[];
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Accordion
        type='single'
        defaultValue='IT Consulting'
        collapsible
        className='flex flex-col gap-6 w-full'
      >
        {faqData.map((faq, i) => (
          <AccordionItem
            key={faq.title}
            value={faq.title}
            defaultChecked={i == 0}
          >
            <AccordionTrigger
              onClick={() => handleChangeIndex(i)}
              className={`lg:!text-subtitle2Light md:!text-paragraph1Light !text-tagLight relative ${
                i === selectedIndex
                  ? 'text-primary lg:!text-subtitle2 md:!text-paragraph1 !text-tag after:content after:absolute after:bg-primary after:w-[3px] after:h-[26px] after:left-0'
                  : 'text-primary'
              } [&[data-state=open]>svg]:rotate-45 lg:!p-[27px] md:!p-5 !p-[15px] xl:!pr-[70px] md:!pr-[60px] !pr-[50px] bg-white text-left leading-normal`}
            >
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className='border-remove faq text-secondary lg:!text-paragraph1ExtraLight md:!text-paragraph2Light !text-tagExtraLight bg-white px-[25px]'>
              {faq.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
