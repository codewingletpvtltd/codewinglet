import { FC } from 'react';
import { ReviewProps } from '../types';
import Typography from '../../Typography';

const ClientDetails: FC<ReviewProps> = ({ name, designation }) => (
  <div className='mt-[35px] flex justify-between'>
    <Typography className='text-paragraph1Light text-white'>{name}</Typography>
    <Typography className='text-paragraph1Light text-white'>
      {designation}
    </Typography>
  </div>
);

export default ClientDetails;
