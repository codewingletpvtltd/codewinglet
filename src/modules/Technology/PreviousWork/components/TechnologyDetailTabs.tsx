'use client';

import React from 'react';

import { Arrow } from '@codewinglet/assets';
import { Typography } from '@codewinglet/components';

import {
  TechnologyDetailTabsProps,
  technologyDetails,
} from '../data/technologyDetails';

const TechnologyDetailTabs: React.FC<TechnologyDetailTabsProps> = ({
  onTabHover,
}) => (
  <div className='absolute left-0 z-10 top-[67px]'>
    <ul className='h-[510px] overflow-y-scroll example'>
      {technologyDetails.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => onTabHover(item)}
          className='flex gap-5 items-center bg-white border border-gray-100 p-5 w-[510px] mb-[30px] last:mb-0 cursor-pointer group'
        >
          <div className='bg-gray-50 group-hover:bg-black p-[15px] text-gray-800 group-hover:text-white transition duration-300'>
            {item.icon}
          </div>
          <Typography className='text-subtitle2'>{item.label}</Typography>
          <Arrow className='ml-auto hidden group-hover:block transition duration-300' />
        </li>
      ))}
    </ul>
  </div>
);

export default TechnologyDetailTabs;
