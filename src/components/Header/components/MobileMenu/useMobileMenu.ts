'use client';
import { useRouter } from 'next/navigation';

const useMobileMenu = (onMenu: () => void) => {
  const router = useRouter();

  const onNavigate = (path: string) => () => {
    onMenu();
    router.push(path);
  };

  return { onNavigate };
};

export default useMobileMenu;
