'use client';
import { useState } from 'react';

import Content from './components/Content';
import ServiceData from './constants';

const TechnologyTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeIndex = (index: number) => {
    setSelectedIndex(index);
  };

  const service = ServiceData[selectedIndex];

  return (
    <>
      {/* DESKTOP */}
      <div className='xl:flex lg:mt-[50px] mt-10 gap-16'>
        <div className='2xl:w-[18%] lg:w-1/5 w-full lg:border-l lg:border-b-0 border-b border-secondary lg:grid flex lg:gap-0 gap-[29px] md:overscroll-none overflow-y-auto [-ms-overflow-style:_none;] [scrollbar-width:_none;]'>
          {ServiceData.map((service, i) => (
            <div
              key={service.title}
              onClick={() => handleChangeIndex(i)}
              className={`lg:text-subtitle2Light md:text-paragraph2Light text-tagLight lg:pl-[30px] flex-shrink-0 ${
                i === selectedIndex
                  ? 'text-white !lg:text-subtitle2Light md:text-paragraph2Light text-tagLight relative'
                  : 'text-placeholderText'
              }  lg:pb-[25px] pb-3 lg:last:pb-0 cursor-pointer flex items-center justify-between `}
            >
              {service.title}
              {i === selectedIndex ? (
                <div className='content absolute lg:w-[1px] w-full bg-white lg:h-9 h-[1px] lg:top-0 bottom-0 lg:left-0 left-auto' />
              ) : null}
            </div>
          ))}
        </div>
        <div className='2xl:w-[82%] lg:w-4/5 w-full'>
          <div className='bg-primary md:p-[30px] p-5 transition-transform duration-500 ease-in [will-change:_top;] text-white lg:h-[425px] lg:mt-0 mt-5'>
            <Content service={service} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyTab;
