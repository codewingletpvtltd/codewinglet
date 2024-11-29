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
      <div className='flex flex-col gap-[30px] mt-5 pl-[50px] w-full'>
        <div className='w-full border-b border-headerBoxBorder flex gap-[29px] md:overscroll-none overflow-y-auto [-ms-overflow-style:_none;] [scrollbar-width:_none;]'>
          {ServiceData.map((service, i) => (
            <div
              key={service.title}
              onClick={() => handleChangeIndex(i)}
              className={`md:text-paragraph1ExtraLight text-tagLight flex-shrink-0 ${
                i === selectedIndex
                  ? 'text-primary !font-medium relative'
                  : 'text-secondary'
              } lg:pb-2.5 pb-3 cursor-pointer flex items-center justify-between `}
            >
              {service.title}
              {i === selectedIndex ? (
                <div className='content absolute lg:h-[1px] w-full bg-primary lg:w-full h-[1px] bottom-0 left-0' />
              ) : null}
            </div>
          ))}
        </div>
        <div className=''>
          <div className='bg-white md:p-[30px] p-5 text-white lg:mt-0 mt-5'>
            <Content service={service} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyTab;
