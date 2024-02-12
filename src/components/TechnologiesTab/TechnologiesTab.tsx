'use client';
import React from 'react';
import '../../modules/Home/OurServices/scss/technologies.css';

interface AccordCompProps {
  title: string;
  count: string;
  caption: string;
  content: string;
  handleChange: any;
  expanded: any;
}

const Accordion: React.FC<AccordCompProps> = ({
  title,
  count,
  caption,
  content,
  handleChange,
  expanded,
}) => {
  console.log(expanded, count);

  return (
    <div
      className={`!bg-white accord-item accord-trigger accord-default relative cursor-pointer py-[30px] pr-[30px] pl-[25px] flex text-[24px] h-[460px] bg-[#f0ffee]  transition-all ease-in-out duration-700 delay-75 overflow-hidden w-[90px] border ${
        expanded == count
          ? '!bg-cover bg-no-repeat bg-center bg-[url(https://shorturl.at/dEFO3)] w-screen text-white'
          : ''
      }`}
      onClick={() => handleChange(count)}
    >
      <div className='w-7 flex justify-between relative text-primary accord-head'>
        <h3
          className={`${
            expanded == count ? '!text-white' : ''
          } font-400 text-[20px] leading-[1] p-0 m-0 rotate-180 [transition: all 200ms ease-in-out 50ms] [writing-mode:vertical-rl]`}
        >
          {title}
        </h3>
        <span
          className={`${
            expanded == count ? '!text-white text-[40px]' : ''
          }  absolute text-[20px] text-primary`}
        >
          {count}
        </span>
      </div>
      <div
        className={`${
          expanded == count
            ? 'transition-opacity ease-linear delay-500 duration-300 opacity-100'
            : ''
        } flex justify-between opacity-0 p-0 px-[60px] gap-10 [transition:opacity 50ms ease 0s]`}
      >
        <div className='flex flex-col'>
          <h2 className='text-[50px] font-300 mb-[30px] text-left leading-tight'>
            {caption}
          </h2>
          <div className='font-300 text-[30px]'>
            <p>
              <span>{content}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
