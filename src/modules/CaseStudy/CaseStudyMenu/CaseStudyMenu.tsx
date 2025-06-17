'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@codewinglet/utils';

// Static menu data
const MENU_ITEMS = [
  { title: 'About project', path: '#aboutProject' },
  { title: 'UX/UI', path: '#uiux' },
  { title: 'Problems', path: '#problems' },
  { title: 'Solution', path: '#solution' },
  { title: 'Technologyies', path: '#technologyies' },
  { title: 'Results', path: '#results' },
  { title: 'Project learning', path: '#projectLearning' },
  { title: 'Testimonial', path: '#testimonial' },
];

const CaseStudyMenu = () => {
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
    <div className='lg:sticky fixed w-full z-20 lg:top-[86px] top-0 lg:mt-0 md:mt-[90px] mt-[78px] lg:block'>
      <div className='bg-white border-b border-gray-100'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
          <div className='flex md:gap-[90px] gap-8 lg:overscroll-x-none overflow-x-auto'>
            {MENU_ITEMS.map(({ title, path }, index) => (
              <div
                key={title}
                role='button'
                // tabIndex={0}
                className={cn(
                  'relative md:text-tagBold flex-shrink-0 py-3 cursor-pointer',
                  activeIndex === index
                    ? '!font-normal text-gray-800'
                    : '!font-light text-gray-400'
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
    </div>
  );
};

export default CaseStudyMenu;
