'use client';
import { useState } from 'react';

const useFaq = () => {
  const [expanded, setExpanded] = useState(-1);

  const onChangeAccordion = (idx: number) => () => {
    idx === expanded ? setExpanded(-1) : setExpanded(idx);
  };

  return {
    expanded,
    onChangeAccordion,
  };
};

export default useFaq;
