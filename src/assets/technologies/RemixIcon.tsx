import Image from 'next/image';
import { RemixPNG } from '.';

const RemixIcon = () => (
  <div className='bg-[#FDDEF5] h-full w-full rounded-full flex items-center justify-center'>
    <Image
      src={RemixPNG}
      alt=''
      className='mr-[-1px] mt-[-2px] h-[27px] w-[28px]'
    />
  </div>
);

export default RemixIcon;
