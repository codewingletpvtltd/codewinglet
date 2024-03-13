'use client';
import { useState } from 'react';
import ServiceData from './constants';
import Content from './components/Content';

const Technologies = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };

  const service = ServiceData[selectedIndex];

  return (
    <>
      {/* DESKTOP */}
      <div className='xl:flex lg:mt-[50px] mt-10 gap-16'>
        <ul className='2xl:w-[18%] w-full lg:border-l lg:border-b-0 border-b border-secondary lg:grid flex lg:gap-0 gap-[20px] md:overscroll-none overflow-y-auto [-ms-overflow-style:_none;] [scrollbar-width:_none;]'>
          {ServiceData.map((service, i) => (
            <li
              key={service.title}
              onClick={() => handleChangeIndex(i)}
              className={`lg:text-subtitle2Light md:text-paragraph2Light text-tagLight lg:pl-[30px] flex-shrink-0 ${
                i === selectedIndex
                  ? 'text-white !lg:text-subtitle2Light md:text-paragraph2Light text-tagLight relative after:content after:absolute lg:after:w-[1px] after:w-full after:bg-white lg:after:h-[36px] after:h-[1px] lg:after:top-0 after:bottom-0 after:left-0'
                  : 'text-secondary'
              }  lg:pb-[25px] pb-3 lg:last:pb-0 cursor-pointer flex items-center justify-between `}
            >
              {service.title}
            </li>
          ))}
        </ul>
        <div className='lg:w-[82%] w-full'>
          <Content service={service} />
        </div>
      </div>

      {/* TABLET */}
      {/* <div className='lg:hidden block md:mt-[50px] mt-5 gap-20 mb-[50px]'>
        <Accordion type='single' defaultValue='IT Consulting' collapsible>
          <ul className=''>
            {ServiceData.map((service, i) => (
              <AccordionItem key={service.title} value={service.title}>
                <AccordionTrigger className='flex'>
                  <li
                    key={service.title}
                    onClick={() => handleChangeIndex(i)}
                    className={`text-subtitle2Light pl-[30px] ${
                      i === selectedIndex
                        ? 'text-white !text-subtitle2 relative after:content after:absolute after:w-[1px] after:bg-white after:h-[36px] after:top-0 after:left-0'
                        : 'text-secondary'
                    }  pb-[25px] last:pb-0 cursor-pointer flex items-center justify-between `}
                  >
                    {service.title}
                  </li>
                </AccordionTrigger>
                <AccordionContent className='border-remove'>
                  <Content service={service} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </ul>
        </Accordion>
      </div> */}
    </>
  );
};

export default Technologies;
