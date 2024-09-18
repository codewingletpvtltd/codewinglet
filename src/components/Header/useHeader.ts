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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/event-template.jpg'; // Path to the image file
    link.download = 'event-template.jpg'; // The name of the file to be downloaded
    link.click();
  };

  return {
    showMenu,
    onMenu,
    subMenuIndex,
    setSubMenuIndex,
    onNavigate,
    handleDownload,
  };
};

export default useHeader;
