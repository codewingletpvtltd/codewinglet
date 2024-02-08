import { FC, memo } from 'react';
import { ReviewProps } from '../types';
import Typography from '../../Typography';

const ClientDetails: FC<ReviewProps> = ({ name, designation }) => (
  <div className='mt-[35px] flex justify-between'>
    {/* <Image
      className='rounded-full h-[47px] w-[47px] md:h-[58px] md:w-[58px] xl:h-[65px] xl:w-[65px]'
      src={ClientImage}
      alt='avatar'
    /> */}
    <Typography
      variant='subtitle1'
      className='!text-[18px] font-300 text-white'
    >
      {name}
    </Typography>
    <Typography
      variant='subtitle1'
      className='!text-[18px] font-300 text-white'
    >
      {designation}
    </Typography>
  </div>
);

export default memo(ClientDetails);
