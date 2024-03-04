import { FC } from 'react';
import { ReviewProps } from '../types';
import Typography from '../../Typography';

const ClientDetails: FC<ReviewProps> = ({ name, designation }) => (
  <div className='mt-[35px] flex justify-between'>
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

export default ClientDetails;
