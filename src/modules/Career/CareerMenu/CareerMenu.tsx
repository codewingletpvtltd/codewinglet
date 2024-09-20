/* eslint-disable import/order */
'use client';

import { cn } from '@codewinglet/utils';
import { useEffect, useRef, useState } from 'react';

const designation = [
  {
    title: 'Career',
    path: '#career',
  },
  {
    title: 'Perks & Benefits',
    path: '#perks',
  },
  {
    title: 'Hiring process',
    path: '#process',
  },
  {
    title: 'Open jobs',
    path: '#jobs',
  },
  {
    title: 'Insights from employee',
    path: '#employee',
  },
];

const CareerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const app = document.querySelector('.App')?.classList;
    if (isMenuOpen) {
      app?.add('stop-scrolling', 'bg-white');
    } else {
      app?.remove('stop-scrolling', 'bg-white');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = designation.map((item) =>
      document.getElementById(item.path.substring(1))
    );
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = designation.findIndex(
            (item) => item.path.substring(1) === entry.target.id
          );
          setActiveIndex(index);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => {
      if (section) observerRef.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observerRef.current?.unobserve(section);
      });
    };
  }, []);

  const clickHandler = (
    event:
      | React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
      | React.KeyboardEvent<HTMLSpanElement>,
    id: string,
    index: number
  ): void => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      setIsMenuOpen(false);
      setActiveIndex(index);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <>
      <div className='bg-white pt-2.5 md:pt-10 lg:mt-[86px] md:mt-[90px] mt-[78px] border-b border-headerBoxBorder fixed w-full z-10'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
          <div className='flex lg:overscroll-x-none overflow-x-auto'>
            {designation.map(({ title, path }, index) => (
              <button
                key={title}
                className={cn(
                  'relative md:text-paragraph1Light text-paragraph2Light flex-shrink-0 py-2.5 px-5 cursor-pointer !font-light',
                  activeIndex === index
                    ? 'bg-bg border-b border-primary !font-normal'
                    : ''
                )}
                onClick={(event) =>
                  clickHandler(event, path.substring(1), index)
                }
              >
                <span
                  role='button'
                  tabIndex={0}
                  className={cn(
                    'flex justify-between w-full',
                    isMenuOpen && 'items-center'
                  )}
                  onClick={(event) => event.preventDefault()}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      clickHandler(event, path.substring(1), index);
                    }
                  }}
                >
                  {title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CareerMenu;
