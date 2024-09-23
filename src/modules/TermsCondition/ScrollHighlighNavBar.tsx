import { useEffect, useRef, useState } from 'react';

import { Arrow } from '@codewinglet/assets';
interface Header {
  id: string;
  ref: React.RefObject<HTMLElement | null>;
  title: string;
}

interface ScrollHighlightNavbarProps {
  navHeader: Header[];
}

const nearestIndex = (
  currentPosition: number,
  sectionPositionArray: Header[],
  startIndex: number,
  endIndex: number
): number => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].ref.current!.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].ref.current!.offsetTop - currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    let nextNearest = Math.floor((startIndex + endIndex) / 2);
    let a = Math.abs(
      sectionPositionArray[nextNearest].ref.current!.offsetTop - currentPosition
    );
    let b = Math.abs(
      sectionPositionArray[nextNearest + 1].ref.current!.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

const ScrollHighlightNavbar: React.FC<ScrollHighlightNavbarProps> = ({
  navHeader,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeOutRef = useRef<any>(0);
  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(timeOutRef.current);
      let index = nearestIndex(
        window.scrollY,
        navHeader,
        0,
        navHeader.length - 1
      );
      timeOutRef.current = setTimeout(() => setActiveIndex(index), 50);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [navHeader]);

  return (
    <div className='2xl:w-1/4 xl:w-[27%] w-full lg:p-0 p-5 bg-white lg:sticky fixed lg:z-0 z-10 right-auto lg:top-[230px] md:top-[90px] top-[78px] lg:left-auto left-0'>
      <ul className='lg:grid flex overflow-auto [-ms-overflow-style:_none;] [scrollbar-width:_none;] gap-6'>
        {navHeader.map((policy, i) => (
          <li key={policy.id} className='flex-shrink-0'>
            <a href={`#${policy.id}`}>
              <div
                className={`bg-white p-0 ${
                  i === activeIndex
                    ? 'text-primary lg:text-paragraph1Bold md:text-paragraph2 text-tag'
                    : 'text-secondary lg:text-paragraph1ExtraLight md:text-paragraph2Light text-tagLight'
                } cursor-pointer flex items-center justify-between`}
              >
                {policy.title}
                <div className='hidden'>
                  <Arrow
                    className={`${i === activeIndex ? 'block' : 'hidden'}`}
                  />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollHighlightNavbar;
