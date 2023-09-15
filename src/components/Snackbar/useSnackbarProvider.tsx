'use client';

import { useState } from 'react';
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from '@codewinglet/assets';

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
        return <SuccessIcon />;
      case 'warn':
        return <WarningIcon />;
      case 'error':
        return <ErrorIcon />;
      case 'info':
        return <InfoIcon />;
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
