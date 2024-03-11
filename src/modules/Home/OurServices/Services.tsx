'use client';
import { useState } from 'react';
import { Arrow } from '@codewinglet/assets';
import Content from './components/Content';
import ServiceData from './constants';

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };

  const service = ServiceData[selectedIndex];

  return (
    <div className='flex mt-[50px] gap-20 mb-[50px]'>
      <ul className='w-1/2'>
        {ServiceData.map((service, i) => (
          <li
            key={service.title}
            onClick={() => handleChangeIndex(i)}
            className={`text-subtitle2Light ${
              i === selectedIndex
                ? 'text-primary !text-subtitle2'
                : 'text-secondary'
            } border-b border-headerBoxBorder last:border-b-0 py-[22px] cursor-pointer flex items-center justify-between`}
          >
            {service.title}
            <Arrow
              className={`w-[21px] h-[21px] rotate-[315deg] ${
                i === selectedIndex ? 'block' : 'hidden'
              }`}
            />
          </li>
        ))}
      </ul>

      <div className='w-1/2'>
        <Content service={service} />
      </div>
    </div>
  );
};

export default Services;
