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
        className='flex flex-col gap-6'
      >
        {faqData.map((faq, i) => (
          <AccordionItem
            key={faq.title}
            value={faq.title}
            defaultChecked={i == 0}
          >
            <AccordionTrigger
              onClick={() => handleChangeIndex(i)}
              className={`md:!text-subtitle2Light !text-tagLight relative ${
                i === selectedIndex
                  ? 'text-primary md:!text-subtitle2 !text-tag after:content after:absolute after:bg-primary after:w-[3px] after:h-[26px] after:left-0'
                  : 'text-primary'
              } [&[data-state=open]>svg]:rotate-[45deg] md:!p-[27px] !p-[15px] xl:!pr-[70px] md:!pr-[60px] !pr-[50px] bg-white text-left leading-normal`}
            >
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className='border-remove faq text-secondary md:!text-paragraph1ExtraLight !text-tagExtraLight bg-white px-[25px]'>
              {faq.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
