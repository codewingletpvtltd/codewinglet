'use client';

import { useEffect, useRef, useState } from 'react';

import { Typography } from '@codewinglet/components';
import { cn } from '@codewinglet/utils';

const designation = [
  {
    title: 'Overview',
    path: '#overview',
  },
  {
    title: 'Companies',
    path: '#benefit',
  },
  {
    title: 'Guide',
    path: '#guide',
  },
];

const TechnologySubMenu = () => {
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
      <div className='bg-white lg:mt-[86px] md:mt-[90px] mt-[78px] border-b border-headerBoxBorder fixed w-full z-10 submenus'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex'>
          <Typography className='py-3 px-5 md:text-paragraph1Light text-tag bg-bg md:flex flex-shrink-0 font-normal hidden'>
            Angular JS
          </Typography>
          <div className='flex overflow-x-auto'>
            {designation.map(({ title, path }, index) => (
              <button
                key={title}
                className={cn(
                  'relative md:text-paragraph2Light text-text-tag flex-shrink-0 py-2.5 px-5 cursor-pointer !font-light text-secondary',
                  activeIndex === index ? '!font-normal text-primary' : ''
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
export default TechnologySubMenu;
