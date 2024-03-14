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
        <ul className='2xl:w-[18%] lg:w-[20%] w-full lg:border-l lg:border-b-0 border-b border-secondary lg:grid flex lg:gap-0 gap-[20px] md:overscroll-none overflow-y-auto [-ms-overflow-style:_none;] [scrollbar-width:_none;]'>
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
        <div className='2xl:w-[82%] lg:w-[80%] w-full'>
          <Content service={service} />
        </div>
      </div>
    </>
  );
};

export default Technologies;
