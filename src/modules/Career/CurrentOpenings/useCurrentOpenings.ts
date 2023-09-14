'use client';

import { useState } from 'react';

const useCurrentOpenings = () => {
  const [expanded, setExpanded] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  const onChangeAccordion = (index: number) => () => {
    index === expanded ? setExpanded(-1) : setExpanded(index);
  };

  return {
    expanded,
    setExpanded,
    showModal,
    setShowModal,
    onChangeAccordion,
  };
};

export default useCurrentOpenings;
