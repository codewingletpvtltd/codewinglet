import { ChangeEvent, useRef, useState } from 'react';

import FileUpload from './FileUpload';

export default {
  component: FileUpload,
};

export const Basic = () => {
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;

    if (files) {
      setFileName(files[0].name);
    }
  };

  return (
    <div>
      <input
        type='file'
        ref={fileRef}
        className='invisible'
        onChange={onFileChange}
      />
      <FileUpload fileRef={fileRef} fileName={fileName} />
    </div>
  );
};
