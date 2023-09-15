'use client';
import { ChangeEvent, FC, memo, useRef, useState } from 'react';
import { FileUpload, Modal, TextField } from '@codewinglet/components';
import { CareerApplyNowProps } from './types';

const CareerApplyNow: FC<CareerApplyNowProps> = ({ open, onClose }) => {
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;

    if (files) {
      setFileName(files[0].name);
    }
  };

  return (
    <Modal open={open} title='Career' onClose={onClose} onApply={onClose}>
      <TextField placeholder='Full Name*' fullWidth />
      <TextField placeholder='Email*' fullWidth />
      <TextField placeholder='Mobile Number*' fullWidth />
      <input
        type='file'
        ref={fileRef}
        onChange={onFileChange}
        className='hidden'
      />
      <FileUpload fileRef={fileRef} fileName={fileName} />
    </Modal>
  );
};

export default memo(CareerApplyNow);
