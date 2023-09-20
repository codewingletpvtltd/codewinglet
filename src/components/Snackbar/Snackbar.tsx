'use client';
import React, { FC, useContext } from 'react';
import { getClassNames } from '@codewinglet/utils';
import { SnackbarClose } from '@codewinglet/assets';
import Typography from '../Typography';
import { SnacbarProviderProps } from './types';
import useSnackbarProvider from './useSnackbarProvider';

const SnackbarContext = React.createContext({
  showSnackbar: ({
    msg,
    type,
  }: {
    msg: string;
    type: 'success' | 'warn' | 'error' | 'info';
  }) => {},
});

export const SnackbarProvider: FC<SnacbarProviderProps> = ({ children }) => {
  const { showHandler, open, closeHandler, showIcon, data, background } =
    useSnackbarProvider();

  return (
    <SnackbarContext.Provider value={{ showSnackbar: showHandler }}>
      {children}
      <div className='flex justify-end bg-error relative px-[20px] md:px-[38px]'>
        <div
          className={getClassNames(
            'fixed py-[10px] px-[20px] top-[100px] rounded-10 z-[9999] shadow-lg border',
            background(),
            open ? 'animate-enterFromRight' : 'right-[-150px]'
          )}
        >
          <div className='flex flex-row items-center gap-[10px]'>
            {showIcon()}
            <Typography
              variant='subtitle1'
              className='max-w-[200px] md:max-w-[500px] text-black'
            >
              {data.msg}
            </Typography>
            <span
              className='flex justify-end ml-[20px] hover:shadow-lg hover:rounded-full hover:bg-[rgba(0,0,0,0.08)] p-[10px] cursor-pointer hover:transition-opacity hover:duration-300 hover:ease-linear'
              onClick={closeHandler}
            >
              <SnackbarClose className='h-[20px] w-[20px]' />
            </span>
          </div>
        </div>
      </div>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const { showSnackbar } = useContext(SnackbarContext);

  return { showSnackbar };
};
