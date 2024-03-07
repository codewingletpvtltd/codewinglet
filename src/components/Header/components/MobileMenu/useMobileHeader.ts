'use client';
import { useState } from 'react';

const useMobileHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    // onPreventScroll(!showMenu);
  };

  return { showMobileMenu, onMobileMenu };
};

export default useMobileHeader;
