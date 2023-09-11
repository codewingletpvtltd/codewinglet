'use client';
import { useRouter } from 'next/navigation';
import { useState, MouseEvent } from 'react';

const useNavigation = () => {
  const router = useRouter();
  const [left, setLeft] = useState(0);

  const onMouseEnter = (e: MouseEvent<HTMLLIElement>) => {
    const anchorEle = e.currentTarget;
    if (anchorEle) {
      const contentContainer = anchorEle.children[2];
      if (contentContainer) {
        const containerData = contentContainer.getBoundingClientRect();
        const containerWidth = containerData.left + containerData.width;
        const screenWidth = screen.width;

        if (containerWidth >= screenWidth) {
          setLeft(containerWidth - screenWidth + 100);
        }
      }
    }
  };

  const onMouseLeave = () => {
    setLeft(1);
  };

  const gridRows = (rows: number) => {
    switch (rows) {
      case 1:
        return 'group-hover:grid-rows-1';
      case 2:
        return 'group-hover:grid-rows-2';
      case 3:
        return 'group-hover:grid-rows-3';
      case 4:
        return 'group-hover:grid-rows-4';
      default:
        return 'group-hover:grid-rows-5';
    }
  };

  const onNavigate = (path: string) => () => {
    onMouseLeave();
    router.push(path);
  };

  return {
    onMouseLeave,
    onMouseEnter,
    left: `-${left}px`,
    gridRows,
    onNavigate,
  };
};

export default useNavigation;
