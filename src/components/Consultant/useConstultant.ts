'use client';
import { useState } from 'react';

const useConsultant = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return {
    openModal,
    toggleModal,
  };
};

export default useConsultant;
