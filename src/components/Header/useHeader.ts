'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useHeader = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState<number>(-1);
  const onMenu = () => {
    setShowMenu(!showMenu);
    setSubMenuIndex(-1);
    // onPreventScroll(!showMenu);
  };

  const onNavigate = (path: string) => () => {
    router.push(path);
  };
  return { showMenu, onMenu, subMenuIndex, setSubMenuIndex, onNavigate };
};

export default useHeader;
