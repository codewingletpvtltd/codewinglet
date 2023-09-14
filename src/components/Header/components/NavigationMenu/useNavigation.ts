'use client';
import { useRouter } from 'next/navigation';
import { useState, MouseEvent } from 'react';

const useNavigation = () => {
  const router = useRouter();
  const [anchorEle, setAnchorEle] = useState<HTMLLIElement | null>(null);

  const onMouseEnter = (e: MouseEvent<HTMLLIElement>) => {
    // const anchorEleTemp = e.currentTarget;
    setAnchorEle(e.currentTarget);

    // if (anchorEleTemp) {
    //   const contentContainer = anchorEleTemp.children[2];
    //   if (contentContainer) {
    //     const containerData = contentContainer.getBoundingClientRect();
    //     const containerWidth = containerData.left + containerData.width;
    //     const screenWidth = screen.width;

    //     if (containerWidth >= screenWidth) {
    //       // setLeft(containerWidth - screenWidth + 100);
    //     }
    //   }
    // }
  };

  const onMouseLeave = () => {
    // setLeft(1);
    setAnchorEle(null);
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
    router.push(path);
  };

  return {
    onMouseLeave,
    onMouseEnter,
    gridRows,
    onNavigate,
    anchorEle,
  };
};

export default useNavigation;
