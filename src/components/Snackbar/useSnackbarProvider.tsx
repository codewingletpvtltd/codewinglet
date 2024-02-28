'use client';

import { useState } from 'react';

import Image from 'next/image';

const useSnackbarProvider = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ msg: '', type: '' });

  const showHandler = ({ msg = '', type = '' }) => {
    setOpen(true);
    setData({ msg, type });
    setTimeout(() => {
      setOpen(false);
      setData({ msg: '', type: '' });
    }, 5000);
  };

  const closeHandler = () => {
    setOpen(false);
    setData({ msg: '', type: '' });
  };

  const showIcon = () => {
    switch (data.type) {
      case 'success':
        return (
          <Image
            src={'/assets/icons/SuccessIcon.svg'}
            alt='SuccessIcon'
            width={24}
            height={24}
          />
        );
      case 'warn':
        return (
          <Image
            src={'/assets/icons/WarningIcon.svg'}
            alt='WarningIcon'
            width={24}
            height={24}
          />
        );
      case 'error':
        return (
          <Image
            src={'/assets/icons/ErrorIcon.svg'}
            alt='ErrorIcon'
            width={24}
            height={24}
          />
        );
      case 'info':
        return (
          <Image
            src={'/assets/icons/InfoIcon.svg'}
            alt='InfoIcon'
            width={24}
            height={24}
          />
        );
      default:
        return;
    }
  };

  const background = () => {
    switch (data.type) {
      case 'success':
        return 'bg-successBg border-success/30';
      case 'warn':
        return 'bg-warnBg border-warn/30';
      case 'error':
        return 'bg-popupErrorBg border-popupError/30';
      case 'info':
        return 'bg-infoBg border-info/30';
      default:
        return 'bg-white border-white/30';
    }
  };

  return {
    open,
    showHandler,
    closeHandler,
    showIcon,
    data,
    background,
  };
};

export default useSnackbarProvider;
