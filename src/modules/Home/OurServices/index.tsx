'use client';
import { useState } from 'react';
import { SectionHeader } from '@codewinglet/components';
import { accordionData } from '../../../components/TechnologiesTab/constant';
import Accordion from '../../../components/TechnologiesTab/index';
import './scss/main.css';

const Technologies = () => {
  const [expanded, setExpanded] = useState<String>('01');

  const handleChange = (count: any) => {
    setExpanded(count);
  };

  return (
    <section className='xl:py-20 lg:py-14 py-10 bg-secondary'>
      <section className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
        <SectionHeader
          title={<>Our Services</>}
          description={
            <>Cutting-Edge Technologies We Work With for Optimal Results</>
          }
          headingClassName=''
          descriptionClassName=''
        />

        <div
          className='accord flex flex-row content-center items-center relative w-full gap-5 lg:mt-6 md:mt-6 mt-7 [transition: all 200ms ease-in-out 50ms]'
          style={{ opacity: 1 }}
        >
          {accordionData.map((data) => (
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
