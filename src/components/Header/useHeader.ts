'use client';
import { useState } from 'react';

const useHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onMenu = () => {
    setShowMenu(!showMenu);
    // onPreventScroll(!showMenu);
  };

  return { showMenu, onMenu };
};

export default useHeader;
