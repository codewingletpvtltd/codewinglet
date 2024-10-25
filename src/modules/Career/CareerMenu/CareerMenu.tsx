'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@codewinglet/utils';

// Static menu data
const MENU_ITEMS = [
  { title: 'Career', path: '#career' },
  { title: 'Perks & Benefits', path: '#perks' },
  { title: 'Hiring process', path: '#process' },
  { title: 'Open jobs', path: '#jobs' },
  { title: 'Insights from employee', path: '#employee' },
];

const CareerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Handle body scrolling when the menu is open
  useEffect(() => {
    const appClassList = document.querySelector('.App')?.classList;
    if (isMenuOpen) {
      appClassList?.add('stop-scrolling', 'bg-white');
    } else {
      appClassList?.remove('stop-scrolling', 'bg-white');
    }
  }, [isMenuOpen]);

  // Setup IntersectionObserver for section visibility tracking
  useEffect(() => {
    const sections = MENU_ITEMS.map(({ path }) =>
      document.getElementById(path.substring(1))
    );

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = MENU_ITEMS.findIndex(
            ({ path }) => path.substring(1) === entry.target.id
          );
          setActiveIndex(index);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach(
      (section) => section && observerRef.current?.observe(section)
    );

    return () => {
      sections.forEach(
        (section) => section && observerRef.current?.unobserve(section)
      );
    };
  }, []);

  // Handle menu item click and keyboard events
  const handleMenuClick = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
    id: string,
    index: number
  ) => {
    event.preventDefault();
    const targetSection = document.getElementById(id);
    if (targetSection) {
      setIsMenuOpen(false);
      setActiveIndex(index);
      setTimeout(
        () => targetSection.scrollIntoView({ behavior: 'smooth' }),
        200
      );
    }
  };

  return (
    <div className='bg-white lg:mt-[86px] md:mt-[90px] mt-[78px] border-b border-headerBoxBorder fixed w-full z-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <div className='flex lg:overscroll-x-none overflow-x-auto'>
          {MENU_ITEMS.map(({ title, path }, index) => (
            <div
              key={title}
              role='button'
              tabIndex={0} // Keyboard accessibility
              className={cn(
                'relative md:text-paragraph2Light text-paragraph2Light flex-shrink-0 py-2.5 px-5 cursor-pointer !font-light',
                activeIndex === index
                  ? 'bg-bg border-b border-primary !font-light'
                  : ''
              )}
              onClick={(event) =>
                handleMenuClick(event, path.substring(1), index)
              }
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleMenuClick(event, path.substring(1), index);
                }
              }}
            >
              <span
                className={cn(
                  'flex justify-between w-full',
                  isMenuOpen && 'items-center'
                )}
              >
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerMenu;
