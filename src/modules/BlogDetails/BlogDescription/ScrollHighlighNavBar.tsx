'use client';
import { useEffect, useState } from 'react';

import { Arrow } from '@codewinglet/assets';
import { Typography } from '@codewinglet/components';
interface Header {
  id: string;
  title: string;
}

interface ScrollHighlightNavbarProps {
  navHeader: Header[];
  containerClassName?: string;
}

const ScrollHighlightNavbar: React.FC<ScrollHighlightNavbarProps> = ({
  navHeader,
  containerClassName = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navHeader.map((header) =>
        document.getElementById(header.id)
      );
      let currentIndex = 0;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const offset = 155; // Adjust this value as necessary
          if (sectionTop <= offset && sectionTop > -section.offsetHeight) {
            currentIndex = index;
          }
        }
      });

      setActiveIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navHeader]);

  return (
    <div
      className={`w-full lg:p-0 p-5 bg-white lg:sticky lg:z-0 z-10 right-auto lg:top-[190px] md:top-[90px] top-[78px] lg:left-auto left-0 ${containerClassName}`}
    >
      <Typography className='text-primary text-subtitle2 pb-[18px] mb-[29px] border-b-2 border-primary'>
        Table of Contents
      </Typography>
      <ul className='grid overflow-auto [-ms-overflow-style:_none;] [scrollbar-width:_none;] gap-5'>
        {navHeader?.map((policy, i) => (
          <li key={policy.id} className='flex-shrink-0'>
            <a
              href={`#${policy.id}`}
              className={`bg-white p-0 ${
                i === activeIndex
                  ? 'text-primary lg:text-paragraph2 md:text-paragraph2 text-tag'
                  : 'text-secondary lg:text-paragraph2Light md:text-paragraph2Light text-tagLight'
              } cursor-pointer flex items-center justify-between`}
              onClick={() => setActiveIndex(i)}
            >
              {policy.title}
              <div className='hidden'>
                <Arrow
                  className={` ${i === activeIndex ? 'block' : 'hidden'}`}
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollHighlightNavbar;
