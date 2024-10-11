import Image from 'next/image';
import { toast } from 'react-toastify';

import CopyIcon from '../../../public/assets/icons/CopyIcon.svg';

interface CopyButtonProps {
  copyText: any;
  successMessage: string;
}

const handleCopyClick = (text: any, successMessage: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success(successMessage);
    })
    .catch((err) => {
      console.error('Failed to copy URL: ', err);
      toast.error(err.message);
    });
};

const CopyButton: React.FC<CopyButtonProps> = ({
  copyText,
  successMessage,
}) => (
  <div
    className='flex items-center justify-center lg:w-10 w-[30px] lg:h-10 h-[30px] rounded-full bg-bg cursor-pointer'
    onClick={() => handleCopyClick(copyText, successMessage)}
  >
    <Image src={CopyIcon} width='24' height='24' alt='CopyLogo' />
  </div>
);

export default CopyButton;
