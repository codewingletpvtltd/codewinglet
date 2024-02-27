'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useMobileMenu = (onMenu: () => void) => {
  const router = useRouter();
  const [sunMenuIndex, setSubMenuIndex] = useState(-1);

  const onNavigate = (path: string) => () => {
    onMenu();
    router.push(path);
  };

  return { sunMenuIndex, setSubMenuIndex, onNavigate };
};

export default useMobileMenu;
