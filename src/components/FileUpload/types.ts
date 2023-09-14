import { RefObject } from 'react';

export interface FileUploadProps {
  fileRef: RefObject<HTMLInputElement>;
  fileName?: string;
}
