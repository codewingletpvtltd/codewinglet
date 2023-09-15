import { FC, memo } from 'react';
import Typography from '../Typography';
import { FileUploadProps } from './types';

const FileUpload: FC<FileUploadProps> = ({ fileRef, fileName }) => (
  <div
    className='rounded-10 border border-gray cursor-pointer flex row bg-white'
    onClick={() => fileRef && fileRef.current && fileRef.current.click()}
  >
    <Typography
      variant='subtitle1'
      className='text-lightBlack px-[15px] py-[7px] border-r border-gray'
    >
      Choose File
    </Typography>
    <Typography className='ps-[22px] pe-[15px] py-[7px]'>
      {fileName ? fileName : 'Upload your CV'}
    </Typography>
  </div>
);

export default memo(FileUpload);
