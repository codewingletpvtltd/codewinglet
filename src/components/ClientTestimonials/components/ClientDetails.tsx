import Image from 'next/image';
import { FC } from 'react';
import ClientImage from '@codewinglet/assets/clientImage.svg';
import { ReviewProps } from '../types';
import Typography from '../../Typography';

const ClientDetails: FC<ReviewProps> = ({ name, designation }) => (
  <div className='mt-[39px] flex row items-center gap-[14px]'>
    <Image
      className='rounded-full h-[47px] w-[47px] md:h-[58px] md:w-[58px] xl:h-[65px] xl:w-[65px]'
      src={ClientImage}
      alt='avatar'
    />
    <div>
      <Typography variant='h6' className='font-extrabold md:text-[20px]'>
        {name}
      </Typography>
      <Typography
        variant='subtitle1'
        className='font-medium !text-[14px] md:text-[16px] text-primary'
      >
        {designation}
      </Typography>
    </div>
  </div>
);

export default ClientDetails;
