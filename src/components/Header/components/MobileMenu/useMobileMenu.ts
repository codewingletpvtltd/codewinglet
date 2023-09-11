'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useMobileMenu = (onMenu: () => void) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(0);

  const onMenuExpand = (index: number) => () => {
    index === expanded ? setExpanded(-1) : setExpanded(index);
  };

  const onNavigate = (path: string) => () => {
    onMenu();
    router.push(path);
  };

  return { expanded, onMenuExpand, onNavigate };
};

export default useMobileMenu;
