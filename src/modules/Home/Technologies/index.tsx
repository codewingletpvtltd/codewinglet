'use client';
import { useState } from 'react';
import { SectionHeader } from '@codewinglet/components';
import { accordionData } from '../../../components/TechnologiesTab/constant';
import Accordion from '../../../components/TechnologiesTab/index';
import './scss/technologies.css';

const Technologies = () => {
  const [expanded, setExpanded] = useState<String>('01');

  const handleChange = (count: any) => {
    setExpanded(count);
  };

  return (
    <section className='py-20 bg-[#f9f9f9]'>
      <section className='max-w-[1410px] w-full px-[15px] mx-auto'>
        <SectionHeader
          title={<>Our Services</>}
          description={
            <>"Cutting-Edge Technologies We Work With for Optimal Results”</>
          }
          headingClassName='text-[22px]'
          descriptionClassName=' mt-[9px] '
        />

        <div
          className='accord flex flex-row content-center items-center relative w-full gap-5 pt-[50px] [transition: all 200ms ease-in-out 50ms]'
          style={{ opacity: 1 }}
        >
          {accordionData.map((data, i) => (
            <Accordion
              {...data}
              handleChange={handleChange}
              key={data.count}
              expanded={expanded}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Technologies;
