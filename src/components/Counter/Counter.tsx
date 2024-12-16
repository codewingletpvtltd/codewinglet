'use client';
import Image from 'next/image';
import React from 'react';

import AboutCount from '@codewinglet/modules/Home/AboutUs/components/AboutCount';

import Typography from '../Typography';

// Define the props structure for the list item
type ListItemProps = {
  number: string | React.ReactNode;
  label: string | React.ReactNode;
  icon: string;
};

// Mock data for the component
const data: ListItemProps[] = [
  {
    number: 60,
    label: 'Happy Clients',
    icon: '/assets/icons/people.svg',
  },
  {
    number: 80,
    label: 'Successful Projects',
    icon: '/assets/icons/folder-favorite.svg',
  },
  {
    number: 7,
    label: 'Years in the IT Industry',
    icon: '/assets/icons/medal-star.svg',
  },
  {
    number: '100%',
    label: 'Client’s satisfaction',
    icon: '/assets/icons/like-shapes.svg',
  },
];

// Individual ListItem component
const ListItem: React.FC<ListItemProps> = ({ number, label, icon }) => (
  <div className='relative flex justify-between items-center lg:p-[50px] py-10'>
    <div>
      <div className='xl:text-h1 md:text-h2 text-h6 text-white flex items-center lg:mb-1.5 mb-1'>
        {typeof number === 'number' ? (
          <>
            <AboutCount number={number} />+
          </>
        ) : (
          <Typography>{number}</Typography>
        )}
      </div>
      <Typography className='text-white lg:text-subtitle2Light md:text-paragraph1ExtraLight text-tagLight'>
        {label}
      </Typography>
    </div>
    <div className='bg-darkBlack flex lg:p-[27px] md:p-5 p-2.5'>
      <Image
        src={icon}
        alt='icon'
        width={46}
        height={46}
        className='lg:w-[46px] lg:h-[46px] md:w-10 md:h-10 w-[30px] h-[30px]'
      />
    </div>
  </div>
);

// ListItems component to map over the data array and render ListItem components
const ListItems: React.FC<{ items: ListItemProps[] }> = ({ items }) => (
  <div className='relative mt-0 grid lg:grid-cols-2 grid-cols-1'>
    {items.map((item, index) => (
      <div
        className='lg:border-e border-e-darkBorder border-b border-b-darkBorder lg:[&:nth-child(even)]:border-e-0 border-e-0 lg:[&:nth-of-type(3)]:border-b-0 [&:nth-of-type(4)]:border-b-0'
        key={index}
      >
        <ListItem {...item} />
      </div>
    ))}

    <div className='w-[47px] h-[47px] absolute top-1/2 left-1/2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden'></div>
  </div>
);

// Counter component that ties everything together
const Counter: React.FC = () => <ListItems items={data} />;

export default Counter;
