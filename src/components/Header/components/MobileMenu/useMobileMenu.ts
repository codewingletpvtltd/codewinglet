'use client';
import { useState } from 'react';

const useMobileMenu = () => {
  const [expanded, setExpanded] = useState(0);

  const onMenuExpand = (index: number) => () => {
    index === expanded ? setExpanded(-1) : setExpanded(index);
  };

  return { expanded, onMenuExpand };
};

export default useMobileMenu;
